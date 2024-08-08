import { useEffect, useState } from "react";
import { Tooltip } from "flowbite-react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import rank from "../../../../data/game/league-of-legends/rank.json";
import division from "../../../../data/game/league-of-legends/division.json";
import current_lp from "../../../../data/game/league-of-legends/current_lp.json";
import current_lp_gains from "../../../../data/game/league-of-legends/current_lp_gains.json";
import servers from "../../../../data/game/league-of-legends/servers.json";

import {
  setCurrentDivision,
  setCurrentLP,
  setCurrentLPGain,
  setCurrentRank,
  setServer,
} from "../../../../redux/slice/game/lolSlice";
import classNames from "../../../../consts/classNames";

const CurrentRank = (props: any) => {
  const [data, setData] = useState<any[]>([]);
  const dispatch = useDispatch();
  const current_rank = useSelector((d: any) => d.lol.current_rank);
  // initilize variable
  useEffect(() => {
    setData(rank);
    dispatch(setCurrentDivision(division[0]));
  }, []);

  useEffect(() => {
    if (data.length) {
      dispatch(setCurrentRank(data[0]));
    }
  }, [data]);

  return (
    <div className=" rounded-lg border p-4  border-indigo-800">
      <div className="flex justify-start items-center gap-4">
        <span
          className={`flex w-16 h-16 p-3 rounded-full border ${classNames.bgDarkClass} ${classNames.borderLClass} flex-shrink-0 justify-center items-center`}
        >
          {current_rank?.rank && (
            <img
              src={current_rank?.rank?.url}
              className="w-full"
              alt={current_rank?.rank?.title}
            />
          )}
        </span>
        <div>
          <h3 className="text-xl">Current Rank</h3>
          <p className="text-gray-400 text-sm">
            Select your current tier and division.
          </p>
        </div>
      </div>
      <div className="border-t border-indigo-800 pt-4 mt-4">
        <div className="flex items-center justify-start gap-x-4 gap-y-2 flex-wrap">
          {data.map((d: any, index: number) => (
            <Tooltip
              key={index}
              content={d?.title}
              placement="bottom"
              className="flex-shrink-0"
            >
              <button
                className={`px-4 py-2 flex-shrink-0 rounded-lg ${
                  current_rank?.rank?._id == d?._id
                    ? "bg-indigo-800"
                    : "bg-indigo-950"
                } hover:bg-indigo-800 bg-opacity-70`}
                onClick={() => dispatch(setCurrentRank(d))}
              >
                <img src={d?.url} alt="ICO" className="w-8" />
              </button>
            </Tooltip>
          ))}
        </div>
        <div className="flex items-center justify-start gap-4 mt-2">
          {!current_rank?.rank?.level &&
            division.map((d: any, index: number) => (
              <button
                key={index}
                className={`px-5 py-2 rounded-lg ${
                  current_rank?.division?._id == d._id
                    ? "bg-indigo-800"
                    : "bg-indigo-950"
                } hover:bg-indigo-800 bg-opacity-70`}
                onClick={() => dispatch(setCurrentDivision(d))}
              >
                {d?.mark}
              </button>
            ))}
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
    </div>
  );
};
export default CurrentRank;
