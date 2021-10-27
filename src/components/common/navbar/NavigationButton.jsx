import { useHistory } from "react-router-dom";

const Navigationbutton = ({ label, onOpen }) => {
  let history = useHistory();

  function handleClick() {
    history.push(`/${label}`.toLocaleLowerCase());
    onOpen(false);
  }
  return (
    <button className="navigation-button" onClick={handleClick}>
      {label}
    </button>
  );
};

export default Navigationbutton;
