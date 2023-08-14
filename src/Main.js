import { Route, Routes /* , Router */ } from "react-router-dom"
import Container from "./components/Container"


function Main() {

    const dark = false

    return (
        <main className={dark ? "p-2 grow bg-slate-600 text-white" : "p-2 grow bg-white"}>
            <Routes>
                {/* if url del navegador es igual al path entonces mostra element */}

                {/* / : se muestra un listado de todos los productos */}
                <Route path="/" element={<Container/>}/>
                {/* /cat/:id : se muesta un listado de solo los productos de esa categoria */}
                <Route path="/cat/:id" element={<Container/>}/>

                <Route path="/carrito" element={<p>Carrito</p>}/>
                <Route path="*" element={<p>404</p>}/>
            </Routes>
        </main>
    )
}

export default Main