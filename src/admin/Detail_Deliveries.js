import { Fragment, useState } from "react";

import styled from "styled-components";
import Sidebar from "./component/Sidebar";

export function Detail_Deliveries({ className }) {
  const [token, setToken] = useState(localStorage.getItem("status"));
  const [admin, setAdmin] = useState(parseInt(localStorage.getItem("admin")));

  if (!token) {
    window.location.href = "/login";
  }

  if (admin != 1) {
    window.location.href = "/";
  }

  return (
    <Fragment>
      <div className={className}>
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
            <div className="col bg-body-purple p-0">
              <div className="fs-2 fw-bold mt-5 ms-5">Detail Testing</div>
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
                  <div class="d-flex my-3">
                    <span className="fs-4 fw-bold">Packaging</span>
                    <span class="ms-2 badge fw-semibold bg-primary fs-5">
                      Download<i class="ms-3 bi bi-download"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="container-fluid mt-4">
                <div class="px-4">
                  <div class="d-flex my-3">
                    <div className="input-group mb-3">
                      <span
                        className="input-group-text fs-5 fw-bold bg-warning"
                        id="inputGroup-sizing-default"
                      >
                        Delivery Number
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                        placeholder="please enter delivery number xxxxxxxxx"
                      />
                    </div>
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
                    Finish<i class="ms-3 bi bi-arrow-right-circle-fill"></i>
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
export default styled(Detail_Deliveries)``;
