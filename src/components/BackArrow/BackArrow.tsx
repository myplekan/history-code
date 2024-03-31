import React from "react";
import { Link } from "react-router-dom";

type Props = {
  path: string
}

export const BackArrow: React.FC<Props> = ({ path }) => {
  return (
    <Link
      className="absolute left-[40px] top-[84px] w-14 h-14 inline-flex items-center justify-center rounded-full bg-white"
      to={path}
    >
      <img
        className="w-2.5"
        src={process.env.PUBLIC_URL + "/images/svg/arrow-left.svg"}
        alt="Back"
      />
    </Link>
  );
};
