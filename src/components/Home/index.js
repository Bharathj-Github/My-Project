import React from "react";
import shoppe from "../../img/shoppe.png";
export default function index(props) {
  
  return (
    <div className="">
      <div className="bg-[#fdbe20] w-screen h-[32rem] p-10 pt-28 max-sm:px-3">
        <div className="border-4 border-white h-[20rem] rounded-3xl ">
          <div className=" absolute right-0 top-24  "><img src={shoppe} alt="girl with bag" className="h-[39rem] max-sm:h-[30rem]"/></div>
          <div className="flex flex-col justify-center items-center">

          <div className="text-4xl font-extralight text-white">
            NEW ARRIVALS
          </div>
          <div className="font-extrabold text-8xl">JUST</div>
          <div className=" text-8xl font-extrabold">FOR</div>
          <div className=" text-[8rem] font-['Water_Brush'] text-white absolute translate-y-24 -rotate-12 ">you</div>
          </div>
        </div>
      </div>
    </div>
  );
}
