import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile, signOut } from "firebase/auth";
import { app } from '../Firebase/FirebaseConfig.js'

export const AuthContext = createContext(null);

export const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const auth = getAuth(app)

    // googleLogin using google popup 
    const googleProvier = new GoogleAuthProvider();
    const singUpWithGmail = () => {
        return signInWithPopup(auth, googleProvier);
    }

    // password registered useing email and password filed 
    const singUpUsingEmailAndPassFiled = (data) => {
        const { email, password } = data;
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // password Login in using email and password 
    const loginInWithEmailAndPassWord = (data) => {
        const {email, password} = data;
        return signInWithEmailAndPassword(auth, email, password)
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


    // singout
    const singOutUser = () => {
        signOut(auth).then(() => {
        }).catch(err => {
            alert(err)
        })
    }

    const contextValue = {
        auth,
        user,
        setUser,
        loading,
        updateProfile,
        singUpWithGmail,
        singUpUsingEmailAndPassFiled,
        loginInWithEmailAndPassWord,
        singOutUser,
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;