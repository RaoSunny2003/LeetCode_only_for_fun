import "./App.css";
import Home from "./Components/Genral/Home";
import Navbar from "./Components/Genral/Navbar";
import Prob from "./Components/Problem/Prob";
import Problems from "./Components/Problem/Problems";
import Signup from "./Components/User/Signup";
import Login from "./Components/User/Login";
import Admin from "./Components/User/Admin";
import { Route, Routes } from "react-router-dom";
import User from "./Components/User/User";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/problems/all" element={<Problems />} />
        <Route path="/prob/:probId" element={<Prob />} />
        <Route path="/user" element={<User />} />
        <Route path="/signup" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
