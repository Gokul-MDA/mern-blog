import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
// import Nav from "./components/Nav";
import Create from "./components/Create";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Nav />} /> */}
        <Route path="/Create" element={<Create />} />
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
