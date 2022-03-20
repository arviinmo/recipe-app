import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Cuisine from "./Cuisine";
import Searched from "./Searched";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:id" element={<Cuisine />} />
      <Route path="/searched/:search" element={<Searched />} />
    </Routes>
  );
}

export default Pages;
