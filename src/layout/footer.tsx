import { Link } from "react-router-dom";
import footers from "../data/footer.json";
import classNames from "../consts/classNames";
import {
  FaArrowUp,
  FaDiscord,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { useEffect, useState } from "react";
const Footer = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 767) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to the top
  };

  const socials = [
    { title: "", link: "", element: <FaTiktok /> },
    { title: "", link: "", element: <FaYoutube /> },
    { title: "", link: "", element: <FaDiscord /> },
    {
      title: "",
      link: "",
      element: (
        <svg
          className="w-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M13.8 10.5 20.7 2h-3l-5.3 6.5L7.7 2H1l7.8 11-7.3 9h3l5.7-7 5.1 7H22l-8.2-11.5Zm-2.4 3-1.4-2-5.6-7.9h2.3l4.5 6.3 1.4 2 6 8.5h-2.3l-4.9-7Z"
          ></path>
        </svg>
      ),
    },
    { title: "", link: "", element: <FaInstagram /> },
  ];
  return (
    <footer className="py-10 lg:py-20 border-t border-indigo-800 mt-10 lg:mt-20 space-y-12">
      <div className={`${classNames.containerClass}`}>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
          {footers.map((d: any, index: number) => (
            <div key={index}>
              <div className="flex justify-start items-center gap-2">
                {d.icon && <img src={d.icon} alt={d.title} />}
                <span className="text-lg">{d.title}</span>
              </div>
              <ul className="mt-4 ">
                {d.list?.map((l: any, i: number) => (
                  <li className="mb-1" key={i}>
                    <Link
                      to={l.link}
                      className="cursor-pointer text-gray-500 hover:text-white"
                    >
                      {l.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div
        className={`${classNames.containerClass} flex max-lg:flex-col items-center justify-between max-lg:justify-center border-t pt-6 border-indigo-800`}
      >
        <span className="text-gray-400">
          Copyright ©{new Date().getFullYear()} LOL BOOSTS. All rights Reserved
        </span>
        <div className="flex justify-start items-center gap-1 lg:gap-3">
          {socials.map((d: any, index: number) => (
            <a
              key={index}
              href={d.link}
              className="px-2 py-1 rounded-lg hover:bg-indigo-500 hover:bg-opacity-50"
            >
              {d.element}
            </a>
          ))}
        </div>
      </div>
      {scrolled && (
        <button
          className="w-16 h-16 rounded-full flex items-center justify-center transition-all hover:bg-indigo-950 bg-indigo-500 shadow-2xl fixed bottom-16 -right-7 hover:right-2 z-10"
          onClick={goToTop}
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};
export default Footer;
