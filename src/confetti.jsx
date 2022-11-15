import React,{useState,useEffect} from "react"
import ReactConfetti from "react-confetti"

export default function Confetti(){
    
    const[size,setSize] = useState({width: window.innerWidth , height : window.innerHeight})
    
    useEffect(()=>{
        window.addEventListener("resize",()=>{setSize({width: window.innerWidth , height : window.innerHeight})})
        return ()=>{
            window.removeEventListener("resize",()=>{setSize({width: window.innerWidth , height : window.innerHeight})})
        }
    },[size])
    return (
        <>
       <ReactConfetti 
        width="290px"
        height="400px"
        tweenDuration={1000}
        />
        </>
    )
}