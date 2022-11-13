import { Routes, Route } from "react-router-dom";
import React from "react";

//FIXME: Menu
import Home from "./menu/Home";

export default function App() {
  return <Routes>{<Route path="/" element={<Home />} />}</Routes>;
}
