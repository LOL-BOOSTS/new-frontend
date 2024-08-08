import { FaDiscord } from "react-icons/fa";
import classNames from "../../consts/classNames";
import jobs from "../../data/jobs.json";
import AmazingSeller from "./amazing_seller";
import FAQ from "../home/faq";
import Players from "../home/players";
import faqs from "../../data/faq.json";

const Hiring = () => {
  return (
    <div className={`${classNames.containerClass} mt-10 lg:mt-20`}>
      <div className="space-y-8">
        <h1 className="max-w-[75%] text-center mx-auto text-3xl lg:text-5xl font-bold">
          Start making money on{" "}
          <span className="text-indigo-500">LOL-BOOSTS</span>
        </h1>
        <div className="max-w-[65%] text-center mx-auto ">
          Join us as a seller or a booster today and start offering your
          services and products to our huge LOL BOOSTs community. ⚡
        </div>
        <button
          className={`flex mx-auto ${classNames.btnClass} flex items-center gap-2 justify-center`}
        >
          <FaDiscord /> Join Discord
        </button>
        <div className="max-w-[75%] mx-auto flex justify-center py-8 flex-wrap gap-8 lg:gap-3">
          {["lol", "valorant", "tft"].map((d: any, index: number) => (
            <span
              key={index}
              className="flex-shrink-0 w-16 h-16 rounded-full bg-indigo-600 flex items-center justify-center p-3"
            >
              <img
                key={index}
                src={`/images/boosting/game/${d}.png`}
                className="w-full"
                alt="ico"
              />
            </span>
          ))}
        </div>
      </div>
      <div className="mt-6">
        <h4 className="text-xl">Available Job Offers (6)</h4>
        <div className="mt-4 grid grid-cols-2 lg:grid-cols-3 gap-4">
          {jobs?.map((d: any, index: number) => (
            <div
              className={`rounded-lg bg-indigo-950 bg-opacity-25 px-4 py-12 flex flex-col items-center justify-between gap-6`}
              key={index}
            >
              <div className="space-y-2">
                <h6 className="text-2xl font-bold mx-auto text-center">
                  {d.title}
                </h6>
                <div
                  className="text-center"
                  dangerouslySetInnerHTML={{ __html: d.description }}
                ></div>
              </div>
              <button className={`${classNames.btnClass}`}>Apply Now</button>
            </div>
          ))}
        </div>
      </div>
      {/* Amazing Seller */}
      {/* <AmazingSeller /> */}
      {/* FAQ Section */}
      {/* <FAQ faqs={faqs} /> */}
      {/* REVIEWS */}
      <Players />
    </div>
  );
};
export default Hiring;
