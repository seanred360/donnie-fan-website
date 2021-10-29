import { useHistory } from "react-router-dom";

const Navigationbutton = ({ label, icon, onOpen }) => {
  let history = useHistory();

  function handleClick() {
    history.push(`/${label}`.toLocaleLowerCase());
    if (onOpen) {
      onOpen(false);
    }
  }
  return (
    <button className="navigation-button" onClick={handleClick}>
      {label}
      {icon}
    </button>
  );
};

export default Navigationbutton;
