import React, { useRef, useState } from "react";
import Axios from "axios";
import Input from "./Input";
import toast, { Toaster } from 'react-hot-toast';
import {AiFillCheckCircle} from "react-icons/ai";

export default function Index(props) {
  const notify = () => toast.success('Sign up Successfilly.',{duration: 4000,icon: <AiFillCheckCircle className=" text-2xl text-green-700"/>});

  let formRef = useRef();
  
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
  const [errFirst, setErrFirst] = useState(false);
  const [errLast, setErrLast] = useState(false);
  const [errUser, setErrUser] = useState(false);
  const [errEmail, setErrEmail] = useState(false);
  const [errPhone, setErrPhone] = useState(false);
  const [errpassword, setErrPassword] = useState(false);
  const [errCpassword, setErrCPassword] = useState(false);

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
      phoneNo !== undefined && cpassword.length >= 6 && phoneNo.length === 10
    ) {
      //if password is also correct post to server
      if (cpassword === password) {
        Axios.get(
          `https://my-server-node.onrender.com/api/registeredusers?username=${userName}`
        )
          .then((data) => {
            if (data.data.data.length === 0) {
              setError(null);
              Axios.post("https://my-server-node.onrender.com/register", {
                firstname: firstName,
                lastname: lastName,
                username: userName,
                emailid: emailId,
                phoneno: phoneNo,
                password: password,
              })
                .then(() => console.log("User Registered Successfully. "))
                .catch((e) => console.log("ERROR IN POST: " + e));
              notify();
              formRef.current?.reset();
              setClick1(false);
              setClick2(false);
              setClick3(false);
              setClick4(false);
              setClick5(false);
              setClick6(false);
              setClick7(false);
            } else{
              setError("User name has taken !");
              setErrUser(true)
            } 
          })
          .catch((e) => {
            console.log("ERROR :" + e);
          });
      } else {
        setError("Password doesn't match");
        setErrCPassword(true);
        setErrPassword(true)
      }
    } else {
      if (!firstName) {
        setErrFirst(true);
      }
      if (!lastName) {
        setErrLast(true);
      }
      if (!userName) {
        setErrUser(true);
      }
      if (!emailId) {
        setErrEmail(true);
      }
      if (!phoneNo) {
        setErrPhone(true);
      }
      if (!password) {
        setErrPassword(true);
      }
      if(!cpassword){
        setErrCPassword(true);
      }
      if(firstName && lastName && userName && emailId && password && cpassword && phoneNo){
        if(cpassword.length < 6){
          setError("Password must contain 6 characters or more!");
          setErrCPassword(true); 
          setErrPassword(true);
        }
        if(phoneNo.length < 10){
          setErrPhone(true)
          setError("check your phone no !")
        }
      }else setError("*Please Fill All The Mandatory Fields !");
    }
  };
  //events that set the fields for user entry and the error fields which are undifined
  let firstNameHandler = (event) => {
    setFirstName(event.target.value);
    setErrFirst(false)
  };
  let lastNameHandler = (event) => {
    if (!firstName) {
        setErrFirst(true);
    }
    setLastName(event.target.value);
    setErrLast(false);
  };
  let userNameHandler = (event) => {
    if (!firstName) {
      setErrFirst(true);
  }
    if (!lastName) {
      setErrLast(true);
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
    setPhoneNo(event.target.value);
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
    <div>
      <Toaster />
      <form onSubmit={handleSubmit} className=" font-bold flex flex-col gap-2" ref={formRef}>
        {/* First name and last name */}
        <div className="flex gap-3 max-md:contents">
          <Input
            type={"text"}
            id={"fistName"}
            lable={"FIRST NAME *"}
            click={click1}
            setclick={(Boolean) => {
              setClick1(Boolean);
            }}
            handler={firstNameHandler}
            err={errFirst}
            errmsg={"FirstName must be provided!"}
          />
          <Input
            type={"text"}
            id={"lastName"}
            lable={"LAST NAME *"}
            click={click2}
            setclick={(Boolean) => {
              setClick2(Boolean);
            }}
            handler={lastNameHandler}
            err={errLast}
            errmsg={"LastName must be provided!"}
          />
        </div>
        {/* First name and last name */}
        {/* User Name */}
        <Input
          type={"text"}
          id={"userName"}
          lable={"USER NAME *"}
          click={click3}
          setclick={(Boolean) => {
            setClick3(Boolean);
          }}
          handler={userNameHandler}
          err={errUser}
          errmsg={"UserName must be provided!"}
        />
        {/* User Name */}
        {/* Emailid */}
        <Input
          type={"email"}
          id={"emailId"}
          lable={"EMAIL ID *"}
          click={click4}
          setclick={(Boolean) => {
            setClick4(Boolean);
          }}
          handler={emailIdHandler}
          err={errEmail}
          errmsg={"EmailId must be provided!"}
        />
        {/* Emailid */}
        {/* PhoneNo */}
        <Input
          type={"number"}
          id={"phoneNo"}
          lable={"PHONE NUMBER *"}
          click={click5}
          setclick={(Boolean) => {
            setClick5(Boolean);
          }}
          handler={phoneNoHandler}
          err={errPhone}
          errmsg={"Phone number must be provided!"}
          keyDown={blockInvalidChar}
          extraCss={
            "[&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
          }
        />
        {/* PhoneNo */}
        {/* Password */}
        <Input
          type={"password"}
          id={"password"}
          lable={"PASSWORD *"}
          click={click6}
          setclick={(Boolean) => {
            setClick6(Boolean);
          }}
          handler={passwordHandler}
          err={errpassword}
          errmsg={"Password must be provided!"}
        />
        {/* Password */}
        {/* Confirm password */}
        <Input
          type={"password"}
          id={"cPassword"}
          lable={"CONFIRM PASSWORD *"}
          click={click7}
          setclick={(Boolean) => {
            setClick7(Boolean);
          }}
          handler={cpasswordHandler}
          err={errCpassword}
          errmsg={"Password must be provided!"}
        />
        {/* Confirm password */}
        {/* Submit button */}
        <div className="text-red-600 text-sm flex justify-center">{error}</div>
        <div className="self-center">
          <button
            className="rounded-xl bg-[#fdbe20] shadow-2xl uppercase px-20 py-2 text-black my-2"
            type="submit"
          >
            REGISTER
          </button>
        </div>
        {/* Submit button */}
      </form>
    </div>
  );
}
