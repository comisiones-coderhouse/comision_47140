import { useState , useContext } from "react"
import { contexto } from "./components/MiContexto"

function Contador(props) {

    let [contador,setContador] = useState(0)

    const sumar = () => setContador(contador + 1)
    const restar = () => setContador(contador - 1)
    //const resetear = () => setContador(0)
    const handleConfirmar = () => {
        props.handleCallback(contador)
    }

    return (
        <main className="p-2 grow">
            <p>Contador : {contador}</p>
            <button className="border p-1 rounded" onClick={sumar}>sumar</button>
            <button className="border p-1 rounded" onClick={restar}>restar</button>
            <button className="border p-1 rounded" onClick={handleConfirmar}>confirmar cantidad</button>
        </main>
    )
}

export default Contador