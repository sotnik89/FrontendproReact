import React from "react";

class SmileItem extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <h3>{this.props.smile.smile}</h3>
                <br/>
                <button onClick={() => {}}>{this.props.smile.votes}</button>
            </div>
        )
    }
}
export default SmileItem