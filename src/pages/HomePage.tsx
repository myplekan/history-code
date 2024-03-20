import { Banner } from "../components/Banner/Banner";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useEffect, useState } from "react";
import { AnimateImg } from "../components/AnimateImg/AnimateImg";

export const HomePage = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Banner />

      <div className="flex flex-col justify-center items-center h-screen text-center text-white pt-11 mb-3">
        <h1 className="flex flex-col font-rutenia my-2.5">
          <span className="text-6xl">Про</span>
          <span className="text-9xl">Україну</span>
        </h1>

        <Link
          to="/"
          className="flex self-center justify-center items-center bg-primary px-6 py-5 rounded-full mb-9 text-xl font-semibold hover:bg-second duration-300"
        >
          Читати більше
        </Link>

        <div className="w-full text-6xl">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            autoplay={{ delay: 5000 }}
            speed={1000}
            simulateTouch={false}
          >
            <SwiperSlide>Вільна</SwiperSlide>
            <SwiperSlide>Сильна</SwiperSlide>
            <SwiperSlide>Незалежна</SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="grid gap-5 grid-cols-8 text-xl pb-11">
        <div className="col-start-1 col-end-5 pt-44 pl-10">
          <h2 className="font-rutenia text-5xl mb-6">Про проєкт</h2>

          <p className="mb-28">
            Основною метою проекту є - розповісти всім бажаючим детальніше про
            Україну, про її давню історію, про багату культуру і дати можливість
            всім охочим детально ознайомитись з кожним регіоном.
          </p>
        </div>
        <img
          src={process.env.PUBLIC_URL + "/images/print.svg"}
          alt="Print"
          className="col-start-5 col-end-9 justify-self-end pr-10"
        />

        <AnimateImg
          name={"gallery1.png"}
          staticClass={"col-start-1 col-end-5"}
          animateClass={
            "animate-fade-right animate-duration-[3000ms] animate-ease-out animate-delay-500"
          }
        />

        <div className="col-start-5 col-end-9 pt-14 pr-10">
          <h2 className="font-rutenia text-5xl mb-6">Дніпро</h2>

          <div className="flex gap-4 mb-7">
            <div className="bg-primary max-h-full w-1 "></div>
            <div className="text-2xl">Найбільша річка України</div>
          </div>

          <p className="mb-28">
            Дніпро протікає через центральну та східну частини країни та має
            довжину близько 2201 км, що робить його третьою за довжиною річкою в
            Європі. Дніпро має величезне значення для України як економічно, так
            і культурно. Він є важливою транспортною артерією, джерелом водної
            енергії та забезпечує водопостачання для міст та сіл вздовж свого
            берега. Крім того, велика кількість історичних та культурних
            пам'яток розташована вздовж Дніпра, що робить його важливим
            туристичним напрямком.
          </p>
        </div>

        <div className="col-start-1 col-end-5 pl-10 pt-16">
          <h2 className="font-rutenia text-5xl mb-6">Києво-Печерська Лавра</h2>

          <div className="flex gap-4 mb-7">
            <div className="bg-primary max-h-full w-1 "></div>
            <div className="text-2xl">
              Одна з найбільш визначник культурних пам’яток України
            </div>
          </div>

          <p className="mb-28">
            Однією з найбільш визначних є Києво-Печерська Лавра, яка знаходиться
            у Києві. Це один з найстаріших монастирів у східній Європі,
            заснований у XI столітті. Лавра є не лише релігійним, але й
            культурним центром, де зберігається безцінна колекція ікон,
            мистецьких робіт, рукописів та археологічних знахідок. Вона також
            включена до списку Світової спадщини ЮНЕСКО.
          </p>
        </div>

        <AnimateImg
          name={"gallery2.png"}
          staticClass={"col-start-5 col-end-9 justify-self-end"}
          animateClass={
            "animate-fade-left animate-duration-[3000ms] animate-ease-out"
          }
        />

        <div className="col-start-1 col-end-5 pl-10 pt-24">
          <h2 className="font-rutenia text-5xl mb-6">Говерла</h2>

          <div className="flex gap-4 mb-4">
            <div className="bg-primary max-h-full w-1 "></div>
            <div className="text-2xl">
              Найвища гора в Україні - Говерла, її висота 2061 метр над рівнем
              моря
            </div>
          </div>
        </div>

        <p className="col-start-1 col-end-5 pl-10">
          Найвища гора в Україні - Говерла. Вона розташована в Українських
          Карпатах, в мальовничому національному парку "Горгани", на кордоні з
          Румунією. Висота вершини Говерли становить приблизно 2061 метр над
          рівнем моря.
        </p>

        <p className="col-start-5 col-end-9 pr-10">
          Говерла є не лише найвищою вершиною України, а й популярним
          туристичним напрямком для любителів гірського туризму та природи.
        </p>
      </div>

      <img
        src={process.env.PUBLIC_URL + "/images/hoverla.png"}
        alt="Hoverla"
        className="w-full mb-4"
      />

      <img
        src={process.env.PUBLIC_URL + "/images/print-b.svg"}
        alt="Hoverla"
        className="w-32 mb-4 mx-auto"
      />

      <img
        className={`w-10 rotate-90 fixed right-2 bottom-36 cursor-pointer ${
          showButton ? "visible" : "hidden"
        } animate-jump animate-infinite animate-duration-[2000ms] animate-ease-linear`}
        onClick={scrollToTop}
        src={process.env.PUBLIC_URL + `/images/arrow-up.svg`}
        alt="Arrow Up"
      />
    </>
  );
};
