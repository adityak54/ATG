import React from "react";
import "./SignupModal.css";
import { RxCross1 } from "react-icons/rx";
import singbanner from "../../assets/post/signinbanner.png";
import { BsFacebook, BsGoogle } from "react-icons/bs";

const SignupModal = ({ setOpen, open, setOpen2 }) => {
  return (
    <div className={`main-container ${open ? "d-block" : "d-none"}`}>
      <div className={`signup-modal`}>
        <p onClick={() => setOpen(false)} className="text-end">
          <RxCross1 size={25} className="close" />
        </p>
        <div className="modalbody">
          <p className="title">
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </p>
          <div className="form-div d-flex justify-content-between">
            <div className="w-100 w-lg-50 main-form">
              <p>Create Account</p>

              <input
                className="w-50 p-2"
                type="text"
                placeholder="First Name"
              ></input>
              <input
                className="w-50 p-2"
                type="text"
                placeholder="Last Name"
              ></input>
              <input
                className="w-100 p-2"
                type="text"
                placeholder="Email"
              ></input>
              <input
                className="w-100 p-2"
                type="text"
                placeholder="Password"
              ></input>
              <input
                className="w-100 p-2"
                type="text"
                placeholder="Confirm Password"
              ></input>

              <div className="d-flex justify-content-between align-items-center">
                <button className="submit">Create Account</button>
                <p className="fp text-end d-block d-lg-none mb-0">
                  <span
                    className="fs-6"
                    onClick={() => {
                      setOpen2(true);
                      setOpen(false);
                    }}
                  >
                    Or,Sign In
                  </span>
                </p>
              </div>
              <button className="facebook w-100">
                <BsFacebook className="me-2" />
                Sign Up with Facebook
              </button>
              <button className="google w-100">
                <BsGoogle className="me-2" />
                Sign Up with Google
              </button>
            </div>
            <div className="w-lg-50 img-div d-none d-lg-block">
              <p className="fp text-end">
                Already have an Account?
                <span
                  className="sing-color"
                  onClick={() => {
                    setOpen2(true);
                    setOpen(false);
                  }}
                >
                  Sign In
                </span>
              </p>
              <img className="w-100" src={singbanner} alt="" />
              <p className="last-p text-center">
                By signing up, you agree to our Terms & conditions, Privacy
                policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
