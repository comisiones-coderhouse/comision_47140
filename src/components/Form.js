//Consegir el valor de un input
//tecnica 1 : console.log(evt) //por el objeto evento
//tecnica 2 : document.querySelector
//tecnica 3 : 

import { useRef } from "react"


function Form() {
    
    const nombreRef = useRef(null)
    const apellidoRef = useRef(null)

    const handleClick = () => {
        console.log(nombreRef.current.value)
        console.log(apellidoRef.current.value)
    }

    /* 
    const resetRef = () => {
        //nombreRef.current.value = ""
        //nombreRef.current = ""
    } 
    */

    return (
        <div>
            <input ref={nombreRef} type="text" placeholder="Ej : Horacio" id="nombre" />
            <input ref={apellidoRef} type="text" placeholder="Ej : Gutierrez" id="apellido" />
            <button onClick={handleClick}>ver valor</button>
        </div>
    )
}

export default Form