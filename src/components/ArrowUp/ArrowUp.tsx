import { useEffect, useState } from "react";
import { scrollToTop } from "../../services/goTop";
import classNames from "classnames";

export const ArrowUp = () => {
  const [showButton, setShowButton] = useState(false);

  const windowWidth = window.innerWidth;
  const distance = windowWidth > 1440 ? (windowWidth - 1440) / 2 : 10;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <img
      className={classNames(`w-10 rotate-90 fixed right-[${distance}px] bottom-36 cursor-pointer ${
          showButton ? "visible" : "hidden"
        } animate-jump animate-infinite animate-duration-[2000ms] animate-ease-linear`)}
      onClick={scrollToTop}
      src={process.env.PUBLIC_URL + `/images/arrow-up.svg`}
      alt="Arrow Up"
    />
  );
};
