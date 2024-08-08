import { useParams } from "react-router-dom";
import classNames from "../../../../consts/classNames";
import Checkout from "./checkout";
import CurrentRank from "./current_rank";
import DesiredRank from "./desired_rank";
import Players from "../../../home/players";
import FAQ from "../../../home/faq";
import faq_rank_boost from "../../../../data/faq_rank_boost.json";
const RankBoost = () => {
  const faqs = faq_rank_boost["team-fight-tactics"]?.faqs;
  return (
    <div>
      <div className="mt-4 lg:mt-6">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-3/5">
            <CurrentRank />
            <div className="mt-6">
              <DesiredRank />
            </div>
          </div>
          <div className="flex-grow">
            <Checkout />
          </div>
        </div>
      </div>
      <Players />
      <FAQ faqs={faqs} />
    </div>
  );
};

export default RankBoost;
