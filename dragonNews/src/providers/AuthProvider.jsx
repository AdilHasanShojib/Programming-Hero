import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth';
import app from '../firebase/firebase.config'


export const AuthContext =  createContext(null);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading] = useState(true);
    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logout = () => {
        setLoading(true);
       return signOut(auth)
    }
     
    const updateUserProfile = (updatedData)=>{
       return updateProfile(auth.user,updatedData)
    }


   
    useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth, currentUser =>{
        console.log('user in the auth state changed', currentUser);
        setUser(currentUser);
        setLoading(false);
    })

         return()=>{
            unsubscribe();
         }

    },[])


    const auth = getAuth(app);
    const authInfo ={
        user,
        loading,
        createUser,
        logout,
        signIn,
        updateUserProfile
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;