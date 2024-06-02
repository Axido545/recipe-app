import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBhZbRievQ7mlov_lebwVvXnp5eErPDb1s",
    authDomain: "recipe-app-fb728.firebaseapp.com",
    projectId: "recipe-app-fb728",
    storageBucket: "recipe-app-fb728.appspot.com",
    messagingSenderId: "794413104380",
    appId: "1:794413104380:web:8d3dade7193b7c4bed6b79",
    measurementId: "G-7CX9EYPDDD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()