// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
    authDomain: "taskmanagerapp-1b010.firebaseapp.com",
    projectId: "taskmanagerapp-1b010",
    storageBucket: "taskmanagerapp-1b010.firebasestorage.app",
    messagingSenderId: "757972890901",
    appId: "1:757972890901:web:b04533498be9caed18651c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);