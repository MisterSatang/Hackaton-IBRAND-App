import { Routes, Route } from "react-router-dom";
import React from "react";

//FIXME: Menu
import Home from "./menu/Home";
import Mylist from "./menu/Mylist";
import Order from "./menu/Order";
import QualityProduct from "./menu/QualityProduct";
import Detail from "./menu/Detail";
import Wait from "./menu/Wait";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mylist" element={<Mylist />} />
      <Route path="/order" element={<Order />} />
      <Route path="/qualityProduct" element={<QualityProduct />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/wait" element={<Wait />} />
    </Routes>
  );
}
