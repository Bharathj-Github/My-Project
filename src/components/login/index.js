import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import Logo from "../Logo";
import girlimg from "../../img/girl.png";
import Input from "./Input";
import Axios from "axios";
import bcrypt from 'bcryptjs'

export default function Index(props) {
  const navigate = useNavigate()
  const [click1, setClick1] = useState(false);
  const [click2, setClick2] = useState(false);

  const [errUser, setErrUser] = useState(false);
  const [errpassword, setErrPassword] = useState(false);

  const [error,setError]=useState(false);
  const [errorMsg,setErrorMsg] = useState();

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
    setErrPassword(false)
  };
  const submitHandler = async (event)=>{
    event.preventDefault();
    if(!password){
      setErrPassword(true)
    }
    if(!userName){
      setErrUser(true)
    }
    if(!userName || !password){
      setError(true);
      setErrorMsg("*Please Fill All The Mandatory Fields !")
    }else{
    await Axios.get(
      `https://my-server-node.onrender.com/api/registeredusers?username=${userName}`
    )
      .then((data) => {
        if(!data.data.data[0]){
          setError(true);
          setErrorMsg("User Name Does not exist");
        }else{
          if(bcrypt.compareSync(password,data.data.data[0].password)){
            setError(false);
            console.log("DONE");
            props.setloginHandler(true)
            navigate('/');
          }
          else{
            setError(true);
            setErrPassword(true)
            setErrorMsg('Incorrect Password');
          }
        }
      })
      .catch((e) => {
        console.log(e);
      });
    }
  }

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
        <form className=" font-bold flex flex-col gap-3" onSubmit={submitHandler}>
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
          {error ? <div className="text-red-600 text-sm flex justify-center">{errorMsg}</div>:null}
          <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#fdbe20] text-black rounded-3xl font-bold py-2 mt-3 px-32"
              >
                LOGIN
              </button>
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
          <Link to="/home">
            <div className="bg-black text-white text-sm flex justify-center rounded-full py-2 mt-4 font-medium">
              continue with out login
            </div>
          </Link>
        </div>
      </div>
      {/* Login card bottom */}
      {/* Login card end */}
    </div>
  );
}
