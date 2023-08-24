import { NavLink } from "react-router-dom"
import CartWidget from "./components/CartWidget"

function NavLinks() {
    return (
        <nav className="flex gap-4">
            <NavLink className="nav__link" to="/cat/M">categoria 1</NavLink>
            <NavLink className="nav__link" to="/cat/L">categorias 2</NavLink>
            <CartWidget/>
        </nav>
    )
}


export default NavLinks