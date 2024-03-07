import { createContext, useContext, useState } from "react";

const AuthContext = createContext()

export function AuthContextProvider({children}){
    const [auth, setAuth] = useState(null)
    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    return useContext(AuthContext)
}

export default AuthContext