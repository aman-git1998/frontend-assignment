import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
apiKey: "AIzaSyCr19wwvdnml10zENWUZdx2IwmzPJTpqEQ",
  authDomain: "skin-elements-1998.firebaseapp.com",
  projectId: "skin-elements-1998",
  storageBucket: "skin-elements-1998.firebasestorage.app",
  messagingSenderId: "731674564683",
  appId: "1:731674564683:web:7a900595178967992815ce",
  measurementId: "G-3KK1N9GQ8W"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
