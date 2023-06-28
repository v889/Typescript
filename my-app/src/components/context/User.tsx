import { useContext } from "react"
import { UserContext } from "./UserContext"

export const User2=()=>{
    const userContext=useContext(UserContext)
    const handleLogin=()=>{
        if(userContext){
            userContext.setUser({
                name:'ccvc',
                email:"xyz@gmail.com"
            })

        }
    }
    const handleLogout=()=>{
        if(userContext){
            userContext.setUser(null)
        }
    }
    return(
        <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <div> USER name is {userContext?.user?.name} </div>
        <div>User email is {userContext?.user?.email}</div>
    </div>
    )
    
}