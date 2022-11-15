import React from "react"
import {useState} from "react"
import { BiDice1,BiDice2,BiDice3,BiDice4,BiDice5,BiDice6 } from "react-icons/bi";

export default function Boxes(props){
const [spin,setSpin]=useState(false)

function handleSpinClick(){
    setSpin(prev=>!prev)
}
let display ;

if(props.shown === 1){
    display = <BiDice1  size="22px" className={`boxes__dice ${spin && "rotate-center"}`} />
}else if(props.shown === 2){
    display = <BiDice2 size="22px" className={`boxes__dice ${spin && "rotate-center"}`} />
}else if(props.shown === 3){
    display = <BiDice3 size="22px" className={`boxes__dice ${spin && "rotate-center"}`} />
}else if(props.shown === 4){
    display = <BiDice4 size="22px" className={`boxes__dice ${spin && "rotate-center"}`} />
}else if(props.shown === 5){
    display = <BiDice5 size="22px" className={`boxes__dice ${spin && "rotate-center"}`} />
}else if(props.shown === 6){
    display = <BiDice6 size="22px" className={`boxes__dice ${spin && "rotate-center"}`} />
}

    const styles = {backgroundColor : props.on ? "#59E391":"white"}
    return (
        <div  className = "boxes"  style={styles}  onClick={()=>props.handleClick(props.id)} onMouseOver={handleSpinClick} >
        <span className="dice__display"  >{display}</span>
        </div>
    )
}