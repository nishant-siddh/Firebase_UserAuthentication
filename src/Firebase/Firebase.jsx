import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBhHuW2Mwy5c-rb8XLCZNP9E3lfVnk1aWY",
    authDomain: "user-authentication-c8003.firebaseapp.com",
    projectId: "user-authentication-c8003",
    storageBucket: "user-authentication-c8003.appspot.com",
    messagingSenderId: "978820297548",
    appId: "1:978820297548:web:3bc927fa54055f008a15e9",
    measurementId: "G-9H3EM8CFRQ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export async function signup(email, password) {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        console.log("Successfully signup", res);
        return res;
    } catch (error) {
        throw new Error(error);
    }
}

export async function login(email, password) {
    try {
        const res = await signInWithEmailAndPassword(auth, email, password);
        console.log("Successfull Login", res);
        return res;
    } catch (error) {
        console.log("Error in Login", error);
        throw new Error(error);
    }
}

export async function logOut() {
      try {
        await signOut(auth);
      } catch (error) {
        console.log("Error in Sign out", error);
        throw new Error(error);
      }
}

export { app, auth };