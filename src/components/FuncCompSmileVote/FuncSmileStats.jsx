import React from "react";
import "./FuncSmileStyle.css"

function FuncSmileStats({ smiles }){
    const maxVotes = Math.max(...smiles.map((smile) => smile.votes));
    const winner = smiles.find((smile) => smile.votes === maxVotes);
    return(
        <div className="results-container">
            <h2>Результати голосування: </h2>
            <h3>Переможець:</h3>
            <div className="winner-display">{winner.smile}</div>
            <p className="votes-count">Кількість голосів: {winner.votes}</p>
        </div>
    )
}

export default FuncSmileStats