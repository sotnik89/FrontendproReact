import React from "react";
import "./SmileListStyle.css"

class SmileItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div onClick={this.props.onVote} className="smile-item">
                <h3>{this.props.smile}</h3>
                <br/>
                <button>{this.props.votes}</button>
            </div>
        )
    }
}
export default SmileItem