import React from "react";
import "./FuncSmileStyle.css"

function FuncSmileItem({smile, votes, onVote}){
    return(
        <div onClick={onVote} className="smile-item">
            <h3>{smile}</h3>
            <br/>
            <button>{votes}</button>
        </div>
    )
}
export default FuncSmileItem