import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "firebase/auth";



export const toyContex = createContext()

const auth = getAuth(app)
const ToyProvider = ({ children }) => {


    const [loading, setLoadin] = useState(true)
    const [user, setUser] = useState({});


    // creater user function
    const createUser = (email, password) => {
        setLoadin(true)
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Login part.....
    const loginUser = (email, password) => {
        setLoadin(true)
        return signInWithEmailAndPassword(auth, email, password);
    };

    // MANAGE user part below.........
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (loggedInUser) => {
            setUser(loggedInUser);
            setLoadin(false);
        });
        return () => {
            unSubscribe();
        };
    }, []);



    const authInfo = { createUser, loading, loginUser, user }
    return (
        <div>
            <toyContex.Provider value={authInfo}>
                {children}
            </toyContex.Provider>
        </div>
    );
};

export default ToyProvider;