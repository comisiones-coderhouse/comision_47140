import { Route, Routes } from "react-router-dom"
import Container from "./components/Container"
import Carrito from "./components/Carrito"
import ContainerDetalle from "./components/ContainerDetalle"


function Main() {

    const dark = false

    return (
        <main className={dark ? "p-2 grow bg-slate-600 text-white" : "p-2 grow bg-white"}>
            <Routes>
                
                <Route path="/" element={<Container greeting=""/>}/>
                <Route path="/cat/:talle" element={<Container/>}/>
                <Route path="/item/:id" element={<ContainerDetalle/>}/>
                <Route path="/carrito" element={<Carrito/>}/>
                <Route path="*" element={<p>404</p>}/>
                
            </Routes>
        </main>
    )
}

export default Main