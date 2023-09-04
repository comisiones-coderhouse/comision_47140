import { useState } from "react"
import CarritoHijo from "./CarritoHijo"
import { db } from "../db/firebase"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"


function Carrito() {

    const [selectedCant, setSelectedCant] = useState(0)
    const [token, setToken] = useState("")

    const onAdd = (cantidad) => {
        console.log("Mi Callback onAdd")
        /* if(condicion){
            setSelectedCant(cantidad)
        }else{
            setSelectedCant(cantidad + 1)
        } */
    }

    const onBuy = () => {

        //me traigo una referencia de la coleccion a la que quiero guardar la venta
        const ventasCollection = collection(db, "ventas")

        //armo el objeto que quiero guardar
        const venta = {
            usuario : {
                nombre: "Juan",
                email: "juan@mail.com"
            },
            fecha: serverTimestamp(),
            productos: [
                { id: "asdasdasd", cantidad: 2, precio: 1000 },
                { id: "asdasdasd", cantidad: 2, precio: 1000 }
            ]
        }

        //guardo el objeto en la coleccion
        const laVenta = addDoc(ventasCollection, venta)

        laVenta
            .then((resultado) => {
                console.log("Se guardo la venta")
                console.log(resultado)
                setToken(resultado.id)
            })
            .catch((error) => {
                console.log(error)
                console.log("Dio mal")
            })

    }

    return (
        <div>
            <p>Cantidad seleccionada desde el componente hijo : {selectedCant}</p>
            <CarritoHijo
                onAdd={onAdd}
            />
            <p>Por aca hay una lista del carrito actual, con su cantidad y precio</p>
            <p>Mas abajo hay un formulario</p>
            {/* <form> */}
            <input type="text" placeholder="Nombre" />
            <input type="email" placeholder="Email" />
            <button onClick={onBuy}>comprar</button>
            {/* </form> */}
            <p>Token de venta : {token}</p>
        </div>
    )
}

export default Carrito