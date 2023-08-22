import SignUp from "./components/signUp";
import Login from "./components/login";
import Main from "./components/Main";
import Home from "./components/Home";
import About from "./components/About";
import Categories from "./components/Category";
import Cart from "./components/Cart";
import More from "./components/More";
import Account from "./components/Account";

import { Routes, Route, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="font-[poppins] w-screen h-screen">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<Main />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/more" element={<More />} />
          <Route path="/account" element={<Account />} />
          
        </Route>
      </Routes>

      <Outlet />
    </div>
  );
}

export default App;
