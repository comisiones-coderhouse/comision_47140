import { Route, Routes /* , Router */ } from "react-router-dom"
import Container from "./components/Container"
import Carrito from "./components/Carrito"


function Main() {

    const dark = false

    return (
        <main className={dark ? "p-2 grow bg-slate-600 text-white" : "p-2 grow bg-white"}>
            <Routes>
                <Route path="/" element={<Container/>}/>
                <Route path="/cat/:id" element={<Container/>}/>
               {/*  <Route path="/item/:id" element={<Container/>}/> */}
                <Route path="/carrito" element={<Carrito/>}/>
                <Route path="*" element={<p>404</p>}/>
            </Routes>
        </main>
    )
}

export default Main