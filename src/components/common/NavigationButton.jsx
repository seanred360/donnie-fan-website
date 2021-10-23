import React from "react";
import { useHistory } from "react-router-dom";

const Navigationbutton = ({ label, onOpen }) => {
  let history = useHistory();

  function handleClick() {
    history.push(`/${label}`.toLocaleLowerCase());
    onOpen()
  }
  return (
    <button className="navigation-button" onClick={handleClick}>
      {label}
    </button>
  );
};

export default Navigationbutton;