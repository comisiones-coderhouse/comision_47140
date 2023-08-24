import { useParams } from "react-router-dom"
import { productosHardcordeados } from "../utils"
import Contador from "../Contador"

const ContainerDetalle = () => {


    //hay un estado para guardar lo de la api

    const params = useParams()

    //console.log({ id: params.id })
    //console.table(productosHardcordeados)

    //hay un efecto para pedir el detalle


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