import { Link } from "react-router-dom";
import classNames from "../../consts/classNames";
import {
  FaCheckCircle,
  FaFire,
  FaGem,
  FaGlobe,
  FaLevelUpAlt,
  FaRegStar,
} from "react-icons/fa";

const AccountCard = (props: any) => {
  const { _id, title, beTitle, MMR, server, lifeTime, level, verified, price } =
    props;
  return (
    <>
      <div className="rounded-2xl p-4 border-2 border-indigo-900 hover:border-indigo-500 shadow">
        <div className="p-4 flex justify-start items-center gap-4">
          <img
            src="/images/boosting/icon/Bronze.webp"
            className="w-6"
            alt="IMG"
          />
          <div className="">
            <div className="text-lg">{title}</div>
            <div>{beTitle}</div>
          </div>
        </div>
        <ul className="p-4 space-y-4">
          <li className="flex justify-start items-center gap-3">
            <FaGem className="text-indigo-500 text-xl" /> {beTitle}
          </li>
          <li className="flex justify-start items-center gap-3">
            <FaGlobe className="text-indigo-500 text-xl" /> {server}
          </li>
          <li className="flex justify-start items-center gap-3">
            <FaRegStar className="text-indigo-500 text-xl" /> {MMR}
          </li>
          <li className="flex justify-start items-center gap-3">
            <FaLevelUpAlt className="text-indigo-500 text-xl" /> {level}
          </li>
          <li className="flex justify-start items-center gap-3">
            <FaFire className="text-indigo-500 text-xl" /> {lifeTime}
          </li>
          <li className="flex justify-start items-center gap-3">
            <FaCheckCircle className="text-indigo-500 text-xl" />
            {verified ? "Verified" : "Unverified"}
          </li>
        </ul>
        <div className="mt-4 lg:mt-8 text-center text-xl lg:text-2xl font-bold">
          € {price} <span className="text-[12px] font-normal">EUR</span>
        </div>
        <div className="mt-4">
          <Link to={`${_id}`} className={`${classNames.btnClass2} !w-full`}>
            View Account
          </Link>
        </div>
      </div>
    </>
  );
};
export default AccountCard;
