import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Create from "./components/Create";
import Read from "./components/Read";
import Profile from "./components/Profile";
import MyPosts from "./components/MyPosts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MyPost" element={<MyPosts />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Read" element={<Read />} />
        <Route path="/Create" element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
