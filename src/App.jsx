import React from "react";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import MyApp from "./pages/MyApp/MyApp.jsx";

class App extends React.Component{
  render() {
    return(
        <div>
          <Header></Header>
          <MyApp></MyApp>
          <Footer></Footer>

        </div>
    )
  }
}

export default App
