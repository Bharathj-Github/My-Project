import SignUp from "./components/signUp";
import Login from './components/login';
import Home from './components/Home';
import About from "./components/About/Index";
import Cart from "./components/Cart";

import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="font-[poppins] w-screen h-screen">
      <Routes>
        <Route path="/" index element={ <Home/>} />
        <Route path="/login"  element={ <Login/>} />
        <Route path="/signup"  element={ <SignUp/>} />
        <Route path="/about" element={<About/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
