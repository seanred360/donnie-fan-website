import { useHistory } from "react-router";

const LogoLink = () => {
  let history = useHistory();

  function handleClick() {
    history.push("/home");
  }

  return (
    <div className="__logo-link flex flex-ai-c flex-jc-c" onClick={handleClick}>
      DF
    </div>
  );
};

export default LogoLink;
