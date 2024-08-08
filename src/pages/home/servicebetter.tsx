import classNames from "../../consts/classNames";

const ServiceBetter = () => {
  return (
    <div className={`mt-10 lg:mt-20 ${classNames.containerClass}`}>
      <h1 className="text-3xl lg:text-5xl text-center mx-auto">
        Boosting services…but <span className="italic">smoother</span> ,{" "}
        <span className="italic">better</span> and{" "}
        <span className="italic">faster</span> .
      </h1>
      <div className="mt-4 text-center text-gray-300 text-lg">
        Unlock unbeatable results—not just for your game, but also when it comes
        to your wallet, time & effort.
      </div>
      <div className="mt-10 lg:mt-20">
        <div className="flex gap-4 flex-col lg:flex-row">
          <div className="w-full lg:w-2/5  flex-shrink-0 relative">
            <img
              src="/images/other/9-02.png"
              className="w-full h-full object-cover object-center rounded-3xl shadow-xl border border-indigo-700"
            />
            <div className="absolute w-full p-5 bottom-0 left-0 space-y-2">
              <span className="text-xl lg:text-2xl font-bold">
                Premium, instant 24/7 Human Support
              </span>
            </div>
          </div>
          <div className="flex-grow max-md:flex max-md:flex-col md:grid md:grid-rows-2 gap-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative rounded-3xl shadow-xl border border-indigo-700">
                <img
                  src="/images/other/n8.png"
                  className="h-full opacity-0 object-cover object-center rounded-3xl shadow-xl border border-indigo-700"
                />
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl text-center">
                  Coming Soon
                </span>
              </div>
              <div className="relative">
                <img
                  src="/images/other/8-03.png"
                  className="h-full object-cover object-center rounded-3xl shadow-xl border border-indigo-700"
                />
                <div className="absolute bottom-0 left-0 w-full p-5 space-y-2">
                  <span className="text-xl lg:text-2xl font-bold">
                    Full anonymity!
                  </span>
                  <p className="text-gray-400">
                    Our premium VPN Encryption provides full anonymity all the
                    way!
                  </p>
                </div>
              </div>
            </div>
            <div className="md:flex-grow relative">
              <img
                src="/images/other/6-01.jpg"
                className="object-cover object-center rounded-3xl w-full h-full shadow-xl border border-indigo-700 opacity-50"
              />
              <div className="absolute bottom-0 left-0 w-full p-5 space-y-2">
                <span className="text-xl lg:text-2xl font-bold">
                  Up-to-Date payment methods
                </span>
                <p className="text-gray-400">
                  Experience a smooth, fast transaction!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServiceBetter;
