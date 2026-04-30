import React from "react";
import "./FuncSmileStyle.css"

function FuncSmileItem({smile, votes, onVote}){
    return(
        <div  className="smile-item">
            <h3 onClick={onVote}>{smile}</h3>
            <br/>
            <button>{votes}</button>
        </div>
    )
}
export default FuncSmileItem