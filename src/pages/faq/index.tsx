import { Tabs } from "flowbite-react";
import Accordion from "../../components/home/accordian";
import classNames from "../../consts/classNames";
import faqs from "../../data/faq_real.json";
import { useState } from "react";
const FAQ = () => {
  const [tab, setTab] = useState(1);
  return (
    <div className={`${classNames.containerClass} mt-10 lg:mt-20`}>
      <h1 className="text-center text-3xl lg:text-5xl">
        Got a question? We have{" "}
        <span className="text-indigo-500">Answers!</span>
      </h1>
      <div className="mt-10 lg:mt-20 space-y-12">
        <div className="flex items-center gap-2">
          {faqs.map((d: any, index: number) => (
            <button
              key={index}
              className={`${
                d.id == tab ? "bg-indigo-900" : ""
              } rounded-md hover:bg-indigo-800 px-4 py-2 whitespace-nowrap  `}
              onClick={() => setTab(d.id)}
            >
              {d.title}
            </button>
          ))}
        </div>
        <div className="mt-4">
          {faqs.map((d: any, index: number) => (
            <div
              key={index}
              className={`${tab === d.id ? "block" : "hidden"} space-y-8`}
            >
              {d?.content?.map((c: any, i: number) => (
                <Accordion key={i} title={c.question} description={c.answer} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default FAQ;
