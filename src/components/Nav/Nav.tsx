import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <nav>
      <ul className="flex gap-16">
        <li>
          <NavLink
            to="/history"
            className="hover:text-primary font-medium duration-300"
          >
            Історія
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/culture"
            className="hover:text-primary font-medium duration-300"
          >
            Культура
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/regions"
            className="hover:text-primary font-medium duration-300"
          >
            Регіони України
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
