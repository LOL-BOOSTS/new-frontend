import CurrentRank from "./current_rank";
import Players from "../../../home/players";
import FAQ from "../../../home/faq";
import faq_win_boost from "../../../../data/faq_win_boost.json";
import WinsAmount from "./wins_amount";
import Checkout from "./checkout";

const WinBoost = () => {
  const faqs = faq_win_boost["league-of-legends"]?.faqs;
  return (
    <div>
      <div className="mt-4 lg:mt-6">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-3/5">
            <CurrentRank />
            <div className="mt-6">
              <WinsAmount />
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

export default WinBoost;
