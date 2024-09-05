import { useEffect, useRef, useState } from "react";
import classNames from "../../consts/classNames";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaSearch, FaTimes } from "react-icons/fa";
import champions from "../../data/championFull.json";

const ModalSkinSelect = (props: any) => {
  const { isOpen, setOpen, category, setCategory, skin, setSkin } = props;
  const progressCircle = useRef<SVGSVGElement | null>(null);
  const progressContent = useRef<HTMLSpanElement | null>(null);
  const [data, setData] = useState<any>(null);
  const [filteredData, setFilteredData] = useState<any>(null);
  const [keyword, setKeyword] = useState("");
  useEffect(() => {
    setData(champions);
  }, []);
  useEffect(() => {
    // const filtered = Object.keys(data.data).map()
    if (data) {
      let filtered: any[] = [];
      if (category) {
        Object.keys(data?.data).map((key: string) => {
          if (key == category) {
            filtered = data.data[`${key}`].skins;
          }
        });
      } else {
        Object.keys(data.data).map((key: string) => {
          filtered = [...filtered, ...data.data[`${key}`].skins];
        });
      }
      setFilteredData(filtered.filter((d: any) => d.num));
    }
  }, [category, data]);

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
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function to reset overflow when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  return (
    <>
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-indigo-950 py-10 z-50 bg-opacity-80"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <button
            className="p-2 rounded-full absolute right-4 text-indigo-500 hover:text-indigo-300 top-4"
            onClick={() => setOpen(false)}
          >
            <FaTimes className="text-2xl" />
          </button>
          <div className={`${classNames.containerClass} h-full flex flex-col`}>
            {/* POPULAR SKIN */}
            {/* <div className="space-y-2">
              <label htmlFor="">Popular Skin</label>
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
                    slidesPerView: 7,
                    spaceBetween: 30,
                  },
                }}
              >
                {Object.keys(data.data).map((d: any, index: number) => {
                  return (
                    <SwiperSlide key={index} className="">
                      <img
                        src={d.image}
                        alt="IMG"
                        className="w-full opacity-75 hover:opacity-100 cursor-pointer -translate-x-1/2"
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div> */}
            <div className="flex justify-center py-6">
              {/* <div className="relative">
                <FaSearch className="absolute top-1/2 -translate-y-1/2 left-4 z-10 text-indigo-500" />
                <input
                  className={`${classNames.inputClass} !ps-10 lg:w-72 border border-indigo-500`}
                  placeholder={`Search through ${
                    Object.keys(data.data).length
                  } champions...`}
                  onChange={(e) => setKeyword(e.target.value)}
                />
              </div> */}
              <select
                className={`${classNames.inputClass} !bg-indigo-950 lg:w-72 border border-indigo-500`}
                onChange={(e) => setCategory(e.target.value)}
                defaultValue={category}
              >
                <option value="">Select Option</option>
                {Object.keys(data.data).map((key: any, index: number) => (
                  <option value={data.data[key].id} key={index}>
                    {data.data[key].id}
                  </option>
                ))}
              </select>
            </div>
            <div className="mt-8 flex-1 overflow-auto">
              <div className="grid gap-x-8 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
                {filteredData?.length &&
                  filteredData?.map((d: any, index: number) => (
                    <div
                      className="flex justify-start cursor-pointer"
                      key={index}
                      onClick={() => { setSkin(d); setOpen(false) }}
                    >
                      <div className="w-20 h-20 rounded-l-full bg-indigo-900">
                        <img
                          src={`/images/skin/${d.id}.jpg`}
                          className="w-20 h-20 rounded-full border-4 border-indigo-500"
                        />
                      </div>
                      <div className="flex-1 flex flex-col items-center  justify-center text-center text-xl rounded-r-2xl bg-indigo-900">
                        <div className="text-xl">{d.name}</div>
                        <div className="opacity-70">
                          {d?.chromas ? "Available" : "Unavailable"}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default ModalSkinSelect;
