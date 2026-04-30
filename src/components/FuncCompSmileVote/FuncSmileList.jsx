import React from "react";
import {useState} from "react";
import FuncSmileItem from "./FuncSmileItem.jsx";
import FuncSmileStats from "./FuncSmileStats.jsx";
import "./FuncSmileStyle.css"

function FuncSmileList(){
    const [title] = useState("Голосування за найкращий смайлик");
    const [showResult, setShowResult] = useState(false);
    const [smiles, setSmiles] = useState(() => {
        const savedSmiles = localStorage.getItem("smiles_votes");
        return savedSmiles ? JSON.parse(savedSmiles) : [
            { id: 1, smile: "😄", votes: 0 },
            { id: 2, smile: "😊", votes: 0 },
            { id: 3, smile: "😎", votes: 0 },
            { id: 4, smile: "🤩", votes: 0 },
            { id: 5, smile: "😍", votes: 0 },
        ];
    });
    const handleVote = (id) => {
        setSmiles(smiles =>
            smiles.map(smile =>
                smile.id === id ? { ...smile, votes: smile.votes + 1 } : smile
            )
        );
    };
    const handleShowResults = () => {
        setShowResult(true);
    };
    const handleClearResults = () => {
        const resetSmiles = smiles.map(smile => ({ ...smile, votes: 0 }));
        setSmiles(resetSmiles);
        setShowResult(false);
        localStorage.removeItem("smiles_votes");
    };
    return(
        <div className="container">
            <h1>{title}</h1>
            <div className="smile-list">
                {smiles.map(smile =>
                    <FuncSmileItem
                        key={smile.id}
                        smile={smile.smile}
                        votes={smile.votes}
                        onVote={() => handleVote(smile.id)}
                    />
                )}
            </div>
            <button className="show-results-btn" onClick={handleShowResults}>
                Show Results
            </button>
            {showResult &&
                <FuncSmileStats smiles={smiles}/>}
            {showResult && (
                <button className="clear-results-btn" onClick={handleClearResults}>
                    Delete Results
                </button>)}
        </div>
    )
}

export default FuncSmileList