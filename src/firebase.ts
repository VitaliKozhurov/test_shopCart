import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBzRo6wy4pSbpYTZsTTnx71LqyA6-RjCUw",
    authDomain: "shop-cart-51bcd.firebaseapp.com",
    projectId: "shop-cart-51bcd",
    storageBucket: "shop-cart-51bcd.appspot.com",
    messagingSenderId: "398576746454",
    appId: "1:398576746454:web:341bdd5da3304e899f6e77",
    measurementId: "G-3M5LQ2KMMJ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


