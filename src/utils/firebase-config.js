
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyC_xEJL4lnRgGJvb1j5fhi_Q8Rk1Xwh5W0",
  authDomain: "react-netflix-clone-134ae.firebaseapp.com",
  projectId: "react-netflix-clone-134ae",
  storageBucket: "react-netflix-clone-134ae.appspot.com",
  messagingSenderId: "1081966294154",
  appId: "1:1081966294154:web:0baaefac7893efb01aa973",
  measurementId: "G-8FF0Z7YKYQ"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);