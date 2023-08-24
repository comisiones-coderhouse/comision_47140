import { NavLink } from "react-router-dom"
import CartWidget from "./components/CartWidget"
import { useContext } from "react"
import { contextoNuevo } from "./App"

function NavLinks() {

    const valor = useContext(contextoNuevo)

    return (
        <nav onClick={valor.saludar}  className="flex gap-4">
            <NavLink className="nav__link" to="/cat/M">categoria 1</NavLink>
            <NavLink className="nav__link" to="/cat/L">categorias 2</NavLink>
            <CartWidget/>
        </nav>
    )
}


export default NavLinks