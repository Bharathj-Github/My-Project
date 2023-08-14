import React from 'react'
import ErrorMessage from "../../errorMessage";

export default function index(props) {
    const input_css =
      "font-light border-2 border-yellow-400 rounded-lg outline-none p-2 max-[718.5px]:text-base";
    const click_move_after =
      "absolute translate-x-[0.74rem] -translate-y-[0.4rem] bg-white text-xs ease-in-out duration-200 ";
    const click_move_before =
      "absolute translate-x-2 translate-y-2 pointer-events-none max-[718.5px]:text-base";
  return (
    <div>
      <div className='flex flex-col'>
              <div
                className={props.click ? click_move_after : click_move_before}
                onClick={() => {
                  props.setclick(true)
                }}
              >
                &nbsp;{props.lable}&nbsp;
              </div>
              <input
                type= {props.type}
                name={props.id}
                id={props.id}
                onChange={props.handler}
                onKeyDown={props.keyDown}
                className={input_css+props.extraCss}
                onClick={() => {
                  props.setclick(true)
                }}
                onFocus={()=>{props.setclick(true)}}
              />
              {props.err ? (
                <ErrorMessage errorMessage={props.errmsg}></ErrorMessage>
              ) : null}
            </div>
    </div>
  )
}
