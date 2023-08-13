import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";
import { useState } from "react";
import ErrorMessage from "./errorMessage";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import girlimg from "../../img/girl.png";
export default function Index() {
  const space = "flex flex-col";
  const input_tail =
    "font-light border-2 border-yellow-400 rounded-lg outline-none p-2";
  const click_move_after =
    "absolute translate-x-[0.74rem] -translate-y-[0.4rem] bg-white text-xs ease-in-out duration-200";
  const click_move_before =
    "absolute translate-x-2 translate-y-2 pointer-events-none";

  const [click1, setClick1] = useState(false);
  const [click2, setClick2] = useState(false);

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
      <div className="flex flex-row justify-end max-sm:hidden">
        <img src={girlimg} alt="girl" />
      </div>
      {/* Girl img */}
      {/* Login card start */}
      <div className=" bg-white flex justify-center px-20 py-10 my-16 rounded-3xl flex-col max-md:px-6 max-sm:-translate-y-12">
        {/* Login card top */}
        <div>
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
        <form className=" font-bold flex flex-col gap-3">
          <div className={space}>
            <div
              className={click1 ? click_move_after : click_move_before}
              onClick={() => {
                setClick1(true);
              }}
            >
              &nbsp;USER NAME *&nbsp;
            </div>
            <input
              type="text"
              name="firstName"
              id="firstName"
              onChange={() => {}}
              className={input_tail}
              onClick={() => {
                setClick1(true);
              }}
            />
            {false ? (
              <ErrorMessage errorMessage="must provide the firstName!"></ErrorMessage>
            ) : null}
          </div>
          <div className={space}>
            <div
              className={click2 ? click_move_after : click_move_before}
              onClick={() => {
                setClick2(true);
              }}
            >
              &nbsp;PASSWORD *&nbsp;
            </div>
            <input
              type="text"
              name="firstName"
              id="firstName"
              onChange={() => {}}
              className={input_tail}
              onClick={() => {
                setClick2(true);
              }}
            />
            {false ? (
              <ErrorMessage errorMessage="must provide the firstName!"></ErrorMessage>
            ) : null}
          </div>
          <div className="flex justify-center">
          <Link to="/signup">
          <button type="submit" className="bg-[#fdbe20] text-black rounded-3xl font-bold py-2 mt-3 px-32">
            LOGIN
          </button>
          </Link>
          </div>
        </form>
        {/* Form End */}
        {/* Login card bottom */}
        <div>
          <div className="flex justify-center pt-3">
            &nbsp;or signup with&nbsp;
          </div>
          <div className=" text-4xl flex justify-center gap-5 pt-2">
            <FaInstagramSquare /> <AiFillFacebook />
            <AiFillTwitterSquare />
          </div>

          <div className="flex justify-center pt-3">
            Not have an account? Signup
          </div>
          <div className="flex justify-center">
          <Link to="/signup">
          <button className="bg-black text-white rounded-3xl font-bold py-2 mt-3 px-32">
            SIGNUP
          </button>
          </Link>
          </div>
          <div className="flex justify-center pt-3">
            forgot password&nbsp;
            <Link to="/" className="text-blue-900 underline">
              reset
            </Link>
          </div>
          <div className="bg-black text-white text-sm flex justify-center rounded-full py-2 mt-4 font-medium">
            <Link to="/">continue with out login</Link>
          </div>
        </div>
      </div>
      {/* Login card bottom */}
      {/* Login card end */}
    </div>
  );
}
