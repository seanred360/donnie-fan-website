import React from "react";
import { useHistory } from "react-router-dom";
import { GoChevronLeft } from "react-icons/go";

const BackButton = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <button className="--back-button" onClick={goBack}>
      <GoChevronLeft />
      go back
    </button>
  );
};

export default BackButton;
