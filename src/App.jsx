import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className="bg-orange-50 min-h-screen">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </section>
    </>
  );
}

export default App;
