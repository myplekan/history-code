import { Link } from "react-router-dom";
import { Logo } from "../Logo/Logo";
import { Nav } from "../Nav/Nav";

export const Footer = () => {
  return (
    <footer className="p-10 bg-footer ">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-16">
          <Logo />

          <Nav />
        </div>

        <div className="flex gap-8">
          <Link to="/">
            <img
              src={process.env.PUBLIC_URL + "/images/facebook.svg"}
              alt="Facebook"
              className="w-7"
            />
          </Link>

          <Link to="/">
            <img
              src={process.env.PUBLIC_URL + "/images/instagram.svg"}
              alt="Instagram"
              className="w-7"
            />
          </Link>
        </div>
      </div>

      <div className="flex justify-between">
        <span>
          © This work is licensed under the terms of the GNU General Public
          License 2.0
        </span>
        <span>Created by About Ukraine Team in 2024</span>
      </div>
    </footer>
  );
};
