import { useEffect, useState } from "react"
import Presentacional from "./Presentacional"
import { useParams } from "react-router-dom"
import { productosConTalle, productosHardcordeados } from "../utils"
import { db } from "../db/firebase"
import { getDocs, collection, query, where } from "firebase/firestore"
import { toast } from "sonner"
//getDocs,getDoc,addDoc,updateDoc,deleteDoc / collection, query, where, doc  
//where , startAt, endAt, limit, orderBy , doc


function Container() {

    const [data, setData] = useState([])
    const [error, setError] = useState("")
    const resultado = useParams()
    const talle = resultado.talle

    useEffect(() => {


        //me traigo una referencia de la coleccion que quiero consultar
        const productosCollection = collection(db, "productos")

        const filtroDeConsulta = query(
            productosCollection,
            where("category", "==", "electronics"),
            where("price", ">", 109)
        )

        const laConsulta = getDocs(filtroDeConsulta)

        toast.promise(laConsulta, {
            loading: "Cargando...",
            success: (resultado) => {

                const aux = resultado.docs.map((doc) => {
                    const producto = doc.data()
                    producto.id = doc.id
                    return producto
                })

                setData(aux)

                return "Se cargaron los productos"
            },
            error: (error) => {
                console.log(error)
                //alert("Hubo un error al cargar los productos")
                return "Hubo un error al cargar los productos"
            }
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


    useEffect(() => {
        //Esto pasaria cuando el componente se monta

        const handleClick = () => {
            console.log("Click")
        }

        //document.addEventListener("click", handleClick)


        /* const id = setInterval(() => {
            console.log("tick")
        }, 1000) */

        const abortController = new AbortController()

        fetch("https://jsonplaceholder.typicode.com/users", {
            signal: abortController.signal,
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))

        return () => {
            //Esto pasaria cuando el componente se desmonta
            /* clearInterval(id)
            console.log("Se desmonto el componente") */

            //document.removeEventListener("click", handleClick)

            abortController.abort()
        }

    }, [])



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