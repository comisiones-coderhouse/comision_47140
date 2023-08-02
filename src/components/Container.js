import { useEffect, useState } from "react"

/* function getProductos(setData){
    //esta linea es mi "fetch"
    console.log("Arranca el pedido a la api...")
    setTimeout(() => {
        console.log("Termino el pedido a la api")
        let data = [{id:1, nombre:"Horacio"},{id:2, nombre:"Juan"},{id:3, nombre:"Pedro"}]
        setData(data)
    },3000)
}
 */

function Container() {

    const [data,setData] = useState([])
    
    //useEffect()
    //getProductos(setData)

    return (
        <div>
            <h2>Cargando...</h2>
        </div>
    )
}

export default Container