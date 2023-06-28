import { createContext } from "react"
import { theme } from "./theme"
type Props={
    children:React.ReactNode
}

export const ThemeContext=createContext(theme)
export const ThemeContextProvider=({children,}:Props)=>{
    return<ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}