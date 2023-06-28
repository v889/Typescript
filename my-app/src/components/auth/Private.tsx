import { ProfileProps } from "./Profile"
import { Login } from "./login"
type PrivateProps={
    isLoggedIn:boolean
    component:React.ComponentType<ProfileProps>
}

export const Private =({isLoggedIn,component:Component}:PrivateProps)=>{
    if(isLoggedIn){
        return <Component name="xyz"/>
    }
    else{
        <Login/>
    }
}