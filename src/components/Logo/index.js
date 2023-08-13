import React from 'react'
import { BiLogoFirebase } from "react-icons/bi";

export default function index(props) {
  return (
    <div className='flex p-2'>
        <div>
        <div className='flex justify-center'>
        <BiLogoFirebase className={` ${props.logosize}`}/>
        </div>
        <p className={`${props.textsize} text-black font-bold uppercase flex`}>
          Retro<p className="text-white">&nbsp;Dapper</p>
        </p>
        </div>
    </div>
  )
}
