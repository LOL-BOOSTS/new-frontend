import Checkout from "./checkout";
import HoursAmount from "./hours_amount";

const Coaching = () => {
  return (
    <div>
      <div className="mt-4 lg:mt-6">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-3/5">
            <HoursAmount />
          </div>
          <div className="flex-grow">
            <Checkout />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Coaching;
