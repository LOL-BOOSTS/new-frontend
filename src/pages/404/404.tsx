import { useNavigate } from "react-router-dom";
import classNames from "../../consts/classNames";

const NotFound = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className="w-screen h-screen flex flex-col gap-8 justify-center items-center">
      <h1 className={`text-8xl font-bold text-center ${classNames.textMClass}`}>
        404
      </h1>
      <button className={`${classNames.btnClass}`} onClick={handleBack}>
        Back
      </button>
    </div>
  );
};
export default NotFound;
