import { NavLink } from "react-router-dom"
import CartWidget from "./components/CartWidget"

function NavLinks() {
    return (
        <nav className="flex gap-4">
            <NavLink className="nav__link" to="/cat/1">categoria 1</NavLink>
            <NavLink className="nav__link" to="/cat/2">categorias 2</NavLink>
            <CartWidget/>
        </nav>
    )
}


export default NavLinks