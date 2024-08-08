import "./App.css";
import Router from "./router";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ModalLogin from "./components/global/Modallogin";
import { useDispatch, useSelector } from "react-redux";
import { setLoginModal } from "./redux/slice/globalSlice";
function App() {
  const loginModal = useSelector((d: any) => d.global.loginModal);
  const dispatch = useDispatch();
  return (
    <div className="bg-[#0f1a31] text-gray-100">
      <Router />
      <ModalLogin
        open={loginModal}
        setOpen={(modal) => dispatch(setLoginModal(modal))}
      />
    </div>
  );
}

export default App;
