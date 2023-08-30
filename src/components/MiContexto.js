import { createContext } from "react";

export const contexto = createContext() 
const Provider = contexto.Provider 

const MiCustomProvider = (props) => {

    const valorDelContexto = {
        carrito : [],
        montoTotal : 0,
        cantidadTotal : 10,
    }

    return (
        <Provider value={valorDelContexto}>
            {props.children}
        </Provider>
    )
}

export default MiCustomProvider;