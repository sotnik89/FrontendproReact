import React  from "react";
import Message from "./componens/Message/Message.jsx";
import Wrapper from "./componens/Wrapper/Wrapper.jsx";
import Counter from "./componens/Counter/Counter.jsx";
import TaskList from "./componens/TaskList/TaskList.jsx";

class App extends React.Component {
    render() {
        return (
            <div>
                <TaskList />
                <Counter start={5} />
                <Counter start={2} />
                <Counter start={1} />
                <Message />
                <Wrapper />
            </div>
        )
    }
}

export default App
