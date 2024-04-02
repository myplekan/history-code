import { Banner } from "../components/Banner/Banner";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { AnimateImg } from "../components/AnimateImg/AnimateImg";
import { ArrowUp } from "../components/ArrowUp/ArrowUp";

export const HomePage = () => {
  return (
    <main>
      <Banner />

      <div className="flex flex-col justify-center items-center h-screen text-center text-white pt-11 mb-3">
        <h1 className="flex flex-col font-rutenia my-2.5">
          <span className="text-[56px] leading-[56px]">Про</span>
          <span className="text-[138px] leading-[138px]">Україну</span>
        </h1>

        <Link
          to="/"
          className="flex self-center justify-center items-center bg-primary px-6 py-5 rounded-full mb-9 font-semibold hover:bg-second duration-300"
        >
          Читати більше
        </Link>

        <div className="w-full text-[58px]">
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

      <div className="grid gap-x-5 grid-cols-8 pb-11">
        <div className="col-start-1 col-end-5 pt-[108px] pl-10">
          <h2 className="font-rutenia text-5xl mb-4">Про проєкт</h2>

          <p className="mb-[230px]">
            Основною метою проекту є - розповісти всім бажаючим детальніше про
            Україну, про її давню історію, про багату культуру і дати можливість
            всім охочим детально ознайомитись з кожним регіоном.
          </p>
        </div>
        <img
          src={process.env.PUBLIC_URL + "/images/svg/print.svg"}
          alt="Print"
          className="col-start-5 col-end-9 justify-self-end pr-10"
        />

        <AnimateImg
          name={"gallery1.png"}
          staticClass={"col-start-1 col-end-5"}
          animateClass={"animate-move-right"}
        />

        <div className="col-start-5 col-end-9 pt-[80px] pr-10">
          <h2 className="font-rutenia text-5xl mb-4">Дніпро</h2>

          <div className="flex items-center gap-4 text-2xl mb-8">
            <img
              width={33}
              className="inline-flex"
              src={process.env.PUBLIC_URL + "/images/svg/pattern.svg"}
              alt="Pattern"
            />
            <span>Найбільша річка України</span>
          </div>

          <p className="mb-[160px]">
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

        <div className="col-start-1 col-end-5 pl-10 pt-[70px]">
          <h2 className="font-rutenia text-5xl mb-4">Києво-Печерська Лавра</h2>

          <div className="flex items-center gap-4 text-2xl mb-7">
            <img
              width={33}
              className="inline-flex"
              src={process.env.PUBLIC_URL + "/images/svg/pattern.svg"}
              alt="Pattern"
            />
            <span>Одна з найбільш визначник культурних пам’яток України</span>
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
          animateClass={"animate-move-left"}
        />

        <div className="col-start-1 col-end-5 pl-10 pt-24">
          <h2 className="font-rutenia text-5xl mb-4">Говерла</h2>

          <div className="flex items-center gap-4 text-2xl mb-7">
            <img
              width={33}
              className="inline-flex"
              src={process.env.PUBLIC_URL + "/images/svg/pattern.svg"}
              alt="Pattern"
            />
            <span>
              Найвища гора в Україні - Говерла, її висота 2061 метр над рівнем
              моря
            </span>
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
        src={process.env.PUBLIC_URL + "/images/full/full-hoverla.png"}
        alt="Hoverla"
        className="w-full mb-4"
      />

      <img
        src={process.env.PUBLIC_URL + "/images/svg/print-b.svg"}
        alt="print"
        className="w-32 mb-4 mx-auto"
      />

      <ArrowUp />
    </main>
  );
};
