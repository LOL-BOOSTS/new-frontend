import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import classNames from "../../consts/classNames";
import { useRef } from "react";

const FastSimple = () => {
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

  const SwiperControl = () => (
    <div className="flex max-lg:justify-center items-center gap-8 mt-6">
      <button className="w-12 h-12 rounded-full hover:bg-indigo-400 swiper-btn-prev">
        &#10094;
      </button>
      <button className="w-12 h-12 rounded-full hover:bg-indigo-400 swiper-btn-next">
        &#10095;
      </button>
    </div>
  );

  return (
    <div className="mt-10 lg:mt-20">
      <div className={`${classNames.containerClass}`}>
        <h1 className="text-center font-bold text-5xl max-w-[75%] mx-auto">
          We process your order smoothly, regardless of the service!
        </h1>
        <p className="text-center mt-6 text-lg text-gray-300">
          Achieving your dream rank…literally as easy as 1, 2, 3!
        </p>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: ".swiper-btn-prev",
            nextEl: ".swiper-btn-next",
          }}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="w-full flex flex-col-reverse lg:flex-row justify-between items-center px-0 lg:pl-16">
              <div className="max-lg:text-center">
                <span className="text-indigo-500">Step #1</span>
                <div className="mt-5 text-2xl font-bold">
                  Select & Customize Your Service
                </div>
                <p className="text-lg text-gray-300 mt-3">
                  Tailor one of our many services to fit your personal
                  desires…completely free of charge!
                </p>
                <div className="mt-5">
                  <button className={`${classNames.btnClass}`}>
                    Get Started
                  </button>
                  {SwiperControl()}
                </div>
              </div>
              <div className="w-full lg:w-2/5">
                <img src="/images/other/5.png" alt="IMG" className="w-full" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full flex flex-col-reverse lg:flex-row justify-between items-center px-0 lg:pl-16">
              <div className="max-lg:text-center">
                <span className="text-indigo-500">Step #2</span>
                <div className="mt-5 text-2xl font-bold">
                  Headache Free Payment Process
                </div>
                <p className="text-lg text-gray-300 mt-3">
                  We accept all major credit cards, Google Pay, Apple Pay,
                  Crypto and many more!
                </p>
                <div className="mt-5">
                  <button className={`${classNames.btnClass}`}>
                    Get Started
                  </button>
                  {SwiperControl()}
                </div>
              </div>
              <div className="w-full lg:w-2/5">
                <img src="/images/other/7.png" alt="IMG" className="w-full" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full flex flex-col-reverse lg:flex-row justify-between items-center px-0 lg:pl-16">
              <div className="max-lg:text-center">
                <span className="text-indigo-500">Step #3</span>
                <div className="mt-5 text-2xl font-bold">
                  That’s it! Start conquering with our expert team!
                </div>
                <p className="text-lg text-gray-300 mt-3">
                  Psst…don’t forget to leave us a review!!
                </p>
                <div className="mt-5">
                  <button className={`${classNames.btnClass}`}>
                    Get Started
                  </button>
                  {SwiperControl()}
                </div>
              </div>
              <div className="w-full lg:w-2/5">
                <img src="/images/other/4.png" alt="IMG" className="w-full" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="mt-10 lg:mt-20">
          <div className="flex justify-center items-center flex-col lg:flex-row gap-6">
            <div className="p-0 w-full md:w-3/5">
              <img
                src="/images/other/10.png"
                className="w-full block mr-auto"
                alt="IMG"
              />
            </div>
            <div className="max-lg:text-center">
              <h2 className="text-2xl font-bold lg:text-4xl">
                Clarity is key... that's why we offer premium, bot-less 24/7
                support to fulfill all your needs and questions.
              </h2>
              <div className="mt-6 text-lg text-gray-300">
                Also, join our community! Read our reviews and see how we’ve
                provided thousands of other gamers with the most satisfying
                service possible!
              </div>
              <div className="mt-6 flex max-lg:justify-center items-center gap-8">
                <img
                  src="/images/flag/de.png"
                  alt="DE"
                  className="rounded-xl w-12 h-12"
                />
                <img
                  src="/images/flag/us.webp"
                  alt="US"
                  className="rounded-xl w-12 h-12"
                />
              </div>
              <div className="mt-6">
                <button className="px-8 py-3 rounded-3xl bg-indigo-500 text-white hover:bg-indigo-800">
                  Join our Discord!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FastSimple;
