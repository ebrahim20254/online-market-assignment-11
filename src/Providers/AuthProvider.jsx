import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(email, password);
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubScribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            return unsubScribe()
        }
    },[])

    const getInfo ={
        user,
        loading,
        createUser,
        signIn,
        logOut
    
    }
    return (
        <AuthContext.Provider  value={getInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;