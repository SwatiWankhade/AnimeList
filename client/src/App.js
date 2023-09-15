import React from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboveFooter from "./components/AboveFooter";

const App = () => {
  return (
       <main style={{width:"81vw"}}>
      <BrowserRouter>
      <div className="navMain">
        <Header />
        <Menu />

        <Routes>

          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>



      </div>
       {/* <AboveFooter/>  */}
      </BrowserRouter>
      <Footer />
    </main>
  );
}

export default App;