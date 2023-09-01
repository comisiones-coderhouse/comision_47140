import { useParams } from "react-router-dom"
import { productosHardcordeados } from "../utils"
import Contador from "../Contador"
import { useEffect, useState } from "react"

const ContainerDetalle = () => {


    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    const params = useParams()

    useEffect(()=>{
        // fetch(`https://fakestoreapi.com/products/${params.id}`)
        //.then(res=>res.json())
        //.then(data=>{ if(data){ throw new Error("") } })
        //.catch(err=>console.log(err))
        setTimeout(()=>{
            setLoading(false)
        },2000)
    },[])

    if(loading) return <p>Cargando...</p>

    return (
        <div>
            <h2>Detalle</h2>
            {/* picsum */}
            <img src={`https://picsum.photos/id/${params.id}/200/300`} alt="" />
            <p>id: {params.id}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet iusto nulla porro ullam tenetur quas a, deserunt maiores quo, minima totam rerum assumenda veritatis itaque saepe, blanditiis magni explicabo adipisci!</p>
            <Contador/>
        </div>
    )
}
export default ContainerDetalle