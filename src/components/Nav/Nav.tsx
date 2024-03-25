import { NavLink } from "react-router-dom";
import { scrollToTop } from "../../services/goTop";
import { useLocation } from "react-router-dom";
import classNames from "classnames";

export const Nav = () => {
  const { pathname } = useLocation();

  return (
    <nav>
      <ul className="flex gap-16">
        <li>
          <NavLink
            to="/history"
            className={classNames(
              "hover:text-primary font-medium duration-300",
              {
                "text-primary": pathname.includes("/history"),
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
                "text-primary": pathname.includes("/culture"),
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
                "text-primary": pathname.includes("/regions"),
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
