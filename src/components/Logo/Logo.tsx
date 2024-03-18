import { Link } from "react-router-dom";

export const Logo = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Link to="/">
      <img
        src={process.env.PUBLIC_URL + "/images/logo.svg"}
        alt="Logo"
        onClick={scrollToTop}
      />
    </Link>
  );
};
