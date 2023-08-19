import SignUp from "./components/signUp";
import Login from './components/login';
import Home from './components/Home';
import About from "./components/About/Index";
import Cart from "./components/Cart";
import { Routes,Route} from 'react-router-dom';
import { useState } from "react";

function App() {
  const [isLogin,setIsLogin] = useState(false);
  const setloginHandler = (data)=>{setIsLogin(data)}
  return (
    <div className="font-[poppins] w-screen h-screen">
      {console.log(isLogin)}
      <Routes>
        <Route path="/" element={ <Home isLogin={isLogin}/>}/>
        <Route path="/login" element={ <Login setloginHandler={setloginHandler}/>} />
        <Route path="/signup" element={ <SignUp/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
