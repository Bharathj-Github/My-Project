import React from 'react';
import { BiLogoFirebase } from "react-icons/bi";
import { Link } from "react-router-dom";
import { BsSearchHeartFill } from "react-icons/bs";
import {RiHomeHeartFill} from "react-icons/ri";
import {HiShoppingCart,HiHeart} from "react-icons/hi";

export default function index() {
  return (
    <div>
      <div className="bg-[#fdbe20] flex items-center py-2 sm:gap-5 justify-evenly w-full max-sm:grid max-sm:place-items-center">
        <BiLogoFirebase className=" text-7xl" />
        <div className=" items-center gap-10 flex max-sm:block">
            <div className='flex justify-center'>
            <div>
          <BsSearchHeartFill className="text-2xl absolute translate-x-3 translate-y-2 pointer-events-none text-gray-500 max-sm:text-sm" />
          <input
            type="text"
            placeholder="Search.."
            className="p-2 rounded-3xl px-12 outline-none shadow-inner shadow-gray-500 max-sm:px-10 max-sm:py-1 max-sm:text-xs"
          /> </div></div>
        <nav className="">
        <div className='flex list-none gap-3 text-lg font-semibold items-center max-sm:text-[0.60rem] max-sm:gap-1 max-sm:pt-2'>
         <div className="flex bg-white rounded-full px-6 gap-3 py-2 shadow-inner shadow-gray-400 max-sm:py-0">
          <Link to="/" className="flex items-center gap-1 relative z-[1]"><RiHomeHeartFill className="text-[#fdbe20]"/>HOME</Link>
          <Link to="/about" className="flex items-center gap-1 relative z-[1]"><HiHeart className="text-[#fdbe20]"/>ABOUT</Link>
          <Link to="/cart" className="flex items-center gap-1 relative z-[1]"><HiShoppingCart className="text-[#fdbe20]"/>CART</Link>
          </div>
            <li>
              <Link to="/login"><div className=" bg-black text-white p-4 rounded-3xl max-sm:py-0">LOGIN</div></Link>
            </li>
            <li>
              <Link to="/signup"><div className=" bg-black text-white p-4 rounded-3xl max-sm:py-0">SIGNUP</div></Link>
            </li>
        </div>
        </nav>
        </div>
      </div>
    </div>
  )
}
