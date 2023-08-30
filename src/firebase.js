import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBO7AQxG2q5wE6k865YWOiC4klbrzf36-E",
    authDomain: "comision-47140.firebaseapp.com",
    projectId: "comision-47140",
    storageBucket: "comision-47140.appspot.com",
    messagingSenderId: "857916284550",
    appId: "1:857916284550:web:8d4e03d46b6de5052e7b07"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);