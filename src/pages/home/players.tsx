import { Swiper, SwiperSlide } from "swiper/react";
import players from "../../data/players.json";
import { FaStar } from "react-icons/fa";
import classNames from "../../consts/classNames";
import { useRef } from "react";
import { Autoplay } from "swiper/modules";
const Players = () => {
  const progressCircle = useRef<SVGSVGElement | null>(null);
  const progressContent = useRef<HTMLSpanElement | null>(null);
  const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty(
        "--progress",
        (1 - progress).toString()
      );
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };
  return (
    <div className={`mt-10 lg:mt-20 ${classNames.containerClass}`}>
      <h1 className="text-center text-3xl lg:text-5xl mx-auto max-w-[75%] font-bold">
        Check out what some out of our thousands of customers say
      </h1>
      <div className="mt-10 lg:mt-20">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            // when window width is >= 1280px
            1280: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          {players.map((d: any, index: number) => {
            return (
              <SwiperSlide
                key={index}
                className="rounded-2xl p-4 shadow-xl border border-indigo-700 flex-shrink-0 overflow-hidden !h-[260px]"
              >
                <div className="flex justify-between items-start">
                  <div className="flex justify-start items-center gap-2">
                    <img
                      src={d.url}
                      alt="IMG"
                      className="w-14 h-14 rounded-full"
                    />
                    <div>
                      <strong>{d.name}</strong> <br />
                      <span>{d.country}</span>
                    </div>
                  </div>
                  <FaStar className="text-yellow-300" />
                </div>
                <div className="mt-4 text-gray-300">{d.description}</div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Players;
