import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/signin/Login";
import Register from "../pages/signup/Register";
import Home from "../pages/home/Home";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default Rotas;
