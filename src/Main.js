import { useState } from "react"
import Form from "./components/Form"
import Container from "./components/Container"

function Main() {

    //Estados
    const [dark, setDark] = useState(false)//true
    const [nombreReactivo, setNombreReactivo] = useState("Horacio")
    let nombreNoReactivo = "Juan"

    //Accion
    const toggleDark = () => {
        setDark(!dark)
    }

    const cambiarValores = () => {
        nombreNoReactivo = "pedro"
        setNombreReactivo("pedro")
    }

    //Vista
    return (
        <main className={dark ? "p-2 grow bg-slate-600 text-white" : "p-2 grow bg-white"}>
            <p>{nombreNoReactivo}</p>
            <p>{nombreReactivo}</p>
            <button onClick={cambiarValores}>cambiar valores</button>
            <button onClick={toggleDark}>toggle dark/light</button>
            <hr />
            <Form/>
            <Container/>
        </main>
    )
}

export default Main