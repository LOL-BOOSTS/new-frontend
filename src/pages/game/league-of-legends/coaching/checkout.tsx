import { ToggleSwitch } from "flowbite-react";
import { useEffect, useState } from "react";
import { FaArrowRight, FaTimes, FaTimesCircle } from "react-icons/fa";
import classNames from "../../../../consts/classNames";
import { useDispatch, useSelector } from "react-redux";

// Import variable
import rank from "../../../../data/game/league-of-legends/rank.json";
import ModalChampionRole from "../../../../components/game/league-of-legends/ModalChampionRole";
import { setChampions, setRoles } from "../../../../redux/slice/game/lolSlice";
import { setLoginModal } from "../../../../redux/slice/globalSlice";
import _coaching from "../../../../data/game/league-of-legends/coaching.json";

const Checkout = () => {
  const [discount, setDiscount] = useState(false);
  const [applycode, setApplycode] = useState(0);
  const [isOpenChampionRoleModal, setisOpenChampionRoleModal] = useState(false);

  let timeout: any = null;

  const dispatch = useDispatch();

  const current_rank = useSelector((d: any) => d.lol?.current_rank);
  const hours_match = useSelector((d: any) => d.lol.hours_match);
  const desired_rank = useSelector((d: any) => d.lol?.desired_rank);

  // Price
  const [price, setPrice] = useState(0);

  const handleChange = (event: any) => {
    switch (event.target.name) {
      case "applycode":
        setApplycode(event.target.value);
        break;
      default:
        break;
    }
  };

  const handleApply = () => {
    if (discount) return;
    if (applycode) {
      setDiscount(true);
      timeout = setTimeout(() => {
        setDiscount(false);
      }, 3000);
    }
  };

  const getOriginalPrice = () => {
    try {
      let coaching: any = { ..._coaching };
      return coaching[`${current_rank?.server?.type}`] * hours_match;
    } catch (error) {
      console.log(error);
      return 0;
    }
  };

  const calcTotalPrice = () => {
    let price = getOriginalPrice();

    // extra features

    if (current_rank?.champions?.length) {
      price += price * 0.2;
    }

    setPrice(Math.round(price * 100) / 100);
  };

  useEffect(() => {
    calcTotalPrice();
  }, [current_rank, hours_match]);

  const handleBuyBoost = () => {
    // decide user login or not
    dispatch(setLoginModal(true));
  };

  return (
    <div className="border border-indigo-800 p-4 rounded-lg">
      <div className="text-center mb-2">
        <span className="text-xl">Checkout</span>
        <p className="text-gray-500">Add extra options to your boost.</p>
      </div>
      <div className="space-y-4 py-4">
        <div className="flex justify-between ">
          <div className="flex gap-2 items-center">
            <span>Champion&Role</span>
            <span
              className={`${"text-green-500 border-green-500"} border rounded-xl  px-2 text-sm`}
            >
              Free
            </span>
          </div>
          <button
            className={`px-2 py-1 text-xs bg-indigo-800 rounded-xl hover:bg-indigo-500`}
            onClick={() => setisOpenChampionRoleModal(true)}
          >
            Pick
          </button>
        </div>
      </div>
      <div className="border-t border-b border-indigo-800 py-4 flex justify-center items-center gap-2">
        <FaTimesCircle />
        <span className="text-gray-500"> Completion Time: </span>
        <b>~1 day</b>
      </div>
      <div className="py-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="text-sm text-gray-500">
            Discount Code
          </label>
          <div className=" flex items-center gap-2 justify-between">
            <input
              className="px-3 py-1 w-full rounded-md text-sm bg-indigo-950"
              placeholder="Enter Code BOOST20 to get a 20% discount"
              name="applycode"
              onChange={handleChange}
            />
            <button
              className="px-3 py-1 bg-indigo-800 text-sm rounded-md"
              onClick={handleApply}
            >
              Apply
            </button>
          </div>
        </div>
        {discount && (
          <div
            className="mt-5 text-center py-4 px-6 border-green-600 border rounded-lg bg-gradient-to-b from-green-900 to-green-[#ddd] relative text-green-400"
            data-aos="fade-in"
          >
            -20% discount applied successfully 🎉
            <button
              className="absolute top-1/2 right-[10px] hover:text-green-300 -translate-x-1/2 -translate-y-1/2"
              onClick={() => setDiscount(false)}
            >
              <FaTimes />
            </button>
          </div>
        )}
      </div>
      <div className="pb-4">
        <div className="flex justify-between items-center">
          <label htmlFor="" className=" text-gray-500">
            Total Price
          </label>
          <span className="text-2xl font-bold">{price}€</span>
        </div>
        <button
          className={`w-full py-2 mt-4 flex items-center gap-4 justify-center rounded-lg ${classNames.btnClass}`}
          onClick={handleBuyBoost}
        >
          Buy Boost <FaArrowRight />
        </button>
      </div>
      {/* Champion & Role Modal */}
      <ModalChampionRole
        open={isOpenChampionRoleModal}
        setOpen={setisOpenChampionRoleModal}
        roles={current_rank?.roles}
        champions={current_rank?.champions}
        setRoles={(roles: any) => dispatch(setRoles(roles))}
        setChampions={(champions: any) => dispatch(setChampions(champions))}
      />
    </div>
  );
};
export default Checkout;
