import SignUp from "./components/signUp";
import Login from './components/login';
import Home from './components/Home';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="font-[poppins] w-screen h-screen">
      <Routes>
        <Route path="/" index element={ <Home/>} />
        <Route path="/My-App-Github/login"  element={ <Login/>} />
        <Route path="/My-App-Github/signup"  element={ <SignUp/>} />
      </Routes>
    </div>
  );
}

export default App;
