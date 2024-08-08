import { FaComment, FaDiscord } from "react-icons/fa";
import classNames from "../../consts/classNames";

const Contact = () => {
  return (
    <div className={`${classNames.containerClass} mt-10 lg:mt-20`}>
      <div className="grid lg:grid-cols-2 items-center">
        <div>
          <img src="/images/other/10.png" className="w-full" />
        </div>
        <div>
          <h2 className="text-3xl font-bold">
            Premium 24/7 support in multiple languages. By LOL BOOSTERS for LOL
            BOOSTERS
          </h2>
          <p className="mt-6 text-gray-300">
            Our LOL BOOSTS support team is available 24/7 to help you with any
            questions or issues you may have.
          </p>
          <div className="mt-6 flex items-center gap-2 lg:gap-6">
            <a
              href="#"
              className={`bg-indigo-950 ${classNames.btnClass} flex items-center gap-2 justify-center`}
            >
              <FaComment /> Open Live Chat
            </a>
            |
            <a
              href="#"
              className={`${classNames.btnClass} flex items-center gap-2 justify-center`}
            >
              <FaDiscord />
              Join Discord
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
