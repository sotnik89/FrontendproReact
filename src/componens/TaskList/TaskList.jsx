import React from 'react';

import TaskItem from './TaskItem.jsx';
import TaskStats from './TaskStarts.jsx';

class TaskList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "Students task list",
            tasks: [
                {
                    id: 1,
                    text: "First task",
                    completed: false,
                },
                {
                    id: 2,
                    text: "Second task",
                    completed: true,
                },
                {
                    id: 3,
                    text: "Third task",
                    completed: false,
                },
                {
                    id: 4,
                    text: "Fourth task",
                    completed: true,
                }
            ],

            showCompleted: false,
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>

                <TaskStats tasks={this.state.tasks} />

                <button onClick={() => {}}>
                    Show
                </button>

                { this.state.tasks.map(task => <TaskItem key={task.id} task={task} />) }
            </div>
        )
    }
}

export default TaskList;