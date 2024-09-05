import { NavLink, useParams } from "react-router-dom";

const BoostNavbar = (props: any) => {
  const { game } = props;
  const boostLinks = [
    { _id: 0, title: "Rank Boost", link: `/${game}/rank-boost` },
    { _id: 1, title: "Win Boost", link: `/${game}/win-boost` },
    {
      _id: 2,
      title: "Placements Boost",
      link: `/${game}/placement-boost`,
    },
    // { _id: 3, title: "Arena Boost", link: `/${game}/arena-boost` },
    // {
    //   _id: 4,
    //   title: "Normal Matches",
    //   link: `/${game}/normal-matches`,
    // },
    // { _id: 5, title: "Split 2 Boost", link: `/${game}/split2-boost` },
    // {
    //   _id: 6,
    //   title: "Champion Mastery",
    //   link: `/${game}/champion-mastery`,
    // },
    // {
    //   _id: 7,
    //   title: "Boost Packages",
    //   link: `/${game}/boost-packages`,
    // },
  ];
  return (
    <div className="flex flex-nowrap overflow-auto w-full gap-4">
      {boostLinks.map((d: any, index: number) => (
        <NavLink
          key={index}
          to={d.link}
          className={({ isActive }) =>
            `whitespace-nowrap px-4 py-2 rounded-md shadow-md hover:bg-indigo-800 ${
              isActive ? "bg-indigo-900" : ""
            }`
          }
        >
          {d.title}
        </NavLink>
      ))}
      {game == "league-of-legends" && (
        <>
          <NavLink
            to={`/${game}/coaching`}
            className={({ isActive }) =>
              `whitespace-nowrap px-4 py-2 rounded-md shadow-md hover:bg-indigo-800 ${
                isActive ? "bg-indigo-900" : ""
              }`
            }
          >
            Coaching
          </NavLink>
          <NavLink
            to={`/leveled-accounts`}
            className={({ isActive }) =>
              `whitespace-nowrap px-4 py-2 rounded-md shadow-md hover:bg-indigo-800 ${
                isActive ? "bg-indigo-900" : ""
              }`
            }
          >
            Account
          </NavLink>
        </>
      )}
    </div>
  );
};
export default BoostNavbar;
