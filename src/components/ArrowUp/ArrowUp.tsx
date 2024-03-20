import { useEffect, useState } from "react";
import { scrollToTop } from "../../services/goTop";

export const ArrowUp = () => {
  const [showButton, setShowButton] = useState(false);

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
      className={`w-10 rotate-90 fixed right-2 bottom-36 cursor-pointer ${
        showButton ? "visible" : "hidden"
      } animate-jump animate-infinite animate-duration-[2000ms] animate-ease-linear`}
      onClick={scrollToTop}
      src={process.env.PUBLIC_URL + `/images/arrow-up.svg`}
      alt="Arrow Up"
    />
  );
};
