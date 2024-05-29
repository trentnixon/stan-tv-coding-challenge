import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Program from "../pages/Program";
import Series from "../pages/Series";
import Movies from "../pages/Movies";

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/tv-shows" element={<Series />} />
    <Route path="/movies" element={<Movies />} />
    <Route path="/program/:id" element={<Program />} />
  </Routes>
);

export default AppRoutes;
