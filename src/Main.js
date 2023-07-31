import { useState } from "react"


function Main() {

    //Estados
    const [show, setShow] = useState(false)

    //Accion
    const toogleMenu = () => {
        setShow(!show)
    }

    if (show) {
        return (
            <main className="p-2 grow">
                <button onClick={toogleMenu} className="border p-1 rounded">toogle menu</button>
            </main>
        )
    } else {
        return (
            <main className="p-2 grow">
                <button onClick={toogleMenu} className="border p-1 rounded">toogle menu</button>
                <ul>
                    <li>Home</li>
                    <li>Productos</li>
                    <li>Contacto</li>
                </ul>
            </main>
        )
    }
}

export default Main