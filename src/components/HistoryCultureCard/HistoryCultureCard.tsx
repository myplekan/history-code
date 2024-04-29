import React from "react";
import { Link, useLocation } from "react-router-dom";
import { scrollToTop } from "../../services/goTop";
import { MoreAndLike } from "../MoreAndLike/MoreAndLike";
import { Culture } from "../../types/culture";
import { History } from "../../types/history";

type Props = {
  data: History | Culture;
};

export const HistoryCultureCard: React.FC<Props> = ({ data }) => {
  const location = useLocation();
  const currentUrl = location.pathname;

  return (
    <div className="max-w-[648px] grow basis-50 p-2 border-2 border-transparent hover:border-gray-50 duration-300">
      <img
        className="w-full mb-4 object-center"
        src={process.env.PUBLIC_URL + `/images/${data.photo}`}
        alt={data.photo}
      />

      <div className="flex justify-between items-center gap-4">
        <Link
          className="duration-300 text-gray-100 hover:text-primary"
          to={`${currentUrl}/${data.name}`}
          onClick={scrollToTop}
        >
          <h3 className="text-2xl font-semibold leading-5">{data.title}</h3>
          {('year' in data) && <span className="text-base">{data.year}</span>}
        </Link>

        <div className="flex gap-4">
          <MoreAndLike data={data} />
        </div>
      </div>

      <div className="pt-2 text-base">{data.description}</div>
    </div>
  );
};
