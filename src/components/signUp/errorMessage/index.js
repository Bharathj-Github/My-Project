import React from 'react'

export default function index(props) {
  return (
    <div className=' text-red-400 font-medium text-sm'>
      {props.errorMessage}
    </div>
  )
}
