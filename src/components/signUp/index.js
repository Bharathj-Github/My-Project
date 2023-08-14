import React,{useState} from "react";
import { Link } from "react-router-dom";
import girlimg from "../../img/girl.png";
import Logo from "../Logo/index";
import Toast from '../Toast';
import Form from "./Form"

export default function Index() {
  const [show, setShow] = useState(false);
  setTimeout(() => {
    setShow(false)
  }, 5000);
  return (
    <div className="h-screen w-screen bg-[#fdbe20] flex justify-center max-sm:block">
      {show ? <Toast message={'you have successfully registered.'} onCancel={(Boolean)=>{setShow(Boolean)}}></Toast>:null}
      <div className="lg:flex">
        {/* Logo */}
        <div>
          <Logo
            logosize={"text-9xl max-sm:text-6xl"}
            textsize={"text-xl max-sm:text-sm"}
          />
        </div>
        {/* Logo */}
        {/* Girl img */}
        <div className="flex flex-row justify-end max-sm:w-72 max-sm:relative max-sm:translate-x-28 max-sm:-translate-y-20">
          <img src={girlimg} alt="girl" />
        </div>
        {/* Girl img */}
      </div>
      {/* Signup card start */}
      <div className=" bg-white px-20 rounded-3xl shadow-inner shadow-gray-400 my-4 pt-8 max-[718.5px]:px-14 max-sm:mx-4 max-sm:-translate-y-40 max-sm:pb-10">
        {/* Top part start */}
        <div>
          <div className="flex justify-center font-extrabold text-2xl">
            SIGNUP
          </div>
          <p className=" text-xs flex justify-center pb-1">
            HELLO!! Please signup to continue
          </p>
          <div className="bg-black p-[0.1rem] rounded-full mb-3"></div>
        </div>
        {/* Top part end */}
        {/* Form part start */}
        <Form onSubmit={(Boolean)=>{setShow(Boolean)}}/>
        {/* Form part end */}
        {/* bottom part start */}
        <div>
          <div className="flex justify-center max-md:text-xs pt-2">
            &nbsp;Already have an account? login &nbsp;
          </div>
          <Link
            to="/login"
            className="flex bg-black rounded-3xl font-bold items-center justify-center mt-2 py-2"
          >
            <button className=" text-white">LOGIN</button>
          </Link>
        </div>
        {/* bottom part end */}
      </div>
      {/* Signup card End */}
    </div>
  );
}
