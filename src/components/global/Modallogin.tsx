import { Modal } from "flowbite-react";
import themes from "../../consts/themes";
import { ModalLoginProps } from "../../interface";
import { useState } from "react";
import classNames from "../../consts/classNames";

const ModalLogin = (props: ModalLoginProps) => {
  const { open, setOpen } = props;
  // value to swtch login, register and forget password

  const handleLogin = () => {};
  const handleRegister = () => {};
  const handleResetPassword = () => {};

  const forms = [
    {
      _id: 0,
      title: "Login",
      fields: [
        {
          _id: 0,
          title: "Email",
          type: "email",
        },
        {
          _id: 1,
          title: "Password",
          type: "password",
        },
      ],
      action: handleLogin,
    },
    {
      _id: 1,
      title: "Register",
      fields: [
        {
          _id: 0,
          title: "Email",
          type: "email",
        },
        {
          _id: 1,
          title: "Password",
          type: "password",
        },
        {
          _id: 3,
          title: "Name",
          type: "text",
        },
      ],
      action: handleRegister,
    },
    {
      _id: 2,
      title: "Reset Password",
      fields: [
        {
          _id: 0,
          title: "Email",
          type: "email",
        },
      ],
      action: handleResetPassword,
    },
  ];
  const [form, setForm] = useState<any>(forms[0]);
  return (
    <>
      <Modal
        show={open}
        theme={themes.modalTheme}
        onClose={() => setOpen(false)}
      >
        <Modal.Header>{form?.title}</Modal.Header>
        <Modal.Body>
          <div className="space-y-3">
            {Array.isArray(form?.fields) &&
              form.fields?.map((d: any, index: number) => (
                <div className="space-y-2" key={index}>
                  <label htmlFor={d.title}>{d.title}</label>
                  <input
                    type={d.type}
                    name={d.title}
                    className={classNames.inputClass}
                    placeholder={d.title}
                  />
                </div>
              ))}
            {form._id === 0 && (
              <div
                className={`${classNames.hoverClass} mt-2 text-sm text-indigo-500 cursor-pointer`}
                onClick={() => setForm(forms[2])}
              >
                Forget Your Password?
              </div>
            )}
          </div>
          <div className="mt-6">
            <button
              className={`${classNames.btnClass2} w-full`}
              onClick={form.action}
            >
              {form.title}
            </button>
          </div>
          {/* LOGIN */}
          {form._id === 0 && (
            <div className={`mt-6 text-sm`}>
              Don't have account{" "}
              <span
                className={`${classNames.hoverClass} text-indigo-500 cursor-pointer`}
                onClick={() => setForm(forms[1])}
              >
                Register
              </span>
            </div>
          )}
          {/* REGISTER */}
          {form._id === 1 && (
            <div className={`mt-6 text-sm`}>
              You already have an account{" "}
              <span
                className={`${classNames.hoverClass} text-indigo-500 cursor-pointer`}
                onClick={() => setForm(forms[0])}
              >
                Login
              </span>
            </div>
          )}
          {/* FORGET PASSWORD */}
          {form._id === 2 && (
            <div className="mt-6 text-sm">
              <span
                className={`${classNames.hoverClass} text-indigo-500 cursor-pointer`}
                onClick={() => setForm(forms[0])}
              >
                Back to Login
              </span>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};
export default ModalLogin;
