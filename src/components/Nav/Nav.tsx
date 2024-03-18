import { NavLink } from "react-router-dom";

export const Nav = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav>
      <ul className="flex gap-16">
        <li>
          <NavLink
            to="/history"
            className="hover:text-primary font-medium duration-300"
            onClick={scrollToTop}
          >
            Історія
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/culture"
            className="hover:text-primary font-medium duration-300"
            onClick={scrollToTop}
          >
            Культура
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/regions"
            className="hover:text-primary font-medium duration-300"
            onClick={scrollToTop}
          >
            Регіони України
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
