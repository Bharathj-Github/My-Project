import React from 'react'
import Nav from '../Nav';

export default function index(props) {
  return (
    <div>
      <Nav isLogin={props.isLogin}></Nav>
      CART
    </div>
  )
}
