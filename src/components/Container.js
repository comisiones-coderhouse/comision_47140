import { useEffect, useState } from "react"
import Presentacional from "./Presentacional"
//import {getProductos} from "./utils"


function Container() {

    //Estados
    const [data, setData] = useState([])

    //Efectos : un hook para hacer pedidos a una api de manera controlada
    //Quiero ejecutar algo en el componente (ej: un pedido a la api) pero una sola vez\
    //useEffect(function,array)
    useEffect(() => {
        getProductos(setData)
    }, [])

    //Acciones
    //declaracion de la funcion
    const getProductos = () => {

        /*  console.log("Arranca el pedido a la api...")
 
         setTimeout(() => {
             
             console.log("Termino el pedido a la api")
             
             let data = [{ id: 1, nombre: "Horacio" }, { id: 2, nombre: "Juan" }, { id: 3, nombre: "Pedro" }]
 
             setData(data)
 
         }, 3000) */

        /*  function fetch(){
            return new Promise()
         }
 */

        //const obj = {}
       /*  const nueva_promesa = new Promise((res,rej) => {
            //res()
            rej()
        })
        

        console.log(nueva_promesa) */


        const resultado_del_fetch = fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setData(json))


        console.log(resultado_del_fetch)
    }


    //Vista
    return (
        <Presentacional data={data} />
    )
    /* if(data.length == 0){
        return (
            <div>
                <p>cargando...</p>
            </div>
        )
    }else {
        return (
            <div>
                <p>data cargada</p>
            </div>
        )
    } */
}



export default Container