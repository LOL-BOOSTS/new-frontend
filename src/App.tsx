import "./App.css";
import Router from "./router";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ModalLogin from "./components/global/Modallogin";
import { useDispatch, useSelector } from "react-redux";
import { setCheckoutModal, setLoginModal } from "./redux/slice/globalSlice";
import ModalCheckOut from "./components/global/ModalCheckout";
function App() {
  const loginModal = useSelector((d: any) => d.global.loginModal);
  const checkoutModal = useSelector((d: any) => d.global.checkoutModal);
  const dispatch = useDispatch();
  return (
    <div className="bg-[#0f1a31] text-gray-100">
      <Router />
      {/* Global */}
      <ModalLogin
        open={loginModal}
        setOpen={(modal) => dispatch(setLoginModal(modal))}
      />
      <ModalCheckOut
        open={checkoutModal}
        setOpen={(modal: boolean) => dispatch(setCheckoutModal(modal))}
      />
    </div>
  );
}

export default App;
