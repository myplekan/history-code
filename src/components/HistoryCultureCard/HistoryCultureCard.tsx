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
    <Link to={`${currentUrl}/${name}`} onClick={scrollToTop} className="max-w-620 ">
      <img
        className="w-full mb-4 object-center hover:scale-105 direction-300 rounded-3xl"
        src={process.env.PUBLIC_URL + `/images/${photo}`}
        alt={photo}
      />

      <div className="flex justify-between items-center gap-4">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <div className="flex gap-4">
          <MoreAndLike />
        </div>
      </div>

      {year && <span>{year}</span>}
      <div className="pt-2">{description}</div>
    </Link>
  );
};
