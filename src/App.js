import React from "react";
import Routes from "./components/Routes";
import NavBar from "./components/common/navbar/NavBar";
import Footer from "./components/common/Footer";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <div className="page-wrapper">
        <Routes />
      </div>
      <Footer />
    </div>
  );
};

export default App;
