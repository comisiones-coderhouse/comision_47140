import { useState } from "react"

function CarritoHijo(props) {

    const [cantidad,setCantidad] = useState(0)

    const handleSumar = () => {
        setCantidad(cantidad + 1)
    }

    const handleConfirmar = () => {
        console.log("Confirmo cantidad")
        console.log("Cantidad es : " + cantidad)
        props.onAdd(cantidad)
    }

    return (
        <div>
            <p>Cantidad : {cantidad}</p>
            <button onClick={handleSumar}>+</button>
            <button onClick={handleConfirmar}>confirmar</button>
        </div>
    )
}

export default CarritoHijo