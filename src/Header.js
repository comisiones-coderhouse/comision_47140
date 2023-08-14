import { Link } from "react-router-dom"
import NavLinks from "./NavLinks"

function Header() {
    return (
        <header id="header" className="header flex justify-between py-4 px-2 bg-slate-800 text-white">
            <Link to="/">
                <h1>Mi Pagina</h1>
            </Link>
            <NavLinks
                nombre="horacio"
                edad={33}
                vive={true}
            />
        </header>
    )
}

export default Header