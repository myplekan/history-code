import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";

type Props = {
  name: string;
  staticClass: string;
  animateClass: string;
};

export const AnimateImg: React.FC<Props> = ({
  name,
  staticClass,
  animateClass,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [inView]);

  return (
    <img
      ref={ref}
      src={process.env.PUBLIC_URL + `/images/${name}`}
      alt="Gallery"
      className={classNames(staticClass, {
        [animateClass]: isVisible,
      })}
    />
  );
};
