import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to='/'>
      <img src={process.env.PUBLIC_URL + "/images/logo.svg"} alt="Logo" />
    </Link>
  );
};
