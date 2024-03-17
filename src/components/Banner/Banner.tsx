import { useEffect, useState } from "react";
import './Banner.css';

export const Banner = () => {
  const [firstImage, setFirstImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFirstImage((prevIndex) => {
        return prevIndex === 2 ? 0 : prevIndex + 1;
      });
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [firstImage]);

  const pageWidth = window.innerWidth;
  // const findWidth = (width: number) => {
  //   switch (true) {
  //     case width >= 1440:
  //       return 1440;
  //     case width < 1200 && width >= 640:
  //       return 496;
  //     case width < 640 && width >= 320:
  //       return 288;
  //     default:
  //       break;
  //   }
  // };
  // let transformWidth = findWidth(pageWidth) || 1440;

  return (
    <>
      {true && (
        <div className="banner">
          <ul className="banner__list">
            <li
              className="banner__item"
              style={{
                transform: `translateX(${-(pageWidth * firstImage)}px)`,
                transition: "transform 1000ms",
              }}
            >
              <img
                src={process.env.PUBLIC_URL + "/images/first.png"}
                alt="Ukraine"
                className="banner__item-image"
              />
            </li>
            <li
              className="banner__item"
              style={{
                transform: `translateX(${-(pageWidth * firstImage)}px)`,
                transition: "transform 1000ms",
              }}
            >
              <img
                src={process.env.PUBLIC_URL + "/images/second.png"}
                alt="Ukraine"
                className="banner__item-image"
              />
            </li>
            <li
              className="banner__item"
              style={{
                transform: `translateX(${-(pageWidth * firstImage)}px)`,
                transition: "transform 1000ms",
              }}
            >
              <img
                src={process.env.PUBLIC_URL + "/images/third.png"}
                alt="Ukraine"
                className="banner__item-image"
              />
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
