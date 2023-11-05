import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Prob from "./Components/Prob";
import Problems from "./Components/Problems";
import { Route, Routes } from "react-router-dom";
import User from "./Components/User";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/problems/all" element={<Problems />} />
        <Route path="/prob/:probId" element={<Prob />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </>
  );
}

export default App;
