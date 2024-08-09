import {
  FaArrowLeft,
  FaArtstation,
  FaLanguage,
  FaLaptop,
  FaMapMarked,
  FaUser,
} from "react-icons/fa";
import classNames from "../../../../consts/classNames";
import Reviews from "../../../../components/custom/Reviews";
import { useNavigate } from "react-router-dom";

const SingleBooster = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className={`${classNames.containerClass} mt-10 lg:mt-20`}>
      <button className={`${classNames.btnClass} gap-4`} onClick={handleBack}>
        <FaArrowLeft /> back
      </button>
      <div className="mt-8 lg:mt-12">
        <div className="flex  max-lg:flex-col justify-start gap-8 flex-wrap">
          <img
            src="/images/boosters/avatars/1.jpg"
            className="w-36 aspect-square rounded-full border-2 border-indigo-500"
            alt="AVATAR"
          />
          <div className="">
            <div className="text-gray-400 flex gap-4">
              <Reviews score={4.8} />
              <span>
                -5 Reviews // <span className="underline">Read more</span>
              </span>
            </div>
            <div className="mt-4 flex max-lg:flex-col justify-start gap-8">
              <div className="inline-flex flex-col text-gray-400 space-y-2">
                <span className="text-4xl text-indigo-500 font-bold">13</span>
                Successfull boosts
              </div>
              <div className="inline-flex flex-col text-gray-400 space-y-2">
                <span className="text-4xl text-indigo-500 font-bold">
                  Challenger
                </span>
                Rank
              </div>
              <div className="inline-flex flex-col text-gray-400 space-y-2">
                <span className="text-4xl text-indigo-500 font-bold">
                  EUNE, EUW, NA
                </span>
                Regions
              </div>
            </div>
          </div>
        </div>
        <div className="flex max-lg:flex-col justify-start gap-8 lg:gap-12 flex-wrap mt-6 text-gray-400">
          <div className="flex justify-start items-center gap-2">
            <FaLanguage /> English, Turkish
          </div>
          <div className="flex justify-start items-center gap-2">
            <FaMapMarked /> Jungle, Midlane
          </div>
          <div className="flex justify-start items-center gap-2">
            <FaArtstation /> Graves, Rek'Sai, Brand, +1
          </div>
        </div>
        <div className="mt-12">
          <div className="text-5xl font-bold space-y-2">
            <div className="flex items-center gap-2 text-indigo-500">
              <FaUser /> Dante
            </div>
            <div className="text-cyan-700">League of Legends</div>
          </div>
          <p className="mt-6 text-gray-400">
            Hey there, i am Dante. Happy to take care of your orders on EUW-EUNE
            and NA server. If you assign me i will reply as fast as possible.
            Diana and Rek'sai, especially Graves are the champs i play all the
            time. choose me, you won't regret it!
          </p>
        </div>
        <div className="mt-12">
          <button className={`${classNames.btnClass} gap-2`}>
            <FaLaptop /> Play With Dante
          </button>
          <div className="mt-8 text-gray-400 space-y-6">
            <div className="flex justify-start gap-4 items-center">
              <span className="text-indigo-500 text-3xl">Ratings</span>
              <div className="flex items-center gap-2">
                <Reviews score={4.8} className="text-yellow-200" /> 4.8
              </div>
            </div>
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <Reviews score={5} className="text-yellow-200" /> 5{" "}
                <span>- Anonymous</span>
              </div>
              <div>cool</div>
              <div className="flex items-center gap-4">
                <Reviews score={4} className="text-yellow-200" /> 4{" "}
                <span>- Anonymous</span>
              </div>
              <div className="flex items-center gap-4">
                <Reviews score={5} className="text-yellow-200" /> 5{" "}
                <span>- Anonymous</span>
              </div>
              <div className="flex items-center gap-4">
                <Reviews score={5} className="text-yellow-200" /> 5{" "}
                <span>- D5R</span>
              </div>
              <div className="flex items-center gap-4">
                <Reviews score={5} className="text-yellow-200" /> 5{" "}
                <span>- Cleo</span>
              </div>
              <div>0 problems</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBooster;
