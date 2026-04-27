import React, {Component} from "react";

class TaskStats extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { tasks } = this.props;

        const totalTasks = tasks.length;
        const completedTasks = tasks.filter(task => task.completed).length;
        const activeTasks = totalTasks - completedTasks;

        return (
            <div>
                <p>Count of all tasks: {totalTasks}</p>
                <p>Count of done tasks: {completedTasks}</p>
                <p>Count of in progress tasks: {activeTasks}</p>
            </div>
        )
    }
}

export default TaskStats;