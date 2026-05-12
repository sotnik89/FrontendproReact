import { Routes, Route } from 'react-router-dom';

import React from "react";


import FormRegular from "./pages/FormRegular/FormRegular.jsx";
import FormFormik from "./pages/FormFormik/FormFormik.jsx";

class App extends React.Component{
    render() {
        return (
            <div>
                <Routes>
                    <Route path={"/form-regular"} element={<FormRegular />} />
                    <Route path={"/form-formik"} element={<FormFormik />} />
                </Routes>
            </div>
        )
    }
}

export default App
