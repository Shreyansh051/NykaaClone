// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyDFMG3N3DEAxexE9Dg0IvDsDJs1_0L_iPs",
    authDomain: "nykaa-33bfa.firebaseapp.com",
    projectId: "nykaa-33bfa",
    storageBucket: "nykaa-33bfa.appspot.com",
    messagingSenderId: "751129309505",
    appId: "1:751129309505:web:7f69d88d126d8ab29c71c0",
    measurementId: "G-803GTSHD7G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(app)
export default firebaseAuth;