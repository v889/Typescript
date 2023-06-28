import { useState,useRef,useEffect } from "react";
export const MutableRef=()=>{
    const [timer,setTimer]=useState(0)

    const interValRef=useRef<number|null>(null)
    const stopTime=()=>{
        if(interValRef.current) window.clearInterval(interValRef.current)
    }
    useEffect(()=>{
        interValRef.current=window.setInterval(()=>{
            setTimer((timer)=>timer+1)
        },1000)
        return ()=>{
            stopTime()
        }
    },[])
    return(
        <div>
            Hooktimer -{timer}
            <button onClick={()=>stopTime()}>Stop Timer</button>
        </div>
    )
}