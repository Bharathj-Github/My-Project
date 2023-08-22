import React from "react";
import shoppe from "../../img/shoppe.png";
export default function index(props) {
  return (
    <div className="">
      <div className="bg-[#fdbe20] w-screen h-[32rem] p-10 pt-28 max-sm:px-3 lg:px-32 max-sm:pt-10">
        <div className="border-4 border-white h-[20rem] rounded-3xl ">
          {/* img  */}
          <div className=" absolute right-0 top-24 lg:right-32 max-lg:top-[16rem] max-sm:-translate-x-[4rem] max-sm:scale-100 max-sm:-translate-y-[5rem]">
            <img
              src={shoppe}
              alt="girl with bag"
              className="h-[39rem] max-sm:h-[30rem]"
            />
          </div>
          {/* img  */}
          {/* text  */}
          <div className="">
          <div className=" absolute left-16 lg:left-[15rem] translate-y-10 max-sm:scale-[.6] max-sm:left-0 max-sm:-translate-y-5">
              <div className=" font-bold text-xl">FOR</div>
              <div className="font-extrabold text-3xl">ONLINE</div>
              <div className="font-bold text-xl border-b-4 border-white">ORDER</div>
              <div className="font-extrabold text-6xl text-white">30 %</div>
              <div className="font-extrabold text-6xl border-b-4 border-white text-white">OFF</div>
            </div>
            <div className="translate-y-3 scale-150 max-sm:scale-[.6] max-sm:translate-x-[6rem] max-sm:-translate-y-10">
              <div className="flex flex-col items-center">
                <div className="text-3xl font-extralight">
                  NEW ARRIVALS
                </div>
                <div className="font-extrabold text-8xl">JUST</div>
                <div className=" text-8xl font-extrabold">FOR</div>
                <div className=" text-[8rem] font-['Water_Brush'] text-white absolute translate-y-28 -rotate-12 ">
                  you
                </div>
              </div>
            </div>
            
          </div>
          {/* text  */}
        </div>
      </div>
    </div>
  );
}
