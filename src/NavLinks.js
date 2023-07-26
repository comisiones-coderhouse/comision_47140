function NavLinks(parametros) {

    console.log(parametros)//{nombre : "",edad : ""}

    return (
        <nav>
            <a href="#">{parametros.nombre}</a>
            <a href="#">link</a>
            <a href="#">link</a>
        </nav>
    )
}


export default NavLinks