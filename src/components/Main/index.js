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
      <div className="sm:hidden bg-white py-1 sticky bottom-0 border-t-[1px] border-black">
        <div className="flex gap-10 justify-center">
          <Link to={"/"}>
            <button>
              <div className="flex flex-col items-center text-xs">
                <BiHomeHeart className=" text-2xl text-yellow-400" /> Home
              </div>
            </button>
          </Link>
          <Link to={"/"}>
            <button>
              <div className="flex flex-col items-center text-xs">
                <BiSolidCategory className=" text-2xl text-yellow-400" />
                Categories
              </div>
            </button>
          </Link>
          <Link to={"/"} className="flex items-end">
            <button >
              <div className="flex flex-col items-center text-xs">
                <RiAccountCircleFill className=" text-7xl text-yellow-400 absolute -translate-y-16 " />
                Account
              </div>
            </button>
          </Link>
          <Link to={"/"}>
            <button>
              <div className="flex flex-col items-center text-xs">
                <FaShoppingCart className="text-yellow-400 text-2xl" />&nbsp;&nbsp; Cart&nbsp;&nbsp;
              </div>
            </button>
          </Link>
          <Link to={"/"}>
            <button>
              <div className="flex flex-col items-center text-xs">
                <VscThreeBars className="text-yellow-400 text-2xl" /> More
              </div>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
