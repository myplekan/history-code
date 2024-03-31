import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export const Banner = () => {
  const arr = ["first", "second", "third"];

  return (
    <>
      <div className="absolute w-full -z-10">
        <Swiper
          slidesPerView={1}
          modules={[Autoplay]}
          autoplay={{ delay: 5000 }}
          speed={1000}
          simulateTouch={false}
        >
          {arr.map((slide) => (
            <SwiperSlide key={slide}>
              <img
                src={process.env.PUBLIC_URL + `/images/slider/${slide}.png`}
                alt="Ukraine"
                className="h-screen w-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
