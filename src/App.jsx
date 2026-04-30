import React from "react";
import SmileList from "./components/SmileVote/SmileList.jsx";
import FuncSmileList from "./components/FuncCompSmileVote/FuncSmileList.jsx"

class App extends React.Component {
    render() {
        return (
            <div>
                <SmileList/>
                <FuncSmileList />
            </div>
        )
    }
}
export default App
