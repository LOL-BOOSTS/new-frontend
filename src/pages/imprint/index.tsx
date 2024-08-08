import classNames from "../../consts/classNames";

const Imprint = () => {
  return (
    <div className={`${classNames.containerClass} mt-10 lg:mt-20`}>
      <div className="mx-auto max-w-[567px] shadow-sm rounded-lg py-12 bg-indigo-950 bg-opacity-20">
        <div className="max-w-[85%] mx-auto">
          <h4 className="text-2xl font-bold">Imprint</h4>
          <div className="mt-10 space-y-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-xl">
                Registered Company Name
              </label>
              <p className="text-gray-400">LBS SERVICES GLOBAL LTD</p>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-xl">
                Registered Address
              </label>
              <ul className="text-gray-400">
                <li>2, Frederick Street</li>
                <li>Kings Cross</li>
                <li>London</li>
                <li>WC1X 0ND</li>
                <li>UNITED KINGDOM</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-xl">
                Company Number
              </label>
              <p className="text-gray-400">15239951</p>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-xl">
                Contact
              </label>
              <p className="text-gray-400">Email: info@lol-boosts.com</p>
              <p className="text-gray-400">Phone: +49 1759991573</p>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-xl">
                Registered Company Name
              </label>
              <p className="text-gray-400">LBS SERVICES GLOBAL LTD</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Imprint;
