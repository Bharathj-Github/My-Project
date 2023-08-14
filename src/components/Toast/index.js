import React from 'react'
import {BsFillCheckCircleFill} from 'react-icons/bs';
import {RxCross2} from "react-icons/rx";

export default function index(props) {
  return (
    <div className='sticky top-16 bg-white p-2 z-10 rounded-full max-sm:text-xs sm:absolute px-4 animate-bounce'>
        <div className='flex justify-center items-center gap-3 '>
        <BsFillCheckCircleFill className=' text-green-500 text-xl'/>
      {props.message}
      <button className='bg-gray-300 p-1 rounded-full' onClick={()=>props.onCancel(false)}><RxCross2/></button>
        </div>
    </div>
  )
}
