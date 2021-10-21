import React from "react";
import { useHistory } from "react-router-dom";
import { GoChevronLeft } from "react-icons/go";

const BackButton = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <button className="all-buttons --back-button" onClick={goBack}>
      <GoChevronLeft />
      Go Back
    </button>
  );
};

export default BackButton;
