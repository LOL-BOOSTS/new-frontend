import classNames from "../../consts/classNames";
import Videos from "./videos";

const Trailer = () => {
  return (
    <div className={`mt-10 lg:mt-20 relative z-1 ${classNames.containerClass}`}>
      <h1 className="text-center text-5xl max-w-[75%] mx-auto font-bold">
        Check out some snippets of our hand-selected boosters in action!
      </h1>
      <div className="text-center text-lg text-gray-300 max-w-[75%]  mt-6 mx-auto">
        Make your current plays a thing of the past… Conquer the Rift with our
        boosting team.
      </div>

      {/* Trailer Videos */}
      <div className="mt-6 lg:mt-12 max-lg:w-full w-3/5 mx-auto">
        <Videos />
      </div>
    </div>
  );
};
export default Trailer;
