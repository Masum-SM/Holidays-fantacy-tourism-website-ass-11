import React from 'react';
import { createContext } from 'react';
import useFirebse from '../hooks/useFirebase';


export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const allContexts = useFirebse()
    return (
        <AuthContext.Provider value={allContexts} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;