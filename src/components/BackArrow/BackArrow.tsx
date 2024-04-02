import React from "react";
import { Link } from "react-router-dom";

type Props = {
  path: string;
};

export const BackArrow: React.FC<Props> = ({ path }) => {
  return (
    <Link
      className="absolute left-[40px] top-[84px] w-14 h-14 inline-flex items-center justify-center rounded-full bg-white hover:bg-primary duration-300"
      to={path}
    >
      <svg
        className="fill-[#495057] rounded-full hover:fill-white"
        width="56"
        height="56"
        viewBox="-22 0 56 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6.99859 12.3463L2.13543 7.40504C2.02877 7.29723 1.96894 7.1517 1.96894 7.00004C1.96894 6.84838 2.02877 6.70285 2.13543 6.59504L6.99754 1.65383C7.10414 1.54535 7.16387 1.39934 7.16387 1.24725C7.16387 1.09515 7.10414 0.949145 6.99754 0.840665C6.94546 0.787246 6.88322 0.744793 6.81447 0.715806C6.74573 0.68682 6.67188 0.671886 6.59728 0.671886C6.52268 0.671886 6.44883 0.68682 6.38009 0.715806C6.31135 0.744793 6.24911 0.787246 6.19703 0.840665L1.33492 5.78082C1.01543 6.10622 0.836426 6.54402 0.836426 7.00004C0.836426 7.45606 1.01543 7.89386 1.33492 8.21926L6.19703 13.1594C6.24912 13.213 6.31143 13.2556 6.38027 13.2847C6.44911 13.3138 6.52308 13.3287 6.59781 13.3287C6.67254 13.3287 6.74651 13.3138 6.81535 13.2847C6.88419 13.2556 6.9465 13.213 6.99859 13.1594C7.10519 13.0509 7.16493 12.9049 7.16493 12.7528C7.16493 12.6007 7.10519 12.4547 6.99859 12.3463Z" />
      </svg>
      {/* <img
        className="w-2.5"
        src={process.env.PUBLIC_URL + "/images/svg/arrow-left.svg"}
        alt="Back"
      /> */}
    </Link>
  );
};
