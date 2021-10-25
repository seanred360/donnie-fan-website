import React from "react";
import Main from "./components/Main";
import Menu from "./components/Menu";
import Footer from "./components//common/Footer";

function App() {
  return (
    <div className="App">
      <Menu />
      <div className="page-wrapper">
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
