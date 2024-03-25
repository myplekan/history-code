import classNames from "classnames";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export const AnimatePrint = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.0,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [inView]);

  return (
    <div className="flex mb-10 justify-between -translate-x-[10rem]">
      <img
        ref={ref}
        className={`${
          isVisible
            ? "animate-wiggle-more animate-delay-[0000ms] animate-once animate-ease-in-out"
            : ""
        }`}
        src={process.env.PUBLIC_URL + "/images/print2.svg"}
        alt="print"
      />
      <img
        ref={ref}
        className={`${
          isVisible
            ? "animate-wiggle-more animate-delay-[0250ms] animate-once animate-ease-in-out"
            : ""
        }`}
        src={process.env.PUBLIC_URL + "/images/print1.svg"}
        alt="print"
      />
      <img
        ref={ref}
        className={`${
          isVisible
            ? "animate-wiggle-more animate-delay-[0500ms] animate-once animate-ease-in-out"
            : ""
        }`}
        src={process.env.PUBLIC_URL + "/images/print2.svg"}
        alt="print"
      />
      <img
        ref={ref}
        className={`${
          isVisible
            ? "animate-wiggle-more animate-delay-[0750ms] animate-once animate-ease-in-out"
            : ""
        }`}
        src={process.env.PUBLIC_URL + "/images/print1.svg"}
        alt="print"
      />
      <img
        ref={ref}
        className={`${
          isVisible
            ? "animate-wiggle-more animate-delay-[1000ms] animate-once animate-ease-in-out"
            : ""
        }`}
        src={process.env.PUBLIC_URL + "/images/print2.svg"}
        alt="print"
      />
      <img
        ref={ref}
        className={`${
          isVisible
            ? "animate-wiggle-more animate-delay-[1250ms] animate-once animate-ease-in-out"
            : ""
        }`}
        src={process.env.PUBLIC_URL + "/images/print1.svg"}
        alt="print"
      />
      <img
        ref={ref}
        className={`${
          isVisible
            ? "animate-wiggle-more animate-delay-[1500ms] animate-once animate-ease-in-out"
            : ""
        }`}
        src={process.env.PUBLIC_URL + "/images/print2.svg"}
        alt="print"
      />
    </div>
  );
};
