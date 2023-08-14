import { useState } from "react"

function ContadorMaria() {

    let [contador, setContador] = useState(0)

    return (
        <div>

            <p>Contador {contador}</p>
            <button onClick={() => { setContador(contador + 1) }}>CLICK</button>
        </div>
    )
}

export default ContadorMaria