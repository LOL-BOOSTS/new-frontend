import classNames from "../../consts/classNames";

const AboutBoosts = () => {
  return (
    <div className="mt-10 lg:mt-20">
      <div className={`${classNames.containerClass}`}>
        <div>
          <h1 className="text-center text-3xl lg:text-5xl font-bold">
            About LOL-BOOSTS!
          </h1>
          <p className="mt-4 text-center text-lg text-gray-300">
            What makes us the preferred choice for thousands of players?
          </p>
        </div>
        <div className="mt-10 grid lg:grid-cols-3 gap-12">
          <div className="mb-4 rounded-2xl p-8 border-indigo-500 bg-indigo-950 bg-opacity-75 shadow-sm">
            <h6 className="text-2xl font-bold">Security</h6>
            <div className="mt-6 text-gray-400">
              Your safety is crucial. That's why we provide premium account
              encryption and top-notch automated VPN security throughout the
              entire experience. Lol-boosts has never experienced any bans, and
              we've helped thousands of gamers achieve their League of Legends,
              Valorant or TFT rank dreams without any problems whatsoever!
            </div>
          </div>
          <div className="mb-4 rounded-2xl p-8 border-indigo-500 bg-indigo-950 bg-opacity-75 shadow-sm">
            <h6 className="text-2xl font-bold">The Most Sophisticated</h6>
            <div className="mt-6 text-gray-400">
              With our proud 10 years of experience, we've managed to recruit
              the most sophisticated and professional verified boosters in the
              field, ensuring nothing but success.
            </div>
          </div>
          <div className="mb-4 rounded-2xl p-8 border-indigo-500 bg-indigo-950 bg-opacity-75 shadow-sm">
            <h6 className="text-2xl font-bold">
              The Best Solution & Experience in a Nutshell:
            </h6>
            <div className="mt-6 text-gray-400">
              Our mechanism provides the quickest, safest, and easiest route to
              your goals. Stop wasting time in low elo... we're here to offer
              not just the best experience but also the most effective one in
              the field. At lol-boosts, we strive to grant the best rank-up
              experience possible!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutBoosts;
