import { useEffect, useState } from "react"
import Presentacional from "./Presentacional"
import { useParams } from "react-router-dom"


function Container() {

    //Estados : 1 (nunca mas va a pasar)
    const [data, setData] = useState([])
    const resultado = useParams() //{}

    
    //Efectos : 4 
    useEffect(() => {
        
        getAllProducts(setData)

        if(resultado.id){
            console.log("Estoy en la ruta de categorias" + resultado.id)
        }else {
            console.log("Estoy en la ruta de productos,osea Home")
        }
        //getProductsByCategory(x)
        
    }, [resultado.id])



    //Acciones : 2
    const getAllProducts = () => {
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