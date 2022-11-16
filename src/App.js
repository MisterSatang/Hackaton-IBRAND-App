import { Routes, Route } from "react-router-dom";
import React from "react";

//FIXME: user
import Home from "./menu/Home";
import Mylist from "./menu/Mylist";
import Order from "./menu/Order";
import QualityProduct from "./menu/QualityProduct";
import Detail from "./menu/Detail";
import Wait from "./menu/Wait";
import Appraise from "./menu/Appraise";
import Pretester2_1 from "./menu/Pretester2_1";
import Pretester2_2 from "./menu/Pretester2_2";

//FIXME: Admin
import TB_Product from "./admin/TB_1_Product";
import TB_Deliveries from "./admin/TB_8_Deliveries";
import TB_FDA from "./admin/TB_5_FDA";
import TB_Offer from "./admin/TB_2_Offer";
import TB_Pays from "./admin/TB_7_Pays";
import TB_Testing from "./admin/TB_3_Testing";
import TB_Packaging from "./admin/TB_4_Packaging";
import TB_Produce from "./admin/TB_6_Produce";
import Detail_Product from "./admin/Detail_Product";
import Detail_Packaging from "./admin/Detail_Packaging";
import Detail_Deliveries from "./admin/Detail_Deliveries";

export default function App() {
  return (
    <Routes>
      {/* user */}
      <Route path="/" element={<Home />} />
      <Route path="/mylist" element={<Mylist />} />
      <Route path="/order" element={<Order />} />
      <Route path="/qualityProduct" element={<QualityProduct />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/wait" element={<Wait />} />
      <Route path="/appraise" element={<Appraise />} />
      <Route path="/pretester2-1" element={<Pretester2_1 />} />
      <Route path="/pretester2-2" element={<Pretester2_2 />} />
      {/* admin */}
      <Route path="/tb_product" element={<TB_Product />} />
      <Route path="/tb_deliveries" element={<TB_Deliveries />} />
      <Route path="/tb_FDA" element={<TB_FDA />} />
      <Route path="/tb_offer" element={<TB_Offer />} />
      <Route path="/tb_packaging" element={<TB_Packaging />} />
      <Route path="/tb_produce" element={<TB_Produce />} />
      <Route path="/tb_pays" element={<TB_Pays />} />
      <Route path="/tb_testing" element={<TB_Testing />} />
      <Route path="/detail_product" element={<Detail_Product />} />
      <Route path="/detail_packaging" element={<Detail_Packaging />} />
      <Route path="/detail_deliveries" element={<Detail_Deliveries />} />
    </Routes>
  );
}
