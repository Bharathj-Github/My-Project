import React,{useState} from "react";
import Logo from "../Logo";
import { Link } from "react-router-dom";

export default function Index(props) {
  const [animation,setanimation] = useState("-translate-x-3 px-9");

  return (
    <>
    <div className="flex items-center justify-between px-24 bg-[#fdbe20] sticky top-0 z-[1] sm:max-lg:block sm:max-lg:px-10 max-sm:px-0 max-sm:justify-center">
      {/* logo */}
      <div className="sm:max-lg:flex sm:max-lg:justify-center">
        <Logo
          logosize={"text-6xl max-sm:text-9xl sm:max-lg:text-8xl max-sm:text-[3.5rem]"}
          textsize={"text-lg max-sm:text-xl sm:max-lg:text-xl max-sm:text-base"}
          />
      </div>
       {/* logo */}
      <div className="font-bold">
        <nav className="flex gap-6 sm:max-lg:block">
          <div className="flex gap-10 items-center px-10 bg-gray-50 rounded-full sm:max-lg:py-4 sm:max-lg:justify-center sm:max-lg:mb-3 max-sm:hidden">
            <div className={`bg-black py-[0.1rem] rounded-full absolute duration-[600ms] ease-in-out ${animation} translate-y-4 
             drop-shadow-2xl sm:max-lg:hidden max-sm:hidden`}></div>


          <Link to={'/'}>
            <button className={"relative font-medium max-sm:hidden"} onClick={()=>{setanimation('-translate-x-1 px-7')}}>HOME</button>
          </Link>
          <Link to={'/about'}>
            <button className={"relative font-medium max-sm:hidden"} onClick={()=>{setanimation('translate-x-20 px-12')}}>ABOUT US</button>
          </Link>
          <Link to={'/'}>
            <button className={"relative font-medium max-sm:hidden"} onClick={()=>{setanimation('translate-x-[12.5rem] px-[3rem]')}}>CATEGORY</button>
          </Link>
          <Link to={'/'}>
            <button className={"relative font-medium max-sm:hidden"} onClick={()=>{setanimation('translate-x-[20.5rem] px-[3.6rem]')}}>CONTACT US</button>
          </Link>
          <Link to={'/'}>
            <button className={"relative font-medium max-sm:hidden"} onClick={()=>{setanimation('translate-x-[29.4rem] px-[1.7rem]')}}>CART</button>
          </Link>

          </div>
          <div className="flex gap-2 justify-center sm:max-lg:pb-0 max-sm:hidden">
          <Link to={'/login'}>
            <button className="bg-black px-4 py-2 text-white rounded-full shadow shadow-gray-200 border-[0.5rem] border-white max-sm:text-xs max-sm:border-[0.2rem]">LOGIN</button>
          </Link>
          <Link to={'/signup'}>
            <button className="bg-black px-4 py-2 text-white rounded-full shadow shadow-gray-200 border-[0.5rem] border-white max-sm:border-[0.2rem] max-sm:text-xs">SIGN UP</button>
          </Link>
          </div>
        </nav>
      </div>
    </div>
          </>
  );
}
