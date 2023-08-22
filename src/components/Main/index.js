import React from "react";
import { Outlet } from "react-router-dom";
import { BiHomeHeart, BiSolidCategory } from "react-icons/bi";
import { RiAccountCircleFill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import { VscThreeBars } from "react-icons/vsc";
import { Link } from "react-router-dom";
import Nav from "../Nav";

export default function index() {
  return (
    <>
      <Nav></Nav>
      <div className="h-screen">
        <Outlet />
      </div>
      <div className="sm:hidden bg-[#fdbe20] py-1 sticky bottom-0 border-t-[1px] border-black">
        <div className="flex gap-10 justify-center">
          <Link to={"/"}>
            <button>
              <div className="flex flex-col items-center text-xs">
                <BiHomeHeart className=" text-2xl text-black" /> Home
              </div>
            </button>
          </Link>
          <Link to={"/categories"}>
            <button>
              <div className="flex flex-col items-center text-xs">
                <BiSolidCategory className=" text-2xl text-black" />
                Categories
              </div>
            </button>
          </Link>
          <Link to={"/account"} className="flex items-end">
            <button >
              <div className="p-11 bg-[#fdbe20] rounded-full absolute -translate-y-16 -translate-x-[1.28rem]"></div>
              <div className="flex flex-col items-center text-xs relative">
                <RiAccountCircleFill className=" text-6xl text-white absolute -translate-y-14 " />
                Account
              </div>
            </button>
          </Link>
          <Link to={"/cart"}>
            <button>
              <div className="flex flex-col items-center text-xs">
                <FaShoppingCart className="text-black text-2xl" />&nbsp;&nbsp; Cart&nbsp;&nbsp;
              </div>
            </button>
          </Link>
          <Link to={"/more"}>
            <button>
              <div className="flex flex-col items-center text-xs">
                <VscThreeBars className="text-black text-2xl" /> More
              </div>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
