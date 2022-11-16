import { Fragment } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Timeline from "../component/Timeline";

export default function Pretester2_1() {
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
              Step 3 : Pre Tester
            </div>
            <div className="row p-0 m-0">
              {/* CARD*/}
              <div className="col-8 py-0 px-2 mt-4">
                <div className="row">
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
              {/* END CARD*/}
              {/* CARD*/}
              <div className="col-4 py-0 ps-4 mt-4">
                <div class="p-4 shadow-lg rounded-4 bg-light">
                  <div class="d-flex mt-2 fw-bold font-6 border-bottom border-2">
                    NO. 0000123
                  </div>
                  <div className="row p-2 pb-0 fs-6">
                    <div className="col-6">ค่า Tester</div>
                    <div className="col-6">
                      <div className="d-flex justify-content-between">
                        <div className="d-flex">250</div>
                        <div className="d-flex">บาท</div>
                      </div>
                    </div>
                  </div>
                  <div className="row p-2 pb-0 fs-6">
                    <div className="col-6">ค่าจัดส่ง</div>
                    <div className="col-6">
                      <div className="d-flex justify-content-between">
                        <div className="d-flex">50</div>
                        <div className="d-flex">บาท</div>
                      </div>
                    </div>
                  </div>
                  <div className="row p-2 my-3 mx-1 fw-semibold fs-6 border-3 border rounded-3">
                    <div className="col-6">ราคาทั้งหมด</div>
                    <div className="col-6">
                      <div className="d-flex justify-content-between">
                        <div className="d-flex">300</div>
                        <div className="d-flex">บาท</div>
                      </div>
                    </div>
                  </div>
                  <button type="button" class="btn btn-danger w-100 mt-2">
                    <i class="bi bi-bag-fill text-light me-2"></i>Buy Tester
                  </button>
                </div>
              </div>
              {/* END CARD*/}
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
}
