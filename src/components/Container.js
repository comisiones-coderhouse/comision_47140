import { useEffect, useState } from "react"
import Presentacional from "./Presentacional"
import { useParams } from "react-router-dom"
import { productosConTalle, productosHardcordeados } from "../utils"

//ItemListContainer - ItemList - Item
function Container() {

    const [data, setData] = useState([])
    const [error, setError] = useState("") // "" / "No hay productos con ese talle" 
    const resultado = useParams() // {} // {talle: ""} 
    const talle = resultado.talle // "M" / "L"

    useEffect(() => {

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