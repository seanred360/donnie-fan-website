import React from "react";
import Main from "./components/Main";
import NavBar from "./components/common/navbar/NavBar";
import Footer from "./components/common/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="page-wrapper">
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
