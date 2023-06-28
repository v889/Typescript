import { validateHeaderValue } from "http"
import { createContext, useState } from "react"

export type AuthUser={
    name:string
    email:string
}
type UserContextType={
    user:AuthUser|null
    setUser:React.Dispatch<React.SetStateAction<AuthUser|null>>

}
export const UserContext=createContext<UserContextType |null>(null)
type UserContextProps={
    children:React.ReactNode
}
export const UserContextProvider=({children}: UserContextProps)=>{
    const [user,setUser]=useState<AuthUser|null>(null)
    return <UserContext.Provider value={{user,setUser}}>{children}</UserContext.Provider>

}