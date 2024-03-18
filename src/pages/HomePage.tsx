import { Banner } from "../components/Banner/Banner";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export const HomePage = () => {
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
          className="flex self-center justify-center items-center bg-primary px-6 py-5 rounded-full mb-9 text-xl font-semibold hover:bg-blue duration-300"
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

        <img
          src={process.env.PUBLIC_URL + "/images/gallery1.png"}
          alt="Print"
          className="col-start-1 col-end-5"
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

        <img
          src={process.env.PUBLIC_URL + "/images/gallery2.png"}
          alt="Print"
          className="col-start-5 col-end-9 justify-self-end"
        />

        <div className="col-start-1 col-end-5 pl-10 pt-24">
          <h2 className="font-rutenia text-5xl mb-6">Говерла</h2>

          <div className="flex gap-4 mb-7">
            <div className="bg-primary max-h-full w-1 "></div>
            <div className="text-2xl">
              Найвища гора в Україні - Говерла, її висота 2061 метр над рівнем
              моря
            </div>
          </div>

          <p className="mb-2">
            Найвища гора в Україні - Говерла. Вона розташована в Українських
            Карпатах, в мальовничому національному парку "Горгани", на кордоні з
            Румунією. Висота вершини Говерли становить приблизно 2061 метр над
            рівнем моря.
          </p>
        </div>

        <p className="col-start-5 col-end-9 pt-64 pr-10">
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
    </>
  );
};
