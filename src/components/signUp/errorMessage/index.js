import React from 'react'

export default function index(props) {
  return (
    <div className=' text-red-600 font-medium text-sm max-sm:text-xs'>
      {props.errorMessage}
    </div>
  )
}
