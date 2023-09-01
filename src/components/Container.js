import { useEffect, useState } from "react"
import Presentacional from "./Presentacional"
import { useParams } from "react-router-dom"
import { productosConTalle, productosHardcordeados } from "../utils"
import { db } from "../db/firebase"
import { getDocs , collection } from "firebase/firestore"
//getDocs,getDoc,addDoc / collection, query, where, doc  


function Container() {

    const [data, setData] = useState([])
    const [error, setError] = useState("") 
    const resultado = useParams() 
    const talle = resultado.talle 

    useEffect(() => {

        //me traigo una referencia de la coleccion que quiero consultar
        const productosCollection = collection(db, "productos")

        const laConsulta = getDocs(productosCollection)

        laConsulta
            .then((resultado) => {
                console.log(resultado.docs[0].id)
                console.log(resultado.docs[0].data())
                //resultado.docs es un array de objetos, pero esos objetos no son los documentos con la info, sino mas bien una "representacion"
                //cada objeto tiene un id y un metodo data que le extrae la info
                //intenten hacer un mapeo de cada cosa que venga en el array, extraer la data de cada uno, construir un nuevo array con la info real y setearlo como estado
            })
            .catch((error) => {
                console.log("Dio mal")
            })



        if (talle) {
            console.log("Filtro por talle : " + talle)

            const productosFiltrados = []

            for (let i = 0; i < productosConTalle.length; i++) {
                const producto = productosConTalle[i]
                if (producto.talle === talle) {
                    productosFiltrados.push(producto)
                }
            }

            if (productosFiltrados.length === 0) {
                setError("No hay productos con ese talle")
            }

            setData(productosFiltrados)

        } else {

            setData(productosConTalle)
        }


    }, [talle])


    const getAllProducts = () => {
        const pedido = new Promise((res, rej) => {
            setTimeout(() => {
                res(productosHardcordeados)
            }, 2000)
        })

        return pedido
    }

    return (
        <>
            {error ? <p>{error}</p> : <Presentacional data={data} />}
        </>
    )

}

export default Container