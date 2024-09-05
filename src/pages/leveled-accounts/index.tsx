import classNames from "../../consts/classNames";
import data from "../../data/leveled-accounts.json";
import FastSimple from "../home/fastsimple";
import FAQ from "../home/faq";
import faqs from "../../data/faq.json";
import Players from "../home/players";
import champions from "../../data/championFull.json";
import ModalSkinSelect from "../../components/level-account/ModalSkinSelect";
import { useEffect, useState } from "react";
import {
  FaAngleRight,
  FaCheckCircle,
  FaFire,
  FaGem,
  FaGlobe,
  FaLevelUpAlt,
  FaMoneyBill,
  FaRegStar,
  FaSearch,
  FaTimes,
  FaTrophy,
  FaUser,
} from "react-icons/fa";
import SvgColor from "../../components/custom/SvgColor";
const LeveledAccounts = () => {
  const [order, setOrder] = useState<any>(null);
  const headData = [
    {
      _id: 0,
      title: "Never Get Banned",
      description:
        "Our accounts are leveled by real humans, this means that they will never get banned",
    },
    {
      _id: 1,
      title: "Premium LP gains",
      description:
        "Enjoy High LP Gains on our highest MMR accounts and climb between ranks a lot faster",
    },
    {
      _id: 2,
      title: "Recovery Info",
      description:
        "If you ever lose access to the account, you can recover it. (On Request)",
    },
  ];
  const [servers, setServers] = useState<any[]>();
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState(null);
  const [championData, setChampionData] = useState<any>(null);
  const [applycode, setApplycode] = useState(0);
  const [isSmurf, setIsSmurf] = useState(false);
  // ORDER DATA
  // Default selections
  const [server, setServer] = useState(data?.servers[0]);
  const [MMR, setMMR] = useState(data?.MMR[0]);
  const [level, setLevel] = useState(data?.levels[0]);
  const [skin, setSkin] = useState<any>(null);
  const [price, setPrice] = useState(7.9); // Default price
  const [discount, setDiscount] = useState(false);

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
    }
  };
  useEffect(() => {
    
  }, [])

  // Update price based on MMR and level selection
  useEffect(() => {
    let basePrice = 7.9; // Smurf price
    let isSmurfSelected = false;
    if (level?.level === "Handlevel") basePrice += 20;
    if (level?.level === "SMURF") {
      basePrice = 7.9;
      isSmurfSelected = true;
      setMMR(data?.MMR[0]);
    } else {
      if (MMR?.title === "2300") basePrice += 30;
      if (MMR?.title === "Fresh") basePrice += 20;
      else if (MMR?.title === "2400") basePrice += 40;
      else if (MMR?.title === "2500") basePrice += 50;
    }

    // Add extra skins price
    if (skin === "Skin 1350RP") basePrice += 1;
    if (skin === "Skin 1820RP") basePrice += 2;
    if (skin === "Skin 3250RP") basePrice += 5;
    if (discount) {
      basePrice -= basePrice * 0.2;
    }
    setIsSmurf(isSmurfSelected);
    setPrice(basePrice);
  }, [MMR, level, skin, discount]);

  useEffect(() => {
    setChampionData(champions);
  }, [champions]);

  return (
    <>
      <div className={`${classNames.containerClass} mt-10 lg:mt-20`}>
        <div className="mr-auto max-w-screen-sm">
          <h1 className="text-3xl md:text-5xl font-bold">
            <span className="text-indigo-500">Handleveled </span>
            LOL Smurf Accounts
          </h1>
          <div className="mt-2 leading-loose">
            Are you considering buying or starting a new main account in League
            of Legends? Our handleveled smurf accounts are the ideal choice.
            Each account is carefully leveled by our dedicated team, ensuring a
            0% ban rate and is fully prepared for immediate ranked play.
          </div>
          <div className="mt-4">
            <a href="#" className={`${classNames.btnClass}`}>
              Buy Now
            </a>
          </div>
        </div>
        <div className="mt-12 lg:mt-24 grid lg:grid-cols-3 gap-4 lg:gap-12">
          {headData.map((d: any, index: number) => (
            <div key={index} className="space-y-2">
              <h2 className="text-xl lg:text-2xl font-bold">{d.title}</h2>
              <p>{d.description}</p>
              <div className="w-36 h-3 rounded-lg bg-gradient-to-r from-fuchsia-600 to-indigo-500"></div>
            </div>
          ))}
        </div>
        <div className="flex max-lg:flex-col justify-between items-start gap-12 mt-12 lg:mt-24">
          <div className="">
            <div className="space-y-4">
              <label htmlFor="" className="text-xl">
                Select Server
              </label>
              <div className="flex justify-start flex-wrap items-center gap-2">
                {data?.servers?.map((d, index) => (
                  <button
                    key={index}
                    className={`${classNames.btnClass2} flex justify-center gap-2 items-center  ${
                      server === d ? "!bg-indigo-900" : ""
                    }`}
                    onClick={() => setServer(d)}
                  >
                    <SvgColor src={`/images/icon/skin/${d.name.toLowerCase()}.svg`} />
                    {d.name}
                  </button>
                ))}
              </div>
            </div>
            {level.level !== "SMURF" && (
              <div className="space-y-4 mt-4">
                <label htmlFor="" className="text-xl">
                  MMR
                </label>
                <div className="flex justify-start flex-wrap items-center gap-2">
                  {data?.MMR?.map((d, index) => (
                    <button
                      key={index}
                      className={`${classNames.btnClass2} ${
                        MMR === d ? "!bg-indigo-900" : ""
                      }`}
                      onClick={() => setMMR(d)}
                    >
                      {d.title}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-4 mt-4">
              <label htmlFor="" className="text-xl">
                Level
              </label>
              <div className="flex justify-start flex-wrap items-center gap-2">
                {data?.levels?.map((d, index) => (
                  <button
                    key={index}
                    className={`${classNames.btnClass2} ${
                      level === d ? "!bg-indigo-900" : ""
                    }`}
                    onClick={() => setLevel(d)}
                  >
                    {d.level}
                  </button>
                ))}
              </div>
            </div>
            {/* <div className="mt-8 lg:mt-16 grid gap-x-8 gap-y-4 md:grid-cols-2 lg:grid-cols-4">
            {data?.accounts?.map((d: any, index: number) => (
              <AccountCard {...d} key={index} />
            ))}
          </div> */}
            <div className="space-y-4 mt-4">
              <label htmlFor="" className="text-xl block">
                Select Skin
              </label>
              <div
                className="inline-flex justify-between items-center gap-2 border-b-2 pb-1 cursor-pointer border-indigo-500"
                onClick={() => setIsOpen(true)}
              >
                <span>Show All Skins</span> <FaSearch />
              </div>
              <div className="flex flex-wrap justify-start items-center gap-4">
                {championData &&
                  Object.keys(championData?.data)
                    .slice(0, 10)
                    ?.map((key: any, index: number) => (
                      <img
                        src={`/images/skin/${
                          championData?.data[`${key}`]?.skins[1]["id"]
                        }.jpg`}
                        alt={key}
                        key={index}
                        className="w-20 h-20 rounded-full border-4 border-indigo-500 cursor-pointer"
                        onClick={() => {
                          setIsOpen(true);
                          setCategory(key);
                        }}
                      />
                    ))}
              </div>
            </div>
          </div>
          {/* CHECKOUT SECTION */}
          <div className="border border-indigo-500 overflow-clip rounded-2xl lg:w-[400px] mt-4">
            <div className="bg-indigo-900 p-4 flex justify-start items-center gap-2 text-xl">
              <FaAngleRight /> ORDER DETAILS
            </div>
            <div className="p-4">
              <ul className="space-y-4">
                <li className="flex justify-start items-center gap-4">
                  <FaMoneyBill className="text-xl text-indigo-500" /> Price:{" "}
                  {price.toFixed(2)} EUR
                </li>
                <li className="flex justify-start items-center gap-3">
                  <FaGem className="text-indigo-500 text-xl" /> BE:{" "}
                  {order?.beTitle || "40,000 +"}
                </li>
                <li className="flex justify-start items-center gap-3">
                  <FaGlobe className="text-indigo-500 text-xl" /> Server:{" "}
                  {server?.name || "NA"}
                </li>
                <li className="flex justify-start items-center gap-3">
                  <FaTrophy className="text-indigo-500 text-xl" /> MMR:{" "}
                  {MMR?.title || "2300"}
                </li>
                <li className="flex justify-start items-center gap-3">
                  <FaLevelUpAlt className="text-indigo-500 text-xl" />{" "}
                  {level?.level ||
                    "Handlevel                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 "}
                </li>
                <li className="flex justify-start items-center gap-3">
                  <FaFire className="text-indigo-500 text-xl" />{" "}
                  {isSmurf ? "14 Days Warranty" : "Lifetime Warranty"}
                </li>
                <li className="flex justify-start items-center gap-3">
                  <FaCheckCircle className="text-indigo-500 text-xl" />{" "}
                  {false ? "Verified" : "Unverified"}
                </li>
                <li className="flex justify-start items-center gap-3">
                  <FaUser className="text-indigo-500 text-xl" />
                  Skin:
                  {skin ? skin?.name : ""}
                </li>
              </ul>
              {!discount ? (
                <div className="mt-4 flex justify-between gap-2">
                  <input
                    className={`${classNames.inputClass} !border !border-indigo-500`}
                    name="applycode"
                    placeholder="Coupon Code"
                    onChange={handleChange}
                  />
                  <button
                    className={`${classNames.btnClass2}`}
                    onClick={handleApply}
                  >
                    APPLY
                  </button>
                </div>
              ) : (
                <div className="mt-5 text-center py-4 px-6 border-green-600 border rounded-lg bg-gradient-to-b from-green-900 to-green-[#ddd] relative text-green-400">
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
            <div className="p-2">
              <button className={`${classNames.btnClass} !w-full`}>
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      </div>
      <FastSimple />
      <FAQ faqs={faqs} />
      <Players />
      <div className={`mt-10 lg:mt-20 ${classNames.containerClass}`}>
        <div className="space-y-4">
          <h4 className="text-2xl">What Are Handleveled LoL Accounts?</h4>
          <p>
            Handleveled League of Legends accounts are carefully advanced from
            level 1 to level 30 by our skilled players, ensuring they are
            prepared for immediate ranked play with fresh MMR. These accounts
            are leveled manually, avoiding the use of bots, which enhances their
            security and maintains their integrity. When you purchase one of
            these accounts, you can confidently dive straight into competitive
            ranked matches, knowing your account is both safe and primed for
            optimal performance, backed by a 0% ban rate guarantee.
          </p>
        </div>
        <div className="mt-12 space-y-4">
          <h4 className="text-2xl">
            Advantages of our League of Legends Handleveled Accounts
          </h4>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-1">
              <h6 className="text-xl">
                Lifetime Warranty on All LoL Handleveled Smurfs
              </h6>
              <p>
                We value our customers&apos; satisfaction and strive to build
                long-term relationships with them. That&apos;s why we are proud
                to offer a Lifetime Warranty on all of our League of Legends
                Handleveled Smurf accounts. This means that if there are any
                issues with your account, we will work with you to resolve them
                quickly and efficiently. We understand that purchasing a LoL
                Smurf account can be a significant investment, and we want to
                ensure that you feel confident and secure in your decision to
                choose us as your provider. With our Lifetime Warranty, you can
                trust that you are making a wise investment in your gaming
                experience. write it differently and better
              </p>
            </div>
            <div className="space-y-1">
              <h6 className="text-xl">Premium Quality Accounts</h6>
              <p>
                Our accounts are meticulously leveled by a team of professional
                players who adhere to strict guidelines to ensure the highest
                standards of safety and security. These guidelines include not
                engaging in in-game chat and maintaining both a strong KDA
                (Kill/Death/Assist ratio) and a positive game history. These
                measures are taken to preserve the integrity of your
                account&apos;s MMR (Matchmaking Rating), providing a solid
                foundation for your competitive play. This disciplined approach
                guarantees that the accounts you receive from us are not only
                safe but also primed for success in the gaming arena.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SELECT SKIN MODAL */}
      <ModalSkinSelect
        isOpen={isOpen}
        setOpen={setIsOpen}
        category={category}
        setCategory={setCategory}
        skin={skin}
        setSkin={setSkin}
      />
    </>
  );
};
export default LeveledAccounts;
