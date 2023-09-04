import { useParams } from "react-router-dom"
import { productosHardcordeados } from "../utils"
import Contador from "../Contador"
import { useEffect, useState } from "react"
import { db } from "../db/firebase"
import { collection , getDoc , doc } from "firebase/firestore"


const ContainerDetalle = () => {


    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    const params = useParams()

    useEffect(() => {
        // fetch(`https://fakestoreapi.com/products/${params.id}`)
        //.then(res=>res.json())
        //.then(data=>{ if(data){ throw new Error("") } })
        //.catch(err=>console.log(err))

        //traigo la refe de la collection
        const productosCollection = collection(db, "productos")
        const referenciaDelDocumento = doc(productosCollection,"0HLyAn6eND6L1xjd6Gsj")
        const consulta = getDoc(referenciaDelDocumento)

        consulta
            .then((res)=>{
                console.log("Todo Bien")
                setProducto(res.data())
            })
            .catch((err)=>{
                console.log("Todo Mal")
                console.log(err)
            })

        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    if (loading) return <p>Cargando...</p>

    return (
        <div>
            <h2>Detalle</h2>
            <img src={`https://picsum.photos/id/${params.id}/200/300`} alt="" />
            <p>id: {params.id}</p>
            <p>{producto.description}</p>
            <Contador />
        </div>
    )
}
export default ContainerDetalle