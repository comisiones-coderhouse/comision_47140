import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { contexto } from "./MiContexto"

function CartWidget() {

  const valorDelContexto = useContext(contexto)

  return (
    <NavLink to="/carrito">
        <i className="material-icons">shopping_cart</i>
        <span>{valorDelContexto.cantidadTotal}</span>
    </NavLink>
  )
}

export default CartWidget