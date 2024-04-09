import React from "react";
import { Link, useLocation } from "react-router-dom";
import { scrollToTop } from "../../services/goTop";
import { MoreAndLike } from "../MoreAndLike/MoreAndLike";

type Props = {
  name: string;
  photo: string;
  title: string;
  year?: string;
  description: string;
};

export const HistoryCultureCard: React.FC<Props> = ({
  name,
  photo,
  title,
  year,
  description,
}) => {
  const location = useLocation();
  const currentUrl = location.pathname;

  return (
    <div className="grow basis-50 p-2 border-2 border-transparent hover:border-gray-50 duration-300">
      <img
        className="w-full mb-4 object-center hover:scale-105 direction-300"
        src={process.env.PUBLIC_URL + `/images/${photo}`}
        alt={photo}
      />

      <div className="flex justify-between items-center gap-4">
        <Link
          className="duration-300 text-gray-100 hover:text-primary"
          to={`${currentUrl}/${name}`}
          onClick={scrollToTop}
        >
          <h3 className="text-2xl font-semibold leading-5">{title}</h3>
          {year && <span className="text-base">{year}</span>}
        </Link>

        <div className="flex gap-4">
          <MoreAndLike />
        </div>
      </div>

      <div className="pt-2 text-base">{description}</div>
    </div>
  );
};
