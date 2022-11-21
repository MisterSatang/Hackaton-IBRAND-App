import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

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
import Pledge from "./menu/Pledge";
import Packaging from "./menu/Packaging";
import Pays from "./menu/Pays";
//FIXME: Admin
import Admin from "./admin/Admin";
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
import QualityProduct_fail from "./menu/QualityProduct_fail";
import TB_3_2_Testing from "./admin/TB_3_2_Testing"
import QualityProduct_fix from "./menu/QualityProduct_fix";
import Detail_Product_Offer from "./admin/Detail_Product_Offer"
import Packaging_fail from "./menu/Packaging_fail";
//FIXME: Login
import Login from "./menu/Login";
import Loading from "./component/Loading";

//FIXME: 404
import PageNotFound from "./menu/PageNotFound";

export default function App() {
  return (
    <Routes>
      {/* user */}
      <Route path="/" element={<Home />} />
      <Route path="/mylist" element={<Mylist />} />
      <Route path="/order" element={<Order />} />
      <Route path="/qualityProduct_fail/:tran_id" element={<QualityProduct_fail />} />
      <Route path="/qualityProduct_fix/:tran_id" element={<QualityProduct_fix />} />
      <Route path="/qualityProduct/:fac_id/:product_id" element={<QualityProduct />} />
      <Route path="/detail/:fac_id" element={<Detail />} />
      <Route path="/wait/:status/:fac_id/:step" element={<Wait />} />
      <Route path="/appraise/:tran_id" element={<Appraise />} />
      <Route path="/pretester2-1/:tran_id" element={<Pretester2_1 />} />
      <Route path="/pretester2-2/:tran_id" element={<Pretester2_2 />} />
      <Route path="/pledge/:tran_id" element={<Pledge />} />
      <Route path="/packaging/:tran_id" element={<Packaging />} />
      <Route path="/packaging_fail/:tran_id/:pak_id" element={<Packaging_fail />} />
      <Route path="/pays/:tran_id" element={<Pays />} />

      {/* admin */}
      <Route path="/admin" element={<Admin />} />
      <Route path="/tb_product" element={<TB_Product />} />
      <Route path="/tb_deliveries" element={<TB_Deliveries />} />
      <Route path="/tb_FDA" element={<TB_FDA />} />
      <Route path="/tb_offer" element={<TB_Offer />} />
      <Route path="/tb_packaging" element={<TB_Packaging />} />
      <Route path="/tb_produce" element={<TB_Produce />} />
      <Route path="/tb_pays" element={<TB_Pays />} />
      <Route path="/tb_testing" element={<TB_Testing />} />
      <Route path="/tb_testing_2" element={<TB_3_2_Testing />} />
      <Route path="/detail_product/:tran_id" element={<Detail_Product />} />
      <Route path="/detail_product_offer/:tran_id" element={<Detail_Product_Offer />} />
      <Route path="/detail_packaging/:tran_id/:pak_id" element={<Detail_Packaging />} />
      <Route path="/detail_deliveries/:tran_id" element={<Detail_Deliveries />} />

      {/* Login */}
      <Route path="/login" element={<Login />} />
      <Route path="/loading" element={<Loading />} />

      {/* NotFound */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
