import { Link } from "react-router-dom";
import { Banner } from "../Banner/Banner";
import { Logo } from "../Logo/Logo";
import { Nav } from "../Nav/Nav";
import { useEffect, useState } from "react";

export const Header = () => {
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
    <header className="">
      <div className="flex justify-between items-center px-7 h-11 bg-header-opacity-50">
        <Logo />

        <Nav />

        <div className="flex gap-2 items-center">
          <img
            width={25}
            src={process.env.PUBLIC_URL + "/images/world.svg"}
            alt="World"
          />
          Укр
        </div>
      </div>

      <Banner />

      <div className="flex flex-col justify-center items-center h-main text-white">
        <h1 className="flex flex-col font-rutenia my-2.5">
          <span className="text-6xl">Про</span>
          <span className="text-9xl">Україну</span>
        </h1>

        <Link
          to="/"
          className="flex justify-center items-center bg-primary w-52 h-16 rounded-full mb-9 text-xl font-semibold"
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
    </header>
  );
};
