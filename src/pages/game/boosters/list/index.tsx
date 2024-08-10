import CardBooster from "../../../../components/game/boosters/Cardbooster";
import classNames from "../../../../consts/classNames";
import all_boosters from "../../../../data/all_boosters.json";
const AllBoosters = () => {
  return (
    <div
      className={`${classNames.containerClass} lg:max-w-[1120px] mt-10 lg:mt-20`}
    >
      {/* Cover */}
      <div className="text-center space-y-4">
        <h1 className="text-indigo-500 text-3xl font-bold lg:text-5xl">
          Our Players
        </h1>
        <p className="text-gray-400">
          Our team includes the top boosters in the industry
        </p>
      </div>
      <div className="mt-10 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 max-sm:max-w-[370px] mx-auto">
        {all_boosters?.map((d: any, index: number) => (
          <CardBooster {...d} key={index} />
        ))}
      </div>
    </div>
  );
};

export default AllBoosters;
