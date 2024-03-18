import { Banner } from "../components/Banner/Banner";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export const HomePage = () => {
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

        <div className="w-full text-6xl">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            autoplay={{ delay: 5000 }}
            speed={1000}
            simulateTouch={false}
          >
            <SwiperSlide>
                Вільна
            </SwiperSlide>
            <SwiperSlide>
                Сильна
            </SwiperSlide>
            <SwiperSlide>
                Незалежна
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};
