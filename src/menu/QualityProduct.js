import { Fragment } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Timeline from "../component/Timeline";

export default function QualityProduct() {
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
            <div className="bg-danger p-4 rounded-4 mb-4">
              <div className="d-flex fs-4 fw-bold text-light justify-content-center">
                สูตรมีความผิดพลาด กรุณาเเก้ไขสูตรใหม่
              </div>
              <div className="d-flex fs-6 text-light justify-content-center mb-4">
                ช่วยลดการเกิดสิวที่ต้นเหตุ เช่น อนุมูลอิสระ ความมันส่วนเกิน
                เชื้อแบคทีเรียก่อสิว พร้อมผลัดเซลล์ผิวอย่างอ่อนโยน
                ช่วยให้ผิวเรียบเนียน กระจ่างใสขึ้น รวมถึงมีสารสกัดจากใบบัวบก
                ช่วยเพิ่มความชุ่มชื้นไม่ทำให้ผิวแห้งลอก
              </div>
            </div>
            <div className="d-flex fs-5 fw-bold text-uppercase">
              Step 1 : Select quality Product
            </div>
            <div className="row p-0 m-0 gap-2">
              {/* CARD*/}
              <div className="col-3 py-0 px-2 mt-4">
                <div className="shadow-lg rounded-4 bg-light h-100">
                  <img
                    src="asset/factory/01.jpg"
                    class="card-img-top border-image"
                  />
                  <div class="px-3">
                    <div class="d-flex mt-2 fw-bold font-6">
                      Top&Tang Company
                    </div>
                    <div class="d-flex fw-semibold fs-3 text-danger">
                      <i class="bi bi-currency-bitcoin"></i>4000/สูตร
                    </div>
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
              {/* END CARD*/}
              {/* CARD*/}
              <div className="col-3 py-0 px-2 mt-4">
                <div className="shadow-lg rounded-4 bg-light">
                  <img
                    src="asset/factory/02.jpg"
                    class="card-img-top border-image"
                  />
                  <div class="px-3">
                    <div class="d-flex mt-2 fw-bold font-6">
                      Top&Tang Company
                    </div>
                    <div class="d-flex fw-semibold fs-3 text-danger">
                      <i class="bi bi-currency-bitcoin"></i>4000/สูตร
                    </div>
                    <div class="card-text text-secondary mt-2 pb-3 fw-semibold">
                      เจลแต้มสิว ช่วยรักษาสิวที่ต้นเหตุ
                      โดยยับยั้งการเจริญเติบโตของเชื้อแบคทีเรีย
                      อันเป็นสาเหตุของการเกิดสิว ลดความมันบนใบหน้า
                      พร้อมช่วยให้ป้องกันการอุดตัน ลดการอักเสบของสิวอักเสบ
                      นอกจากนี้ ผลิตภัณฑ์ยังมีความอ่อนโยนเหมาะกับผิวแพ้ง่าย
                      ช่วยปลอบประโลมให้ผิวรู้สึกผ่อนคลาย
                      ทั้งยังปรับสมดุลสีผิวให้สม่ำเสมอ
                    </div>
                  </div>
                </div>
              </div>
              {/* END CARD*/}
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>

      <div className="container-fluid pt-5 bg-body-purple">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <span className="fs-5 fw-bold text-uppercase">สูตร ColorFull</span>
            <span className="ms-4 fs-5 fw-bold text-danger">
              ราคา 4000/สูตร
            </span>
            <div className="d-flex fs-6 mt-3">
              "ลดสาเหตุของการเกิดสิว", "ลดรอยแดงที่เกิดจากสิว", "ลดการอุดตัน
              ควบคุมความมัน", "ลดอาการระคายเคือง", "เร่งการผลัดเซลล์ผิวใหม่",
              "ผิวชุ่มชื้น", "Anti – Blue Light", "Anti – Aging", "Anti –
              Pollution"
            </div>
            <div className="d-flex fs-5 fw-bold text-uppercase mt-4">
              รายละเอียดเพิ่มเติม (ปรับเเต่งสูตร)
            </div>
            <div class="form-outline mt-2">
              <textarea
                class="form-control"
                id="textAreaExample"
                rows="4"
              ></textarea>
              <div className="d-flex justify-content-between mt-4">
                <div className="d-flex"></div>
                <div className="d-flex">
                  <button type="button" class="btn btn-primary px-5 mt-4">
                    SEND<i class="ms-3 bi bi-arrow-right-circle-fill"></i>
                  </button>
                </div>
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
