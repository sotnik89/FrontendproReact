import Message from "./components/Message/Message.jsx";
import React from "react";
import Wrapper from "./components/Wrapper/Wrapper.jsx";

class App extends React.Component{
    render() {
        return (
            <div>

                <Message/>
                <Message/>
                <Wrapper />

            </div>
        )
    }
}

export default App
