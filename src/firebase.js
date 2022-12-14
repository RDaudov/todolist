import {initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCcPEyvKjESrGeMSMLyDDXzcNAzwJNmktE",
    authDomain: "todo-a0b68.firebaseapp.com",
    databaseURL: "https://todo-a0b68-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "todo-a0b68",
    storageBucket: "todo-a0b68.appspot.com",
    messagingSenderId: "342626132547",
    appId: "1:342626132547:web:5350364a723015b241eaf6",
    measurementId: "G-QDP6SYDF6T"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app)

  export {db};
  