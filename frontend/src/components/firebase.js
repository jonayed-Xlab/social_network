import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDAhY8_1DE8XlgGpTkuyaC_DwZ_zMjjZRU",
  authDomain: "instragram-clone-5b333.firebaseapp.com",
  projectId: "instragram-clone-5b333",
  storageBucket: "instragram-clone-5b333.appspot.com",
  messagingSenderId: "565894508917",
  appId: "1:565894508917:web:8aef15b9ad08f2121c233c",
  measurementId: "G-Z4YCNWSVQQ"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export {auth};