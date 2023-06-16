import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import {app} from '../Firebase/FirebaseConfig.js'

export const AuthContext = createContext(null);

export const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const auth = getAuth(app)

    // googleLogin using google popup 
    const googleProvier = new GoogleAuthProvider();
    const singUpWithGmail = () => {
        return signInWithPopup(auth, googleProvier);
    }

    // passwordlogin useing email and password filed 
    const singUpUsingEmailAndPassFiled = (email, password) => {
        return signInWithEmailAndPassword (auth, email, password)
    } 

    // wathhing user 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (cureentUser) => {
            setUser(cureentUser);
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    }, [])


    const contextValue = {
        user,
        setUser,
        loading,
        singUpWithGmail,
        singUpUsingEmailAndPassFiled,
    }

    return ( 
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;