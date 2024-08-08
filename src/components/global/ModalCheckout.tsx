import { Modal } from "flowbite-react";
import themes from "../../consts/themes";
import { useState } from "react";
import classNames from "../../consts/classNames";

const ModalCheckOut = (props: any) => {
  const { open, setOpen } = props;
  const [paymethod, setPaymethod] = useState(1);
  // value to swtch login, register and forget password

  const inputFields = [
    {
      _id: 0,
      name: "ingamename",
      label: "Ingame Name",
      type: "text",
    },
    {
      _id: 1,
      name: "username",
      label: "Username",
      type: "text",
    },
    {
      _id: 2,
      name: "password",
      label: "Password",
      type: "password",
    },
    {
      _id: 3,
      name: "email",
      label: "Email",
      type: "email",
    },
    {
      _id: 4,
      name: "discord",
      label: "Discord",
      type: "text",
    },
  ];

  const txtFields = [
    {
      _id: 0,
      name: "notes",
      label: "Notes",
    },
  ];

  const handleCheckout = () => {};
  return (
    <>
      <Modal
        show={open}
        size="5xl"
        theme={themes.modalTheme}
        onClose={() => setOpen(false)}
      >
        <Modal.Header>CheckOut</Modal.Header>
        <Modal.Body className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div
              className={`px-5 py-2 rounded-lg  hover:bg-indigo-500 cursor-pointer ${
                paymethod == 1 ? "bg-indigo-500" : "bg-indigo-900"
              }`}
              onClick={() => setPaymethod(1)}
            >
              <img
                src="/images/checkout/stripe.png"
                alt="stripe"
                className="w-full"
              />
            </div>
            <div
              className={`px-5 py-2 rounded-lg  hover:bg-indigo-500 cursor-pointer ${
                paymethod == 2 ? "bg-indigo-500" : "bg-indigo-900"
              }`}
              onClick={() => setPaymethod(2)}
            >
              <img
                src="/images/checkout/crypto.png"
                alt="crypto"
                className="w-full"
              />
            </div>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              {inputFields.map((d: any, index: number) => (
                <div key={index} className="space-y-2">
                  {/* <label htmlFor={d.name}>{d.label}</label> */}
                  <input
                    type={d.type}
                    className={`${classNames.inputClass} border-indigo-500`}
                    placeholder={d.label}
                  />
                </div>
              ))}
            </div>
            <div className="space-y-2">
              {txtFields.map((d: any, index: number) => (
                <div key={index} className="space-y-2">
                  {/* <label htmlFor={d.name}>{d.label}</label> */}
                  <textarea
                    className={`${classNames.textareaClas} border-indigo-500`}
                    placeholder={d.label}
                  />
                </div>
              ))}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className={`${classNames.btnClass2}`}
            onClick={handleCheckout}
          >
            Checkout
          </button>
          <button
            className={`${classNames.btnClass2} bg-indigo-900`}
            onClick={() => setOpen(false)}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalCheckOut;
