import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Alert from "./Alert";
import About from "./About";
import NotFound from "./NotFound";
import UserDetails from "./UserDetails";
import GithubState from "../context/github/GithubState";
import AlertState from "../context/alert/AlertState";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <Alert />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/user/:login" element={<UserDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  );
};

export default App;
