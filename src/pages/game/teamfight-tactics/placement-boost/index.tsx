import CurrentRank from "./current_rank";
import Players from "../../../home/players";
import FAQ from "../../../home/faq";
import faq_placement_boost from "../../../../data/faq_placement_boost.json";
import MatchAmount from "./match_amount";
import Checkout from "./checkout";

const PlacementBoost = () => {
  const faqs = faq_placement_boost["team-fight-tactics"]?.faqs;
  return (
    <div>
      <div className="mt-4 lg:mt-6">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-3/5">
            <CurrentRank />
            <div className="mt-6">
              <MatchAmount />
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

export default PlacementBoost;
