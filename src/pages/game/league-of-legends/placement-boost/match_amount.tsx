import { RangeSlider } from "flowbite-react";
import classNames from "../../../../consts/classNames";
import { useDispatch, useSelector } from "react-redux";
import { setPlacementMatch } from "../../../../redux/slice/game/lolSlice";

const WinsAmount = () => {
  const placement_match = useSelector((d: any) => d.lol?.placement_match);
  const dispatch = useDispatch();
  return (
    <div className=" rounded-lg border p-4  border-indigo-800">
      <div className="flex justify-start items-center gap-4">
        <span
          className={`flex w-16 h-16 p-3 text-3xl rounded-full border ${classNames.bgDarkClass} ${classNames.borderLClass} flex-shrink-0 justify-center items-center`}
        >
          {placement_match}
        </span>
        <div>
          <h3 className="text-xl">Matches Amount</h3>
          <p className="text-gray-400 text-sm">
            Select your desired amount of matches.
          </p>
        </div>
      </div>
      <div className="border-t border-indigo-800 pt-4 mt-4">
        <RangeSlider
          id="lg-range"
          color="info"
          sizing="lg"
          min={1}
          max={5}
          step={1}
          value={placement_match}
          onChange={(event: any) =>
            dispatch(setPlacementMatch(event.target.value))
          }
        />
      </div>
    </div>
  );
};
export default WinsAmount;