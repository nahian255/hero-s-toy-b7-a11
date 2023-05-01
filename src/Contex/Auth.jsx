import React, { createContext } from 'react';
import app from '../Firebase/Firebase.config';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const newContext = createContext()

const auth = getAuth(app)

const Auth = ({ children }) => {

    const register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const authInfo = { register }
    return (
        <div>
            <newContext.Provider value={authInfo}>
                {children}
            </newContext.Provider>
        </div>
    );
};

export default Auth;