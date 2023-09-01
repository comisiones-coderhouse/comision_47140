import { db } from "./firebase";
import { addDoc, collection } from "firebase/firestore";
import data from "./seedData.json"

const productosCollection = collection(db, "productos")

data.forEach((producto) => {

    addDoc(productosCollection, producto)
    .then((resultado) => {
        console.log("🚀 ~ .then ~ resultado:", resultado)
        return console.log("Producto agregado")
    })
    .catch((error) => {
        console.log("🚀 ~ data.forEach ~ error:", error)
        return console.log("Todo mal")
    })

})
