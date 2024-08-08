import { Swiper, SwiperSlide } from "swiper/react";
import classNames from "../../consts/classNames";
import featured_posts from "../../data/featured_posts.json";
import latest_posts from "../../data/latest_posts.json";
import { FaArrowRight, FaCrown, FaPaperPlane } from "react-icons/fa";
const Blog = () => {
  return (
    <div className={`${classNames.containerClass} mt-10 lg:mt-20`}>
      <h1 className="text-3xl lg:text-5xl font-bold text-center">
        Read the latest LOL BOOSTs Blog & News
      </h1>
      <p className="text-center text-gray-400 mt-4">
        Your ultimate destination for the latest gaming news, useful tips, and
        comprehensive guides.
      </p>
      <div className="mt-6 lg:mt-8 px-4">
        <h4 className="text-xl lg:text-2xl">Featured Posts</h4>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
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
          }}
          className="mt-4"
        >
          {featured_posts?.map((d: any, index: number) => {
            return (
              <SwiperSlide key={index} className="rounded-2xl">
                <div className="relative w-full h-full">
                  <img
                    src={d.url}
                    alt="IMG"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute left-0 bottom-0 w-full text-lg py-2 text-center">
                    {d.title}
                  </div>
                </div>
                <div className="mt-4 text-gray-300">{d.description}</div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="mt-6 lg:mt-8">
        <h4 className="text-xl lg:text-2xl px-4">Latest Posts</h4>
        <div className="flex flex-col lg:flex-row gap-6 mt-4 flex-shrink-0">
          <div className="w-full lg:w-3/5 flex-shrink-0">
            {latest_posts?.map((d: any, index: number) => (
              <div
                key={index}
                className="p-4 rounded-3xl hover:bg-indigo-950 bg-opacity-30"
              >
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
                  <div className="w-full lg:w-1/3 flex-shrink-0">
                    <img
                      src={d.url}
                      className="rounded-2xl object-cover object-center w-full h-full"
                      alt="IMG"
                    />
                  </div>
                  <div className="flex flex-grow flex-col justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-6 text-gray-400">
                        <span className="text-sm">{d?.date}</span>{" "}
                        <span className="px-3 py-0 rounded-2xl text-sm border-indigo-500 bg-indigo-900">
                          {d.caption}
                        </span>
                      </div>
                      <h2 className="text-xl mt-3">{d?.title}</h2>
                      <div className="mt-2 text-gray-400 max-h-24 overflow-hidden">
                        {d.description}
                      </div>
                    </div>
                    <div className="pt-4 border-t border-indigo-900 flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="w-14 h-14 rounded-full bg-indigo-400 bg-opacity-75 flex items-center justify-center">
                          <FaCrown />
                        </span>
                        <div>
                          <span>{d.user?.name}</span>
                          <p className="text-gray-400">{d.user?.role}</p>
                        </div>
                      </div>
                      <a
                        className={`${classNames.hoverClass} flex cursor-pointer items-center justify-start gap-2`}
                      >
                        Read ful article <FaArrowRight />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="mt-4"></div>
          </div>
          <div className="flex-grow">
            <div className="p-5 border border-indigo-900 rounded-2xl">
              <div className="flex justify-start items-center gap-2">
                <FaPaperPlane /> Gaming newsletter
              </div>
              <p className="mt-2 text-gray-400">
                Stay up to date with the latest news and updates in the gaming
                world.
              </p>
              <div className="flex mt-4 justify-end gap-4">
                <input
                  className={`px-2 py-1 rounded-lg bg-indigo-950 bg-opacity-75 text-sm flex-grow`}
                  placeholder="Enter your email address"
                />
                <button className={`rounded-md ${classNames.btnClass} text-sm`}>
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
