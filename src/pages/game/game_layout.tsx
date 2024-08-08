import { Outlet } from "react-router-dom";
import ServiceBetter from "../home/servicebetter";
import FastSimple from "../home/fastsimple";

// DESCRIPTION CONTENT
import LOLDescription from "./league-of-legends/description";
import ValorantDescription from "./valorant/description";
import TFTDescription from "./teamfight-tactics/description";
import { useSelector } from "react-redux";
const GameLayout = () => {
  const game = useSelector((d: any) => d.global.game);
  return (
    <>
      <Outlet />
      <ServiceBetter />
      <FastSimple />
      {game === "lol" && <LOLDescription />}
      {game === "valorant" && <ValorantDescription />}
      {game === "tft" && <TFTDescription />}
    </>
  );
};

export default GameLayout;
