import { Routes, Route } from 'react-router-dom';

import React from "react";


import FormRegular from "./pages/FormRegular/FormRegular.jsx";

class App extends React.Component{
    render() {
        return (
            <div>
                <Routes>
                    <Route path={"/form-regular"} element={<FormRegular />} />
                </Routes>
            </div>
        )
    }
}

export default App
