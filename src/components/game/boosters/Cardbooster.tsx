import {
  FaArtstation,
  FaHandSparkles,
  FaLanguage,
  FaStar,
  FaTrophy,
  FaUser,
} from "react-icons/fa";
import classNames from "../../../consts/classNames";
import { Link } from "react-router-dom";

const CardBooster = (props: any) => {
  return (
    <Link
      to={`/boosters/${props?._id}`}
      className={`rounded-xl border-2 ${
        props?.level > 15 ? "border-yellow-300" : "border-indigo-500"
      } p-4 bg-indigo-900 bg-opacity-20  shadow space-y-4 hover:scale-105 cursor-pointer transition-all`}
    >
      <div className="relative">
        <div
          className={`w-full h-[250px] border-2 ${
            props?.level > 15 ? "border-yellow-300" : "border-indigo-500"
          } overflow-hidden rounded-2xl`}
        >
          <img
            src={props?.avatar}
            alt={props?.name}
            className={`w-full h-[250px] object-cover object-center blur-md`}
          />
        </div>
        <img
          src={props?.avatar}
          alt={props?.name}
          className={`absolute top-1/2 left-1/2 w-[160px] aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full border-2 ${
            props?.level > 15 ? "border-yellow-300" : "border-indigo-500"
          } object-cover object-center`}
        />
        <span className="bg-indigo-950 rounded-3xl px-2 py-1 flex items-center gap-1 justify-center border-2 border-indigo-200 text-indigo-200 absolute top-2 right-2">
          <FaStar /> {props?.score}
        </span>
        {props?.level > 15 && (
          <span className="bg-indigo-950 rounded-3xl px-2 py-1 flex items-center gap-1 justify-center border-2 border-yellow-300 text-yellow-300 absolute top-2 left-2">
            <FaHandSparkles /> TOP{" "}
          </span>
        )}
        {props.online && (
          <div className="absolute bottom-3 right-3 z-1">
            <span className="absolute top-0 left-0 block w-full h-full rounded-full bg-green-400 bg-opacity-30 scale-infinite "></span>
            <span className="block w-5 h-5 rounded-full bg-green-400"></span>
          </div>
        )}
      </div>
      <div className="space-y-5">
        <div className="flex justify-between items-center">
          <span className="text-indigo-500">{props?.name}</span>
          <video className="w-6">
            <source src={`/images/boosters/rank/${props?.rank}`} />
          </video>
        </div>
        <div className="space-y-2 text-gray-300">
          <div className="flex items-center gap-4">
            <FaTrophy /> {props?.skills?.txt_success}
          </div>
          <div className="flex items-center gap-4">
            <FaArtstation /> {props?.skills?.txt_mat}
          </div>
          <div className="flex items-center gap-4">
            <FaLanguage /> {props?.skills?.txt_lan}
          </div>
        </div>
        <div className="flex justify-center gap-2">
          {props?.roles?.map((d: any, index: number) => (
            <img
              src={`/images/boosting/role/${d}.png`}
              className="w-8"
              key={index}
              alt={d}
            />
          ))}
        </div>
        <button
          className={`${classNames.btnClass} ${
            props?.level > 15
              ? "bg-yellow-300 hover:bg-yellow-100"
              : "border-indigo-700 hover:bg-indigo-400"
          } w-full flex items-center gap-2 justify-center`}
        >
          <FaUser /> See Booster Profile
        </button>
      </div>
    </Link>
  );
};
export default CardBooster;
