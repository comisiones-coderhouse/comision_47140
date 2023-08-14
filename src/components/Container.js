import { useEffect, useState } from "react"
import Presentacional from "./Presentacional"

function Container() {

    //Estados : 1 (nunca mas va a pasar)
    const [data, setData] = useState([])

    //Efectos : 4 
    useEffect(() => {
        getProductos(setData)
    }, [])

    //Acciones : 2
    const getProductos = () => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setData(json))
    }

    //Vista : 3
    return (
        <Presentacional data={data} />
    )

}

export default Container