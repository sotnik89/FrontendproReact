import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: props.start,
            step: 1,
            title: "Counter component"
        }
    }

    handleIncrement = () => {
        this.setState((prevState) => {
            return {
                counter: prevState.counter + this.state.step,
            }
        });
    }

    handleChangeStep = () => {
        this.setState({
            step: this.state.step + 2,
        });
    }

    render() {
        return (
            <div>
                <h2>{this.state.title}</h2>

                <h1>Counter: {this.state.counter}</h1>

                <button onClick={this.handleIncrement}>Increase</button>

                <button onClick={this.handleChangeStep}>Change step by 2</button>
            </div>
        )
    }
}

export default Counter;