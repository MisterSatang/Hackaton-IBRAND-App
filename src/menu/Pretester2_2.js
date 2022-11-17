import { Fragment } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Timeline from "../component/Timeline";

export default function Pretester2_2() {
  return (
    <Fragment>
      <Navbar />
      <div className="container-fluid pt-4 bg-body-purple">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <div className="d-flex justify-content-between border-primary border-bottom border-2 pb-2">
              <div className="d-flex fs-4 fw-bold text-uppercase">
                <i class="bi bi-buildings-fill fs-4 me-2"></i>
                Top&Tang Company
              </div>
              <div className="d-flex fs-4 fw-bold text-uppercase">
                No. 0000123
              </div>
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
      <Timeline />
      <div className="container-fluid pt-4 bg-body-purple">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <div className="d-flex fs-5 fw-bold text-uppercase">
              Step 3 : Pre Tester ( Confirm Product )
            </div>
            <div className="row my-4">
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
                    ช่วยลดการเกิดสิวที่ต้นเหตุ เช่น อนุมูลอิสระ ความมันส่วนเกิน
                    เชื้อแบคทีเรียก่อสิว พร้อมผลัดเซลล์ผิวอย่างอ่อนโยน
                    ช่วยให้ผิวเรียบเนียน กระจ่างใสขึ้น รวมถึงมีสารสกัดจากใบบัวบก
                    ช่วยเพิ่มความชุ่มชื้นไม่ทำให้ผิวแห้งลอก
                  </div>
                </div>
              </div>
            </div>
            <div className="p-3 ps-5">
              <div className="form-check fs-4">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Confirm
                </label>
              </div>
              <div className="form-check fs-4">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Not Confirm{" "}
                  <span className="text-danger">* ต้องการเเก้ไขสูตร</span>
                </label>
              </div>
            </div>
            <div className="d-flex justify-content-between mt-4">
              <div className="d-flex"></div>
              <div className="d-flex">
                <button type="button" class="btn btn-primary px-5 mt-4">
                  SEND<i class="ms-3 bi bi-arrow-right-circle-fill"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
}
