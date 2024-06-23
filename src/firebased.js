
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA66aMiYnXeU_gqosq41j27PRQ_-nqGKt0",
  authDomain: "netflix-clone-1bb8a.firebaseapp.com",
  projectId: "netflix-clone-1bb8a",
  storageBucket: "netflix-clone-1bb8a.appspot.com",
  messagingSenderId: "395770020585",
  appId: "1:395770020585:web:5391274546a99a4a456678"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
     try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const user = res.user; 
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
     }catch (error){
         console.log(error);
         alert(error);
     }
}
const login = async ()=>{
     try {
      await signInWithEmailAndPassword(auth, email, password)
     }catch (error){
        console.log(error)
        alert(error);
     }
}
const logout = () => {
    signOut(auth);
}

export {auth, db, login, signup, logout};