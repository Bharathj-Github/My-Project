import React, { useState } from "react";
import Axios from "axios";
import ErrorMessage from "./errorMessage";
import { Link } from "react-router-dom";
import girlimg from "../../img/girl.png";
import Logo from "../Logo/index";

export default function Index() {
  const space = "flex flex-col";
  const input_css =
    "font-light border-2 border-yellow-400 rounded-lg outline-none p-2 max-[718.5px]:text-base";
  const click_move_after =
    "absolute translate-x-[0.74rem] -translate-y-[0.4rem] bg-white text-xs ease-in-out duration-200 ";
  const click_move_before =
    "absolute translate-x-2 translate-y-2 pointer-events-none max-[718.5px]:text-base";

  //used to block the char for number
  const blockInvalidChar = (e) =>
    ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();

  //for setting the entered fields
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [userName, setUserName] = useState();
  const [emailId, setEmailId] = useState();
  const [phoneNo, setPhoneNo] = useState();
  const [password, setPassword] = useState();
  const [cpassword, setCPassword] = useState();
  const [error, setError] = useState();

  //for setting the error for not entered fields
  const [errFirst, setErrFirst] = useState(Boolean);
  const [errLast, setErrLast] = useState(Boolean);
  const [errUser, setErrUser] = useState(Boolean);
  const [errEmail, setErrEmail] = useState(Boolean);
  const [errPhone, setErrPhone] = useState(Boolean);
  const [errpassword, setErrPassword] = useState(Boolean);
  const [errCpassword, setErrCPassword] = useState(Boolean);

  //used to modify the animation fields
  const [click1, setClick1] = useState(false);
  const [click2, setClick2] = useState(false);
  const [click3, setClick3] = useState(false);
  const [click4, setClick4] = useState(false);
  const [click5, setClick5] = useState(false);
  const [click6, setClick6] = useState(false);
  const [click7, setClick7] = useState(false);

  //to handle submit form
  const handleSubmit = (event) => {
    event.preventDefault();
    //if all the fields are filled go in and check for password
    if (
      userName !== undefined &&
      firstName !== undefined &&
      lastName !== undefined &&
      emailId !== undefined &&
      phoneNo !== undefined
    ) {
      //if password is also correct post to server
      if (cpassword === password) {
        Axios.post("http://localhost:4000/users", {
          firstName: firstName,
          lastName: lastName,
          userName: userName,
          emailId: emailId,
          phoneNo: phoneNo,
          password: password,
        })
          .then(() => console.log("done"))
          .catch((e) => console.log("some"));
        setError("done" + password);
      } else {
        setError("Password doesn't match");
      }
    } else {
      if (firstName === undefined) {
        setErrFirst(true);
      }
      if (lastName === undefined) {
        setErrLast(true);
      }
      if (userName === undefined) {
        setErrUser(true);
      }
      if (emailId === undefined) {
        setErrEmail(true);
      }
      if (phoneNo === undefined) {
        setErrPhone(true);
      }
      if (password === undefined) {
        setErrPassword(true);
      }
      setError("*Please Fill All The Mandatory Fields !");
    }
  };
  //events that set the fields for user entry and the error fields which are undifined
  let firstNameHandler = (event) => {
    setFirstName(event.target.value);
    setErrFirst(false);
  };
  let lastNameHandler = (event) => {
    if (!firstName) {
      if (firstName === undefined) {
        setErrFirst(true);
      }
    }
    setLastName(event.target.value);
    setErrLast(false);
  };
  let userNameHandler = (event) => {
    if (!firstName || !lastName) {
      if (firstName === undefined) {
        setErrFirst(true);
      }
      if (lastName === undefined) {
        setErrLast(true);
      }
    }
    setUserName(event.target.value);
    setErrUser(false);
  };
  let emailIdHandler = (event) => {
    if (!firstName || !lastName || !userName) {
      if (firstName === undefined) {
        setErrFirst(true);
      }
      if (lastName === undefined) {
        setErrLast(true);
      }
      if (userName === undefined) {
        setErrUser(true);
      }
    }
    setEmailId(event.target.value);
    setErrEmail(false);
  };
  let phoneNoHandler = (event) => {
    if (event.target.value.length > 10) {
      event.target.value = event.target.value.slice(0, 10);
    }
    if (!firstName || !lastName || !userName || !emailId) {
      if (firstName === undefined) {
        setErrFirst(true);
      }
      if (lastName === undefined) {
        setErrLast(true);
      }
      if (userName === undefined) {
        setErrUser(true);
      }
      if (emailId === undefined) {
        setErrEmail(true);
      }
    }
    if (event.target.value.length === 10) {
      setPhoneNo(event.target.value);
    } else {
      console.log("object");
    }
    setErrPhone(false);
  };
  let passwordHandler = (event) => {
    if (!firstName || !lastName || !userName || !emailId || !phoneNo) {
      if (firstName === undefined) {
        setErrFirst(true);
      }
      if (lastName === undefined) {
        setErrLast(true);
      }
      if (userName === undefined) {
        setErrUser(true);
      }
      if (emailId === undefined) {
        setErrEmail(true);
      }
      if (phoneNo === undefined) {
        setErrPhone(true);
      }
    }
    setPassword(event.target.value);
    setErrPassword(false);
  };
  let cpasswordHandler = (event) => {
    if (
      !firstName ||
      !lastName ||
      !userName ||
      !emailId ||
      !phoneNo ||
      !password
    ) {
      if (firstName === undefined) {
        setErrFirst(true);
      }
      if (lastName === undefined) {
        setErrLast(true);
      }
      if (userName === undefined) {
        setErrUser(true);
      }
      if (emailId === undefined) {
        setErrEmail(true);
      }
      if (phoneNo === undefined) {
        setErrPhone(true);
      }
      if (password === undefined) {
        setErrPassword(true);
      }
    }
    setCPassword(event.target.value);
    setErrCPassword(false);
  };

  return (
    <div className="h-screen w-screen bg-[#fdbe20] flex justify-center max-sm:block">
      <div className="lg:flex">
      {/* Logo */}
      <div>
        <Logo logosize={"text-9xl max-sm:text-6xl"} textsize={"text-xl max-sm:text-sm"} />
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
        <form
          onSubmit={handleSubmit}
          className=" font-bold flex flex-col gap-2"
        >
          {/* First name and last name */}
          <div className="flex gap-3 max-md:contents">
            <div className={space}>
              <div
                className={click1 ? click_move_after : click_move_before}
                onClick={() => {
                  setClick1(true);
                }}
              >
                &nbsp;FIRST NAME *&nbsp;
              </div>
              <input
                type="text"
                name="firstName"
                id="firstName"
                onChange={firstNameHandler}
                className={input_css}
                onClick={() => {
                  setClick1(true);
                }}
              />
              {errFirst ? (
                <ErrorMessage errorMessage="FirstName must be provided!"></ErrorMessage>
              ) : null}
            </div>
            <div className={space}>
              <div
                className={click2 ? click_move_after : click_move_before}
                onClick={() => {
                  setClick2(true);
                }}
              >
                &nbsp;LAST NAME *&nbsp;
              </div>
              <input
                type="text"
                name="lastName"
                id="lastName"
                className={input_css}
                onChange={lastNameHandler}
                onClick={() => {
                  setClick2(true);
                }}
              />
              {errLast ? (
                <ErrorMessage errorMessage="LastName must be provided!"></ErrorMessage>
              ) : null}
            </div>
          </div>
          {/* First name and last name */}
          <div className={space}>
            <div
              className={click3 ? click_move_after : click_move_before}
              onClick={() => {
                setClick3(true);
              }}
            >
              &nbsp;USER NAME *&nbsp;
            </div>
            <input
              type="text"
              name="userName"
              id="userName"
              className={input_css}
              onChange={userNameHandler}
              onClick={() => {
                setClick3(true);
              }}
            />
            {errUser ? (
              <ErrorMessage errorMessage="UserName must be provided!"></ErrorMessage>
            ) : null}
          </div>
          <div className={space}>
            <div
              className={click4 ? click_move_after : click_move_before}
              onClick={() => {
                setClick4(true);
              }}
            >
              &nbsp;EMAILID *&nbsp;
            </div>
            <input
              type="email"
              name="emailId"
              id="emailId"
              className={input_css}
              onChange={emailIdHandler}
              onClick={() => {
                setClick4(true);
              }}
            />
            {errEmail ? (
              <ErrorMessage errorMessage="Email must be provided!"></ErrorMessage>
            ) : null}
          </div>
          <div className={space}>
            <div
              className={click5 ? click_move_after : click_move_before}
              onClick={() => {
                setClick5(true);
              }}
            >
              &nbsp;PHONE NUMBER *&nbsp;
            </div>
            <input
              type="number"
              onKeyDown={blockInvalidChar}
              name="phoneNo"
              id="phoneNo"
              className={
                input_css +
                " [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
              }
              onChange={phoneNoHandler}
              onClick={() => {
                setClick5(true);
              }}
            />
            {errPhone ? (
              <ErrorMessage errorMessage="Phone number must be provided!"></ErrorMessage>
            ) : null}
          </div>
          <div className={space}>
            <div
              className={click6 ? click_move_after : click_move_before}
              onClick={() => {
                setClick6(true);
              }}
            >
              &nbsp;PASSWORD *&nbsp;
            </div>
            <input
              type="password"
              name="password"
              id="password"
              className={input_css}
              onChange={passwordHandler}
              onClick={() => {
                setClick6(true);
              }}
            />
            {errpassword ? (
              <ErrorMessage errorMessage="Password must be provided!"></ErrorMessage>
            ) : null}
          </div>
          <div className={space}>
            <div
              className={click7 ? click_move_after : click_move_before}
              onClick={() => {
                setClick7(true);
              }}
            >
              &nbsp;CONFIRM PASSWORD *&nbsp;
            </div>
            <input
              type="password"
              name="cPassword"
              id="cPassword"
              className={input_css}
              onChange={cpasswordHandler}
              onClick={() => {
                setClick7(true);
              }}
            />
            {errCpassword ? null : null}
          </div>
          <div className="self-center">
            <button
              type="submit"
              className="rounded-xl bg-[#fdbe20] shadow-2xl uppercase px-20 py-2 text-black my-2"
            >
              REGISTER
            </button>
            <div className="text-red-600 text-sm">{error}</div>
          </div>
        </form>
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
