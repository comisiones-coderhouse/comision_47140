import logo192 from "./logo192.png"

function Main() {

    let nombre = "Horacio"

    //public === localhost
    //
    return (
        <main>
            <h2>Home</h2>
            <p>Bienvenido {nombre}</p>
            {/* <img src="/logo192.png" alt="" /> */}
            <img src={logo192} alt="" />
        </main>
    )
}

export default Main