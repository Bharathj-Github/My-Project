import React, { useEffect } from "react";
import Nav from '../Nav';
import Axios from "axios";

export default function Index(props) {
  useEffect(()=>{Axios.get("https://my-server-node.onrender.com/login?username=bharath").then(console.log("done")).catch((e)=>{console.log(e)})},[])
  return (
    <div>
      <Nav isLogin={props.isLogin}></Nav>
      homeeee
    </div>
  );
}
