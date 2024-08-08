import { Outlet } from "react-router-dom";
import classNames from "../../../consts/classNames";
import BoostNavbar from "../game_boost_navbar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setGame } from "../../../redux/slice/globalSlice";

const Valorant = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setGame("valorant"));
  }, []);
  return (
    <div className={`${classNames.containerClass} mt-4 lg:mt-6`}>
      <div className="flex items-center justify-start gap-4">
        <span
          className={`flex w-20 h-20 p-2 ${classNames.bgDarkClass} ${classNames.borderLClass} rounded-full border flex-shrink-0 justify-center items-center`}
        >
          <img
            src="/images/boosting/game/valorant.png"
            className="w-full"
            alt="IMG"
          />
        </span>
        <div>
          <h3 className="text-3xl uppercase">VALROANT Boost</h3>
          <p className="text-gray-400 text-sm">
            Challenger player will Boost you to your desired rank.
          </p>
        </div>
      </div>
      <div className="mt-6 lg:mt-8">
        <BoostNavbar game={"valorant"} />
      </div>
      <Outlet />
    </div>
  );
};
export default Valorant;
