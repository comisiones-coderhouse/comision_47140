import { NavLink } from "react-router-dom"

function CartWidget() {
  return (
    <NavLink to="/carrito">
        <i className="material-icons">shopping_cart</i>
        <span>1</span>
    </NavLink>
  )
}

export default CartWidget