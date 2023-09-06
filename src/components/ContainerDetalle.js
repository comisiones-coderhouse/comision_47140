import { useNavigate, useParams } from "react-router-dom"
import Contador from "../Contador"
import { useEffect, useState } from "react"
import { db } from "../db/firebase"
import { collection , getDoc , doc } from "firebase/firestore"

const ContainerDetalle = () => {


    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    const [cantidad, setCantidad] = useState(0)
    const [confirmado, setConfirmado] = useState(false)
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
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

    const handleCallback = (cantidadConfirmada) => {
        setCantidad(cantidadConfirmada)
        setConfirmado(true)
    }

    const handleAgregar = () => {
        navigate("/carrito")
    }

    if (loading) return <p>Cargando...</p>

    if(confirmado) return (
        <button onClick={handleAgregar}>Agregar al carrito : {cantidad} unidades</button>
    )

    return (
        <div>
            <h2>Detalle</h2>
            <img src={`https://picsum.photos/id/${params.id}/200/300`} alt="" />
            <p>id: {params.id}</p>
            <p>{producto.description}</p>
            <Contador handleCallback={handleCallback} />
        </div>
    )
}
export default ContainerDetalle