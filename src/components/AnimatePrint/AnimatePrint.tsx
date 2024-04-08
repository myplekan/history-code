import classNames from "classnames";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useLocation } from "react-router-dom";

export const AnimatePrint = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.0,
  });

  const { pathname } = useLocation();

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [inView]);

  return (
    <div
      className={classNames("flex justify-between -translate-x-[10rem]", {
        'mb-16': pathname !== '/regions'
      })}
    >
      <img
        ref={ref}
        className={`${
          isVisible ? "animate-jump animate-once animate-duration-[2000ms]" : ""
        }`}
        src={process.env.PUBLIC_URL + "/images/svg/print2.svg"}
        alt="print"
      />
      <img
        ref={ref}
        className={`${
          isVisible
            ? "animate-jump animate-once animate-duration-[2000ms] animate-delay-[250ms]"
            : ""
        }`}
        src={process.env.PUBLIC_URL + "/images/svg/print1.svg"}
        alt="print"
      />
      <img
        ref={ref}
        className={`${
          isVisible
            ? "animate-jump animate-once animate-duration-[2000ms] animate-delay-[500ms]"
            : ""
        }`}
        src={process.env.PUBLIC_URL + "/images/svg/print2.svg"}
        alt="print"
      />
      <img
        ref={ref}
        className={`${
          isVisible
            ? "animate-jump animate-once animate-duration-[2000ms] animate-delay-[750ms]"
            : ""
        }`}
        src={process.env.PUBLIC_URL + "/images/svg/print1.svg"}
        alt="print"
      />
      <img
        ref={ref}
        className={`${
          isVisible
            ? "animate-jump animate-once animate-duration-[2000ms] animate-delay-[1000ms]"
            : ""
        }`}
        src={process.env.PUBLIC_URL + "/images/svg/print2.svg"}
        alt="print"
      />
      <img
        ref={ref}
        className={`${
          isVisible
            ? "animate-jump animate-once animate-duration-[2000ms] animate-delay-[1250ms]"
            : ""
        }`}
        src={process.env.PUBLIC_URL + "/images/svg/print1.svg"}
        alt="print"
      />
      <img
        ref={ref}
        className={`${
          isVisible
            ? "animate-jump animate-once animate-duration-[2000ms] animate-delay-[1550ms]"
            : ""
        }`}
        src={process.env.PUBLIC_URL + "/images/svg/print2.svg"}
        alt="print"
      />
    </div>
  );
};
