import { NavLink } from "react-router-dom";
import { scrollToTop } from "../../services/goTop";
import { useLocation } from "react-router-dom";
import classNames from "classnames";

export const Nav = () => {
  const { pathname } = useLocation();

  console.log(pathname);
  return (
    <nav>
      <ul className="flex gap-16">
        <li>
          <NavLink
            to="/history"
            className={classNames(
              "hover:text-primary font-medium duration-300",
              {
                "text-primary": pathname === "/history",
              }
            )}
            onClick={scrollToTop}
          >
            Історія
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/culture"
            className={classNames(
              "hover:text-primary font-medium duration-300",
              {
                "text-primary": pathname === "/culture",
              }
            )}
            onClick={scrollToTop}
          >
            Культура
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/regions"
            className={classNames(
              "hover:text-primary font-medium duration-300",
              {
                "text-primary": pathname === "/regions",
              }
            )}
            onClick={scrollToTop}
          >
            Регіони України
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
