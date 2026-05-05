import { Routes, Route } from 'react-router-dom'

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./pages/Home/Home.jsx";
import Contacts from "./pages/Contacts/Contacts.jsx";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";


export default function App(){
    return(
        <div>
            <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/contacts' element={<Contacts />} />
                    <Route path='/about us' element={<AboutUs />} />
                </Routes>
            <Footer />
        </div>
    )
}

