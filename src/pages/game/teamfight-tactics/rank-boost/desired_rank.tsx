import classNames from "../../../../consts/classNames";
import ranks from "../../../../data/game/team-fight-tactics/rank.json";
import division from "../../../../data/game/team-fight-tactics/division.json";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setDesiredDivision,
  setDesiredRank,
} from "../../../../redux/slice/game/tftSlice";

const DesiredRank = () => {
  const [data, setData] = useState<any[]>([]);
  const [cdata, setCData] = useState<any[]>([]);
  const desired_rank = useSelector((d: any) => d?.tft?.desired_rank);
  const dispatch = useDispatch();
  useEffect(() => {
    setData(ranks.filter((d: any) => !d.level || d.level < 3));
    setCData(division);
    dispatch(setDesiredDivision(division[0]));
  }, []);

  useEffect(() => {
    if (data.length) {
      dispatch(setDesiredRank(data[0]));
    }
  }, [data]);

  return (
    <div className=" rounded-lg border p-4  border-indigo-800">
      <div className="flex flex-wrap justify-start items-center gap-4">
        <span
          className={`flex w-16 h-16 p-3 rounded-full border ${classNames.bgDarkClass} ${classNames.borderLClass} flex-shrink-0 justify-center items-center`}
        >
          {desired_rank && (
            <img src={desired_rank?.rank?.url} className="w-full" alt="IMG" />
          )}
        </span>
        <div>
          <h3 className="text-xl">Desired Rank</h3>
          <p className="text-gray-400 text-sm">
            Select your desired rank and division
          </p>
        </div>
      </div>
      <div className="border-t border-indigo-800 pt-4 mt-4">
        <div className="flex flex-wrap items-center justify-start gap-4">
          {data.map((d: any, index: number) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-lg ${
                desired_rank?.rank?._id == d?._id
                  ? "bg-indigo-800"
                  : "bg-indigo-950"
              } flex-shrink-0 hover:bg-indigo-800 bg-opacity-70`}
              onClick={() => {
                dispatch(setDesiredRank(d));
              }}
            >
              <img src={d.url} alt="ICO" className="w-8" />
            </button>
          ))}
        </div>
        <div className="flex items-center justify-start gap-4 mt-2">
          {cdata.map((d: any, index: number) => (
            <button
              key={index}
              className={`px-5 py-2 rounded-lg ${
                desired_rank?.division?.value == d?.value
                  ? "bg-indigo-800"
                  : "bg-indigo-950"
              } hover:bg-indigo-800 bg-opacity-70`}
              onClick={() => dispatch(setDesiredDivision(d))}
            >
              {d.mark}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
export default DesiredRank;
