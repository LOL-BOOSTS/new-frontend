import { useEffect, useState } from "react";
const Accordion = (props: any) => {
  const { title, description } = props;
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl shadow-lg border border-indigo-900 mb-4 transition-all duration-100">
      <div
        className="p-4 flex justify-between items-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <strong className="text-xl">{title}</strong>
        <button
          className={`w-10 h-10 flex-shrink-0 rounded-full hover:bg-indigo-500 transition-all ${
            open
              ? "-rotate-90 bg-indigo-400"
              : "rotate-90 bg-indigo-800 bg-opacity-50"
          }`}
        >
          <span className="">&#10095;</span>
        </button>
      </div>
      {open && (
        <div
          className={` transition-all duration-200 text-gray-300 overflow-clip`}
          data-aos="fade-in"
        >
          <div
            className={`border-t border-indigo-900 p-4 `}
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
        </div>
      )}
    </div>
  );
};
export default Accordion;
