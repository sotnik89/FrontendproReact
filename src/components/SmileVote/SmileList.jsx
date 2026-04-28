import React from "react";
import SmileItem from "./SmileItem.jsx";
import SmileStats from "./SmileStats.jsx";

class SmileList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            title: "Голосування за найкращий смайлик",
            smiles: [
                { id: 1, smile: "😄", votes: 0 },
                { id: 2, smile: "😊", votes: 0 },
                { id: 3, smile: "😎", votes: 0 },
                { id: 4, smile: "🤩", votes: 0 },
                { id: 5, smile: "😍", votes: 0 },
            ],
            showResult: false,
        }
    }
    handleVote = (id) => {
        this.setState({
            smiles: this.state.smiles.map(smile =>
                smile.id === id ? ({ ...smile, votes: smile.votes + 1 }) : smile
            )
        });
    }

    render() {
        return(
            <div>
                <h1 >{this.state.title}</h1>
                {
                    this.state.smiles.map(smile => <SmileItem key={smile.id} smile={smile}
                                                              onVote={() => this.handleVote(smile.id)} />)
                }
                <button onClick={() => {}}>Show Results</button>
                <SmileStats smiles={this.props.smiles}/>

            </div>
        )
    }
}
export default SmileList