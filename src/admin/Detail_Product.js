import { Fragment } from "react";

import styled from "styled-components";
import Sidebar from "./component/Sidebar";

export function Detail_Product({ className }) {
  return (
    <Fragment>
      <div className={className}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-2 col-lg-3 col-md-4 col-12 p-0 bg-navbar h-screen">
              <Sidebar />
            </div>
            <div className="col bg-body-purple p-0">
              <div className="fs-2 fw-bold mt-5 ms-5">Detail Product</div>
              <div className="fs-4 fw-bold ms-5">Order Number : 0215645167</div>
              <div className="container-fluid">
                <div className="row p-4">
                  <div className="col-3">
                    <img
                      src="asset/factory/01.jpg"
                      class="card-img-top border-image-pill shadow-lg"
                    />
                  </div>
                  <div className="col-9 shadow-lg rounded-4 bg-light">
                    <div class="px-3">
                      <div class="d-flex mt-3">
                        <span className="fs-5 fw-bold">สูตร : ColorFull</span>
                        <span className="ms-4 fs-5 fw-bold text-danger">
                          <i class="bi bi-currency-bitcoin"></i>4000/สูตร
                        </span>
                      </div>
                      <div class="d-flex fw-semibold fs-3 text-danger"></div>
                      <div class="card-text text-secondary mt-2 pb-3 fw-semibold">
                        ช่วยลดการเกิดสิวที่ต้นเหตุ เช่น อนุมูลอิสระ
                        ความมันส่วนเกิน เชื้อแบคทีเรียก่อสิว
                        พร้อมผลัดเซลล์ผิวอย่างอ่อนโยน ช่วยให้ผิวเรียบเนียน
                        กระจ่างใสขึ้น รวมถึงมีสารสกัดจากใบบัวบก
                        ช่วยเพิ่มความชุ่มชื้นไม่ทำให้ผิวแห้งลอก
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-fluid">
                <div class="px-4">
                  <div class="d-flex mt-3">
                    <span class="badge bg-danger fs-5">หมายเหตุ</span>
                    <span class="border-bottom border-danger border-3 mb-3 fs-5 w-100 ">
                      {" "}
                    </span>
                  </div>
                  <div class="card-text text-secondary mt-3 fw-semibold">
                    ช่วยลดการเกิดสิวที่ต้นเหตุ เช่น อนุมูลอิสระ ความมันส่วนเกิน
                    เชื้อแบคทีเรียก่อสิว พร้อมผลัดเซลล์ผิวอย่างอ่อนโยน
                    ช่วยให้ผิวเรียบเนียน กระจ่างใสขึ้น รวมถึงมีสารสกัดจากใบบัวบก
                    ช่วยเพิ่มความชุ่มชื้นไม่ทำให้ผิวแห้งลอก
                  </div>
                </div>
              </div>
              <div className="p-3 ps-5 ms-4">
                <div className="form-check fs-4">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    defaultChecked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Confirm
                  </label>
                </div>
                <div className="input-group w-20rem ps-5 py-3">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Dollar amount (with dot and two decimal places)"
                    placeholder="15"
                  />
                  <span className="input-group-text">
                    <i class="bi bi-currency-bitcoin"></i>
                  </span>
                  <span className="input-group-text fw-semibold">
                    Unit/Price
                  </span>
                </div>

                <div className="form-check fs-4">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    Not Confirm
                  </label>
                </div>
                <div className="mx-4 px-3 my-3">
                  <div className="d-flex fs-5 fw-bold text-uppercase">
                    รายละเอียด
                  </div>
                  <div class="form-outline mt-2">
                    <textarea
                      class="form-control"
                      id="textAreaExample"
                      rows="4"
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-between my-4 mx-4 mb-5 px-3">
                <div className="d-flex">
                  <button type="button" class="btn btn-primary px-5 mt-4">
                    <i class="me-3 bi bi-arrow-left-circle-fill"></i>Back
                  </button>
                </div>
                <div className="d-flex">
                  <button type="button" class="btn btn-primary px-5 mt-4">
                    Confirm<i class="ms-3 bi bi-arrow-right-circle-fill"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default styled(Detail_Product)``;
