// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCt3OCLMmSWYI1zUWko1fi6tAvzZ5Spyhs",
  authDomain: "coder-react-federico-romero.firebaseapp.com",
  projectId: "coder-react-federico-romero",
  storageBucket: "coder-react-federico-romero.appspot.com",
  messagingSenderId: "490251009507",
  appId: "1:490251009507:web:eecee7d27436b7b17e74d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
    return app;
}