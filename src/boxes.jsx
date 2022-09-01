import React from "react"

export default function Boxes(props){
    const styles = {backgroundColor : props.on ? "#59E391":"white"}
    return (
        <div className = "boxes"  style={styles}  onClick={()=>props.handleClick(props.id)} >
        <span className="digits"  >{props.shown}</span>
        </div>
    )
}