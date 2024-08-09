import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./pages/home";
import NotFound from "./pages/404/404";
import Contact from "./pages/contact";
import Login from "./pages/login";
import Register from "./pages/register";
import FAQ from "./pages/faq";
import Terms from "./pages/terms";
import PrivacyPolicy from "./pages/privacy-policy";
import Blog from "./pages/blog";
import Hiring from "./pages/hiring";
import TrackOrder from "./pages/track-order";
import Imprint from "./pages/imprint";
// games
import GameLayout from "./pages/game/game_layout";
import LOL from "./pages/game/league-of-legends";
import LOLRankBoost from "./pages/game/league-of-legends/rank-boost";
import LOLWinBoost from "./pages/game/league-of-legends/win-boost";
import LOLPlacementBoost from "./pages/game/league-of-legends/placement-boost";
import LOLCoaching from "./pages/game/league-of-legends/coaching";
import Valorant from "./pages/game/valorant";
import ValRankBoost from "./pages/game/valorant/rank-boost";
import ValWinBoost from "./pages/game/valorant/win-boost";
import ValPlacementBoost from "./pages/game/valorant/placement-boost";
import TFT from "./pages/game/teamfight-tactics";
import TFTRankBoost from "./pages/game/teamfight-tactics/rank-boost";
import TFTWinBoost from "./pages/game/teamfight-tactics/win-boost";
import TFTPlacementBoost from "./pages/game/teamfight-tactics/placement-boost";
import AllBoosters from "./pages/game/boosters/list";
import SingleBooster from "./pages/game/boosters/detail";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />{" "}
          {/* This sets Home as the default child route */}
          <Route path="/" element={<GameLayout />}>
            <Route path="league-of-legends" element={<LOL />}>
              <Route path="rank-boost" element={<LOLRankBoost />} />
              <Route path="win-boost" element={<LOLWinBoost />} />
              <Route path="placement-boost" element={<LOLPlacementBoost />} />
              <Route path="coaching" element={<LOLCoaching />} />
              <Route index element={<Navigate to="rank-boost" replace />} />
            </Route>
            <Route path="valorant" element={<Valorant />}>
              <Route path="rank-boost" element={<ValRankBoost />} />
              <Route path="win-boost" element={<ValWinBoost />} />
              <Route path="placement-boost" element={<ValPlacementBoost />} />
              <Route index element={<Navigate to="rank-boost" replace />} />
            </Route>
            <Route path="team-fight-tactics" element={<TFT />}>
              <Route path="rank-boost" element={<TFTRankBoost />} />
              <Route path="win-boost" element={<TFTWinBoost />} />
              <Route path="placement-boost" element={<TFTPlacementBoost />} />
              <Route index element={<Navigate to="rank-boost" replace />} />
            </Route>
          </Route>
          <Route path="faq" element={<FAQ />} />
          <Route path="terms" element={<Terms />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="blog" element={<Blog />} />
          <Route path="hiring" element={<Hiring />} />
          <Route path="track-order" element={<TrackOrder />} />
          <Route path="imprint" element={<Imprint />} />
          {/* NEW PAGES */}
          <Route path="boosters" element={<AllBoosters />} />
          <Route path="boosters/:id" element={<SingleBooster />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
