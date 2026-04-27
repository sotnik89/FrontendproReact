import React, {Component} from "react";

class TaskItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h3>{this.props.task.text}</h3>

                <br />

                <span>
                    Status: {this.props.task.completed ? "Done" : "In progress"}
                </span>

                <button onClick={() => {}}> Change status </button>
                <button onClick={() => {}}> Delete </button>
            </div>
        )
    }
}

export default TaskItem;