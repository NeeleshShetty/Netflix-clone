// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD5xfIZIm6ncYm0O-N6lDfDmugFB_pgtr0",
  authDomain: "netflix-clone-760d9.firebaseapp.com",
  projectId: "netflix-clone-760d9",
  storageBucket: "netflix-clone-760d9.appspot.com",
  messagingSenderId: "1074807222833",
  appId: "1:1074807222833:web:d7e6e8bf7bcbebd8901b10",
  measurementId: "G-65PVD9SVBF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

const auth = getAuth(app);

export {auth};
export default db;