import React, { createContext, useEffect, useState } from 'react';
import {GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../Firebase/Firebase.config';


 export const AuthContext = createContext(null)
const auth = getAuth(app)

const provider = new GoogleAuthProvider();

const GithubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [loader, setLoader] = useState(true);
    const [user, setUser] = useState(null);

    const googleSignUp = () => {
        setLoader(false)
        return signInWithPopup(auth, provider)
    }
    // 
    const githubSignUp = () =>{
        setLoader(false)
        return signInWithPopup(auth, GithubProvider)
    }
    // 
    const signOutSystem = () => {
        setLoader(false)
        return signOut(auth)
    }
    // sing up with gmail


    const createUser = (email, password) => {
        setLoader(false)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // create profile

    const updateUser = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }


// sign up with password
    const signIn = (email, password) => {
        setLoader(false)
        return signInWithEmailAndPassword(auth, email, password);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoader(false)
        })
        return () => {
            unsubscribe();
        }
    }, [user])

    const authInfo = {
        user,
        signIn,
        createUser,
        loader,
        setLoader,
        googleSignUp,
        githubSignUp,
        signOutSystem,
        updateUser,
        
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
          {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;