import React, { useState } from "react";
import Axios from "axios";
import ErrorMessage from "./errorMessage";
import { BiLogoFirebase } from 'react-icons/bi';
import { Link } from "react-router-dom";

export default function Index() {
  const space = "flex flex-col";
  const input_tail ="font-light border-2 border-yellow-400 rounded-lg outline-none p-2";
  const click_move_after="absolute translate-x-[0.74rem] -translate-y-[0.4rem] bg-white text-xs ease-in-out duration-200";
  const click_move_before = "absolute translate-x-2 translate-y-2 pointer-events-none";

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
      setError("** please enter all mandatory fields");
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
      event.target.value = event.target.value.slice(0,10)
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
    }
    else {
      console.log("object")
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
    <div className="h-screen bg-[#fdbe20] flex justify-center max-[1000px]:block max-md:p-3 ">
      <div><BiLogoFirebase className="text-9xl flex flex-col max-[400px]:text-7xl"/></div>
      <div className="flex flex-row justify-end min-[768px]:max-[1200px]:flex-col">
        <img src="img/signup.png" alt="girl" className="flex justify-center"/>
      </div>
      <div className=" bg-white flex justify-center px-20 py-10 my-3 rounded-3xl flex-col max-md:px-6">
        <div className="flex justify-center font-extrabold text-2xl">
          SIGNUP
        </div>
        <p className=" text-xs flex justify-center pb-1">
          HELLO!! Please signup to continue
        </p>
        <div className="bg-black p-[0.1rem] rounded-full mb-3"></div>
        <form
          onSubmit={handleSubmit}
          className=" font-bold flex flex-col gap-3"
        >
          <div className="flex gap-3 max-[719px]:contents">
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
                className={input_tail}
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
                className={input_tail}
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
              className={input_tail}
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
              className={input_tail}
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
              className={input_tail+" [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"}
              onChange={phoneNoHandler}
              maxLength={10}
              max={10}
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
              className={input_tail}
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
              className={input_tail}
              onChange={cpasswordHandler}
              onClick={() => {
                setClick7(true);
              }}
            />{
              errCpassword? null:null
            }
          </div>
          <div className="flex justify-center flex-col">
            <button
              type="submit"
              className="rounded-xl bg-[#fdbe20] shadow-2xl uppercase px-10 py-2 text-black my-5"
            >
              REGISTER
            </button>
            <div className="text-red-400">{error}</div>
          </div>
        </form>
        <div className="flex justify-center">
          &nbsp;Already have an account? login &nbsp;
        </div>
        
        <button className="bg-black text-white rounded-3xl font-bold flex items-center justify-center py-2 mt-3"><Link to="/login">
          LOGIN </Link>
        </button>
       
        
      </div>
    </div>
  );
}
