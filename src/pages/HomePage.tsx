import { useEffect, useState } from "react";
import { Banner } from "../components/Banner/Banner";
import { Link } from "react-router-dom";

export const HomePage = () => {
  const [word, setWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWord((prevIndex) => {
        return prevIndex === 2 ? 0 : prevIndex + 1;
      });
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [word]);
  return (
    <>
      <Banner />

      <div className="flex flex-col justify-center items-center h-main text-white">
        <h1 className="flex flex-col font-rutenia my-2.5">
          <span className="text-6xl">Про</span>
          <span className="text-9xl">Україну</span>
        </h1>

        <Link
          to="/"
          className="flex self-center justify-center items-center bg-primary px-6 py-5 rounded-full mb-9 text-xl font-semibold hover:bg-blue duration-300"
        >
          Читати більше
        </Link>

        <span className="text-6xl">
          {word === 0 && (
            <span className="animate-fade-left animate-duration-[2000ms] animate-ease-linear">
              Вільна
            </span>
          )}
          {word === 1 && (
            <span className="animate-fade-left animate-duration-[2000ms] animate-ease-linear">
              Сильна
            </span>
          )}
          {word === 2 && (
            <span className="animate-fade-left animate-duration-[2000ms] animate-ease-linear">
              Незалежна
            </span>
          )}
        </span>
      </div>
    </>
  );
};
