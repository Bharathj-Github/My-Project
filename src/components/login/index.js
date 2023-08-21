import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../Logo";
import girlimg from "../../img/girl.png";
import Input from "./Input";
import axios from "axios";

export default function Index(props) {
  const navigate = useNavigate();
  const [click1, setClick1] = useState(false);
  const [click2, setClick2] = useState(false);

  const [errUser, setErrUser] = useState(false);
  const [errpassword, setErrPassword] = useState(false);

  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState();

  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  const userNameHandler = (event) => {
    setUserName(event.target.value);
    setErrUser(false);
  };
  const passwordHandler = (event) => {
    if (!userName) {
      setErrUser(true);
    }
    setPassword(event.target.value);
    setErrPassword(false);
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    if (!userName) {
      setErrUser(true);
    }
    if (!password) {
      setErrPassword(true);
    }
    if (userName && password) {
      axios
        .post("https://my-server-node.onrender.com/login", {
          username: userName,
          password,
        })
        .then((data) => {
          setError(true);
          setErrorMsg(data.data.message);
          console.log(data.data);
          if (data.data.message === "success") {
            navigate("/");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="h-screen bg-[#fdbe20] flex justify-center max-[1000px]:block max-md:p-3 ">
      {/* Logo */}
      <div className="flex justify-center">
        <Logo
          logosize={"text-9xl max-sm:text-9xl"}
          textsize={"text-xl max-sm:text-xl"}
        />
      </div>
      {/* Logo */}
      {/* Girl img */}
      <div className="flex flex-row justify-end max-sm:hidden sm:max-lg:hidden">
        <img src={girlimg} alt="girl" />
      </div>
      {/* Girl img */}

      {/* Login card start */}
      <div className=" bg-white flex px-20 my-9 rounded-3xl flex-col max-md:px-6 max-sm:py-8 justify-center">
        <div className="">
          {/* Login card top */}
          <div className="pb-3">
            <div className="flex justify-center font-extrabold text-2xl">
              LOGIN
            </div>
            <p className=" text-xs flex justify-center pb-1">
              HELLO!! Please Login to continue
            </p>
            <div className="bg-black p-[0.1rem] rounded-full mb-3"></div>
          </div>
          {/* Login card top */}
          {/* Form Start */}
          <form className=" font-bold flex flex-col" onSubmit={submitHandler}>
            <div className="flex flex-col gap-3">
              <Input
                type={"text"}
                id={"userName"}
                lable={"USER NAME *"}
                click={click1}
                setclick={(Boolean) => {
                  setClick1(Boolean);
                }}
                handler={userNameHandler}
                err={errUser}
                errmsg={"UserName must be provided!"}
              />
              <Input
                type={"Password"}
                id={"Password"}
                lable={"PASSWORD *"}
                click={click2}
                setclick={(Boolean) => {
                  setClick2(Boolean);
                }}
                handler={passwordHandler}
                err={errpassword}
                errmsg={"Password must be provided!"}
              />
            </div>

            {error ? (
              <div className="text-red-600 text-sm flex justify-center pt-3 font-medium">
                {errorMsg}
              </div>
            ) : null}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="bg-[#fdbe20] text-black rounded-3xl font-bold py-2 px-32"
              >
                LOGIN
              </button>
            </div>
          </form>
          {/* Form End */}
          {/* Login card bottom */}
          <div className="flex flex-col gap-2 justify-center">
            <div className="flex justify-center">
              &nbsp;or signup with&nbsp;
            </div>
            <div className="flex justify-center">
              <button>
                <div className="text-3xl flex border-2 border-black px-3 rounded-3xl gap-2 items-center">
                  <FcGoogle /> <p className="text-base">GOOGLE</p>
                </div>
              </button>
            </div>
            <div className="flex justify-center">
              Not have an account? Signup
            </div>
            <div className="flex justify-center">
              <Link to="/signup">
                <button className="bg-black text-white rounded-3xl font-bold py-2 flex px-28">
                  SIGNUP
                </button>
              </Link>
            </div>
            <div className="flex justify-center">
              forgot password&nbsp;
              <Link to="/" className="text-blue-900 underline">
                reset
              </Link>
            </div>
            <div className="flex justify-center">
              <Link to="/">
                <div className="bg-black text-white text-sm justify-center rounded-full py-2 font-medium px-20">
                  continue with out login
                </div>
              </Link>
            </div>
          </div>
          {/* Login card bottom */}
        </div>
      </div>
      {/* Login card end */}
    </div>
  );
}
