import React from "react";
import SmileItem from "./SmileItem.jsx";
import SmileStats from "./SmileStats.jsx";
import "./SmileListStyle.css"

class SmileList extends React.Component {
    constructor(props) {
        super(props);
        const savedSmiles = localStorage.getItem("smiles_votes");
        this.state = {
            title: "Голосування за найкращий смайлик",
            smiles: savedSmiles ? JSON.parse(savedSmiles) :
                [
                    {id: 1, smile: "😄", votes: 0},
                    {id: 2, smile: "😊", votes: 0},
                    {id: 3, smile: "😎", votes: 0},
                    {id: 4, smile: "🤩", votes: 0},
                    {id: 5, smile: "😍", votes: 0},
                ],
            showResult: false,
        }
    }
    handleVote = (id) => {
        this.setState({
                smiles: this.state.smiles.map(smile =>
                    smile.id === id ? ({...smile, votes: smile.votes + 1}) : smile),
            },
            () => {
                localStorage.setItem("smiles_votes", JSON.stringify(this.state.smiles));
            }
        );
    };
    handleShowResults = () => {
        this.setState({showResult: true});
    };
    handleClearResults = () => {
        const resetSmiles = this.state.smiles.map(smile => ({...smile, votes: 0}));
        this.setState({
            smiles: resetSmiles,
            showResult: false
        }, () => {
            localStorage.removeItem("smiles_votes");
        });
    };
    render() {
        return (
            <div className="container">
                <h1>{this.state.title}</h1>
                <div className="smile-list">
                    {this.state.smiles.map(smile =>
                        <SmileItem
                            key={smile.id}
                            smile={smile.smile}
                            votes={smile.votes}
                            onVote={() => this.handleVote(smile.id)}
                        />
                    )}
                </div>
                <button className="show-results-btn" onClick={this.handleShowResults}>
                    Show Results
                </button>
                {this.state.showResult && <SmileStats smiles={this.state.smiles}/>}
                {this.state.showResult && (
                    <button className="clear-results-btn" onClick={this.handleClearResults}>
                        Delete Results
                    </button>)}
            </div>
        )
    }
}
export default SmileList