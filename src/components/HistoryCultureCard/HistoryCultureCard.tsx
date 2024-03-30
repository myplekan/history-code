import React, { useState } from "react";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../services/goTop";

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
  return (
    <Link to={`/culture/${name}`} onClick={scrollToTop} className="max-w-620 ">
      <img
        className="w-full mb-4 object-center hover:scale-105 direction-300 rounded-3xl"
        src={process.env.PUBLIC_URL + `/images/${photo}`}
        alt={photo}
      />

      <div className="flex justify-between items-center gap-4">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <div className="flex gap-4">
          <Link
            to="/"
            className="w-12 h-12 bg-gray-10 rounded-full flex justify-center items-center hover:bg-primary duration-300"
          >
            <svg
              className="fill-primary rounded-full hover:fill-white border-2 border-primary"
              width="48"
              height="48"
              viewBox="-10 -11 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.4677 0.1875C16.8625 0.187296 16.2647 0.32086 15.7163 0.578771C15.168 0.836682 14.6825 1.21266 14.2941 1.68017C13.9057 2.14769 13.6239 2.69536 13.4686 3.28454C13.3132 3.87372 13.2881 4.49007 13.395 5.0901L7.37504 9.33628C7.34494 9.35726 7.31604 9.37995 7.2885 9.40423C6.67777 8.92331 5.94517 8.62495 5.17424 8.54317C4.40332 8.46139 3.62509 8.59948 2.92831 8.9417C2.23153 9.28393 1.64424 9.8165 1.2334 10.4787C0.822572 11.1409 0.604736 11.9061 0.604736 12.687C0.604736 13.4678 0.822572 14.233 1.2334 14.8952C1.64424 15.5574 2.23153 16.09 2.92831 16.4322C3.62509 16.7744 4.40332 16.9125 5.17424 16.8307C5.94517 16.749 6.67777 16.4506 7.2885 15.9697C7.31601 15.9944 7.3449 16.0175 7.37504 16.0389L13.395 20.2851C13.2163 21.2886 13.409 22.3233 13.9367 23.1933C14.4645 24.0633 15.2905 24.7082 16.2586 25.0059C17.2266 25.3036 18.2694 25.2335 19.1895 24.8087C20.1096 24.384 20.8432 23.6341 21.2514 22.7012C21.6595 21.7682 21.714 20.7169 21.4043 19.7462C21.0947 18.7755 20.4425 17.9529 19.5713 17.434C18.7 16.9151 17.6701 16.7361 16.6766 16.9307C15.6831 17.1254 14.7949 17.6802 14.1802 18.4902L8.47976 14.4709C8.7343 13.9299 8.87685 13.3261 8.87685 12.6876C8.87685 12.0491 8.7343 11.444 8.47976 10.9042L14.1815 6.8837C14.6086 7.44687 15.1713 7.891 15.8162 8.17407C16.4612 8.45715 17.1672 8.56983 17.8675 8.50146C18.5677 8.43308 19.2391 8.18591 19.8181 7.78332C20.3971 7.38073 20.8646 6.83602 21.1764 6.2007C21.4882 5.56539 21.6339 4.86046 21.5999 4.15259C21.5658 3.44471 21.3531 2.75728 20.9818 2.15529C20.6106 1.55331 20.093 1.05667 19.4781 0.712343C18.8632 0.368013 18.1712 0.187372 17.4677 0.1875ZM15.2404 4.3542C15.2404 3.75916 15.4751 3.18849 15.8928 2.76773C16.3105 2.34697 16.877 2.11059 17.4677 2.11059C18.0584 2.11059 18.6249 2.34697 19.0426 2.76773C19.4603 3.18849 19.6949 3.75916 19.6949 4.3542C19.6949 4.94924 19.4603 5.51991 19.0426 5.94067C18.6249 6.36142 18.0584 6.5978 17.4677 6.5978C16.877 6.5978 16.3105 6.36142 15.8928 5.94067C15.4751 5.51991 15.2404 4.94924 15.2404 4.3542ZM4.74053 10.444C4.14982 10.444 3.58331 10.6804 3.16562 11.1011C2.74793 11.5219 2.51328 12.0926 2.51328 12.6876C2.51328 13.2826 2.74793 13.8533 3.16562 14.2741C3.58331 14.6948 4.14982 14.9312 4.74053 14.9312C5.33123 14.9312 5.89774 14.6948 6.31543 14.2741C6.73312 13.8533 6.96778 13.2826 6.96778 12.6876C6.96778 12.0926 6.73312 11.5219 6.31543 11.1011C5.89774 10.6804 5.33123 10.444 4.74053 10.444ZM17.4677 18.7774C16.877 18.7774 16.3105 19.0138 15.8928 19.4345C15.4751 19.8553 15.2404 20.4259 15.2404 21.021C15.2404 21.616 15.4751 22.1867 15.8928 22.6075C16.3105 23.0282 16.877 23.2646 17.4677 23.2646C18.0584 23.2646 18.6249 23.0282 19.0426 22.6075C19.4603 22.1867 19.6949 21.616 19.6949 21.021C19.6949 20.4259 19.4603 19.8553 19.0426 19.4345C18.6249 19.0138 18.0584 18.7774 17.4677 18.7774Z"
              />
            </svg>
          </Link>
          <Link
            to="/"
            className="w-12 h-12 bg-gray-10 rounded-full flex justify-center items-center hover:bg-primary duration-300"
          >
            <svg
              className="fill-primary rounded-full hover:fill-white"
              width="48"
              height="48"
              viewBox="-11 -13 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.66044 2.78742C3.80853 3.63786 2.45225 5.66186 2.45225 8.07518C2.45225 10.5401 3.4569 12.4407 4.89467 14.0698C6.08127 15.4116 7.51681 16.5246 8.91662 17.6084C9.24927 17.8665 9.57969 18.1234 9.90453 18.3803C10.4917 18.8459 11.0152 19.2532 11.5209 19.5505C12.0255 19.8467 12.4318 19.9825 12.7778 19.9825C13.1239 19.9825 13.5302 19.8478 14.0348 19.5505C14.5404 19.2532 15.064 18.8459 15.6511 18.3803C15.9749 18.1223 16.3064 17.8665 16.639 17.6095C18.0389 16.5235 19.4744 15.4116 20.661 14.0698C22.0999 12.4407 23.1034 10.5401 23.1034 8.07518C23.1034 5.66298 21.7471 3.63786 19.8952 2.78742C18.0958 1.96054 15.6779 2.17932 13.3806 4.57917C13.3025 4.66061 13.2089 4.72539 13.1053 4.76964C13.0018 4.81388 12.8904 4.83668 12.7778 4.83668C12.6653 4.83668 12.5539 4.81388 12.4503 4.76964C12.3468 4.72539 12.2531 4.66061 12.175 4.57917C9.87774 2.17932 7.45988 1.96054 5.66044 2.78742ZM12.7778 2.82781C10.197 0.505366 7.30695 0.18 4.96388 1.25595C2.49244 2.39473 0.777832 5.03356 0.777832 8.0763C0.777832 11.0663 2.0169 13.3484 3.64332 15.1884C4.9449 16.6615 6.53783 17.8945 7.94546 18.9828C8.26472 19.2296 8.57393 19.4697 8.86751 19.7031C9.44016 20.1564 10.0541 20.6388 10.6759 21.0046C11.2976 21.3692 12.0076 21.6665 12.7778 21.6665C13.5481 21.6665 14.258 21.3692 14.8798 21.0046C15.5027 20.6388 16.1155 20.1564 16.6882 19.7031C16.9939 19.4609 17.3013 19.2208 17.6102 18.9828C19.0167 17.8945 20.6108 16.6604 21.9123 15.1884C23.5388 13.3484 24.7778 11.0663 24.7778 8.0763C24.7778 5.03356 23.0643 2.39473 20.5918 1.2582C18.2487 0.181122 15.3587 0.506488 12.7778 2.82781Z"
              />
            </svg>
          </Link>
        </div>
      </div>

      {year && <span>{year}</span>}
      <div className="pt-2">{description}</div>
    </Link>
  );
};
