import React from "react";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../services/goTop";

type Props = {
  photo: string;
  title: string;
  year?: string;
  description: string;
};

export const HistoryCultureCard: React.FC<Props> = ({
  photo,
  title,
  year,
  description,
}) => {
  return (
    <Link to="/" onClick={scrollToTop} className="max-w-620">
      <img
        className="w-full mb-4 object-center"
        src={process.env.PUBLIC_URL + `/images/${photo}`}
        alt={photo}
      />

      <div className="flex justify-between items-center gap-4">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <div className="flex gap-4">
          <Link
            to="/"
            className="w-14 h-14 bg-gray-10 rounded-full flex justify-center items-center"
          >
            <img src={process.env.PUBLIC_URL + "/images/more.svg"} alt="More" />
          </Link>
          <Link
            to="/"
            className="w-14 h-14 bg-gray-10 rounded-full flex justify-center items-center"
          >
            <img src={process.env.PUBLIC_URL + "/images/like.svg"} alt="Like" />
          </Link>
        </div>
      </div>

      {year && <span>{year}</span>}
      <div className="pt-2">{description}</div>
    </Link>
  );
};
