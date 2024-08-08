import classNames from "../../consts/classNames";

const TrackOrder = () => {
  return (
    <div className={`${classNames.containerClass} mt-10 lg:mt-20`}>
      <div className="mx-auto max-w-[567px] shadow-sm rounded-lg py-12 bg-indigo-950 bg-opacity-20">
        <div className="max-w-[85%] mx-auto">
          <h4 className="text-2xl font-bold">WoW Custom Order</h4>
          <p className="mt-2 text-gray-500">
            Achievements, transmog sets, old raids, mounts, specific items, rare
            cosmetics or ANYTHING that comes to your mind!
          </p>
          <div className="mt-10 space-y-4">
            <div className="flex flex-col gap-2">
              <label>Order ID</label>
              <input
                type="text"
                className={`${classNames.inputClass}`}
                placeholder="Order Id"
              />
            </div>
            <button className={`rounded-lg w-full ${classNames.btnClass}`}>
              Send
            </button>
          </div>
          <div className="mt-4 text-gray-500 text-sm">
            * Before submitting the form, please make sure you have selected the
            correct server and filled up the required fields in the form. We
            will contact you as soon as possible.
          </div>
        </div>
      </div>
    </div>
  );
};
export default TrackOrder;
