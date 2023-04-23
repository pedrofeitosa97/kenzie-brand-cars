import { createContext, useEffect, useState } from "react";

interface IAuthContextProps{
    userAuthenticated: boolean,
    currentUser: IUser | undefined
}
interface IAuthContextProviderProps{
    children: React.ReactNode
}
export interface IUser {
    id:          string;
    name:        string;
    email:       string;
    cpf:         string;
    phone:       string;
    birthDate:   string;
    description: string;
    type:        string;
    admin:       boolean;
}

export const AuthContext = createContext({} as IAuthContextProps)


export const AuthContextProvider = ({children}: IAuthContextProviderProps) =>{
    const [userAuthenticated, setUserAuthenticated] = useState<boolean>(false)
    const [currentUser, setCurrentUser] = useState<IUser>()
    const verifyAuthUser = () =>{
        const currentToken = localStorage.getItem('kenzie-brand-cars:token')
        const currentUser = localStorage.getItem('kenzie-brand-cars:current-user')
        if(currentToken && currentUser){
            setUserAuthenticated(true)
            setCurrentUser(JSON.parse(currentUser))
        }
    }
    useEffect(()=>{
        verifyAuthUser()
    },[])
    return(
        <AuthContext.Provider value={{userAuthenticated, currentUser}}>
            {children}
        </AuthContext.Provider>
    )
}