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
    <div className="grow basis-50">
      <img
        className="w-full mb-4 object-center hover:scale-105 direction-300"
        src={process.env.PUBLIC_URL + `/images/${photo}`}
        alt={photo}
      />

      <div className="flex justify-between items-center gap-4">
        <Link
          className="hover:text-primary duration-300"
          to={`${currentUrl}/${name}`}
          onClick={scrollToTop}
        >
          <h2 className="text-2xl font-semibold leading-5">{title}</h2>
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
