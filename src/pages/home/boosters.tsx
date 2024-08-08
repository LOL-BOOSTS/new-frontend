import { Swiper, SwiperSlide } from "swiper/react";
import boosters from "../../data/boosters.json";
import classNames from "../../consts/classNames";
import { Autoplay } from "swiper/modules";
import { useRef } from "react";
const Boosters = () => {
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
      <h1 className="text-center mx-auto text-3xl lg:text-5xl font-bold">
        Meet our hand-selected, expert boosters!
      </h1>
      <p className="mt-6 text-center text-lg text-gray-300">
        Have lol-boosts drag you out of the elo hell!
      </p>
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
              slidesPerView: 2,
              spaceBetween: 10,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
            // when window width is >= 1280px
            1280: {
              slidesPerView: 6,
              spaceBetween: 30,
            },
          }}
        >
          {boosters.map((d: any, index: number) => (
            <SwiperSlide className="flex-shrink-0" key={index}>
              <img
                src={d.avatar}
                alt={d.name}
                className="block mx-auto w-[120px] h-[120px] rounded-full"
              />
              <div className="mt-4 text-center text-lg">{d.name}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default Boosters;
