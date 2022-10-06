import React from "react"

export default function Die({props}) {
    const {value,isHeld,setIsHeld,id}=props
    const styles = {
        backgroundColor: isHeld ? "#59E391" : "white"
    }
    function toggleHeld(){
        setIsHeld(id)
    }
    return (
        <div className="die-face" style={styles} onClick={toggleHeld}>
            <h2 className="die-num">{value}</h2>
        </div>
    )
}