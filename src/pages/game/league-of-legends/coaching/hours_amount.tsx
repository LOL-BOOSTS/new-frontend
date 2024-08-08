import { RangeSlider } from "flowbite-react";
import classNames from "../../../../consts/classNames";
import { useDispatch, useSelector } from "react-redux";
import servers from "../../../../data/game/league-of-legends/servers.json";
import {
  setHoursMatch,
  setServer,
} from "../../../../redux/slice/game/lolSlice";
import { useEffect } from "react";
const HoursAmount = () => {
  const hours_match = useSelector((d: any) => d.lol?.hours_match);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setServer(servers[0]));
  }, []);
  return (
    <div className=" rounded-lg border p-4  border-indigo-800">
      <div className="flex justify-start items-center gap-4">
        <span
          className={`flex w-16 h-16 p-3 text-3xl rounded-full border ${classNames.bgDarkClass} ${classNames.borderLClass} flex-shrink-0 justify-center items-center`}
        >
          {hours_match}
        </span>
        <div>
          <h3 className="text-xl">Hours Amount</h3>
          <p className="text-gray-400 text-sm">
            Select your desired amount of wins.
          </p>
        </div>
      </div>
      <div className="border-t border-indigo-800 pt-4 mt-4">
        <RangeSlider
          id="lg-range"
          color="info"
          sizing="lg"
          min={1}
          max={10}
          step={1}
          value={hours_match}
          onChange={(event: any) => dispatch(setHoursMatch(event.target.value))}
        />
      </div>
      <div className="mt-6 flex flex-wrap justify-start gap-x-6 gap-y-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="">Select Server</label>
          <select
            className="bg-indigo-950 rounded-md px-3 py-1 border-none min-w-[125px]"
            onChange={(event: any) =>
              dispatch(setServer(servers[event.target.value]))
            }
          >
            {Array.isArray(servers) &&
              servers?.map((d: any, index: number) => (
                <option key={index} value={d._id}>
                  {d.name}
                </option>
              ))}
          </select>
        </div>
      </div>
    </div>
  );
};
export default HoursAmount;
