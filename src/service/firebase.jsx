// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Importar Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjp7jDy6xYipan-aSeQ5fFcrMbYFd9OYg",
  authDomain: "monroe-app-c3318.firebaseapp.com",
  projectId: "monroe-app-c3318",
  storageBucket: "monroe-app-c3318.appspot.com", // corregí el storageBucket, estaba mal escrito
  messagingSenderId: "463061324634",
  appId: "1:463061324634:web:de269c864c3906ae761963"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore
export const db = getFirestore(app);
// Exportar la instancia de Firestore para usarla en otros archivos