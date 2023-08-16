import { useState } from "react"
import CarritoHijo from "./CarritoHijo"

function Carrito() {

    const [selectedCant,setSelectedCant] = useState(0)

    const onAdd = (cantidad) => {
        console.log("Mi Callback onAdd")
        if(condicion){
            setSelectedCant(cantidad)
        }else{
            setSelectedCant(cantidad + 1)
        }
    }

    return (
        <div>
            <p>Cantidad seleccionada desde el componente hijo : {selectedCant}</p>
            <CarritoHijo
                onAdd={onAdd}
            />
        </div>
    )
}

export default Carrito