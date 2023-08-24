import { createContext } from "react";

export const contexto = createContext() // creo el contexto
const Provider = contexto.Provider // le saco el provider

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