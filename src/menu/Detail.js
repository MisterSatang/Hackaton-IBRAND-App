import { Fragment } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Timeline from "../component/Timeline";

export default function Detail() {
  return (
    <Fragment>
      <Navbar />
      <div className="container-fluid pt-4 bg-body-purple">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <div className="d-flex justify-content-between border-bottom border-3 border-primary pb-2">
              <div className="d-flex fs-4 fw-bold text-uppercase">
                <i class="bi bi-buildings-fill fs-4 me-2"></i>
                Top&Tang Company
              </div>
              <div className="btn btn-secondary rounded-pill">
                <i className="bi-heart-fill me-2"></i>Save
              </div>
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>

      <div className="container-fluid pt-4 bg-body-purple">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <div className="row mb-4">
              <div className="col-5 p-0">
                <img
                  src="asset/factory/factory-01-1.jpg"
                  class="card-img-top img-detail-1"
                />
              </div>
              <div className="col p-0">
                <div className="row">
                  <div className="col pe-0">
                    <img
                      src="asset/factory/factory-01-3.jpg"
                      class="card-img-top img-detail-2"
                    />
                  </div>
                  <div className="col ps-0">
                    <img
                      src="asset/factory/factory-01-2.jpg"
                      class="card-img-top img-detail-2"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col pe-0">
                    <img
                      src="asset/factory/factory-01-3.jpg"
                      class="card-img-top img-detail-2"
                    />
                  </div>
                  <div className="col ps-0">
                    <img
                      src="asset/factory/factory-01-2.jpg"
                      class="card-img-top img-detail-2"
                    />
                  </div>
                </div>
              </div>
            </div>
            <span className=" fs-5 fw-bold text-uppercase">Detail Company</span>
            <span className="ms-4 fs-5 fw-bold text-danger">
              ราคา 4000/สูตร
            </span>
            <div className="d-flex fs-6 mt-3 fw-semibold">
              ที่อยู่ 22/3 หมู่ 1 ถนนกาญจนาภิเษก แขวงบางระมาด เขตตลิ่งชัน
              กรุงเทพมหานคร 10170
            </div>
            <div className="d-flex fs-6 mt-3">
              บริษัท คอสมินา จำกัด ก่อตั้งโดย นายแพทย์ธาดา เปี่ยมพงศ์สานต์
              ผู้ริเริ่มคิดค้น วิจัย และผลิตผลิตภัณฑ์ Skincare
              สำหรับดูแลผิวพรรณอันเป็นสูตรเฉพาะสำหรับผิวแต่ละประเภท
              โดยคำนึงถึงการค้นคว้าดูแลเอาใจใส่เรื่องผิวพรรณมาตลอด
              เป็นระยะเวลามากกว่า 45 ปี นอกจากนี้แล้ว นายแพทย์ธาดา
              เปี่ยมพงศ์สานต์ เป็นผู้ก่อตั้งสถาบันความรู้ Asian Esthetic
              Dermatology (AED) และสอนวิชาเวชศาสตร์ผิวพรรณ
              ที่มหาวิทยาลัยแม่ฟ้าหลวง วิทยาเขตกรุงเทพฯ
              โดยมุ่งเน้นการให้ความรู้เกี่ยวกับ การรักษาสิว ฝ้า ริ้วรอย
              ตลอดจนเทคนิคการทำเลเซอร์ต่าง ๆ การฉีดฟิลเลอร์ โบท็อกซ์ เมโส
              และทำการวิจัยพัฒนาสูตรเวชสำอาง สำหรับการรักษาสิว ฝ้า ครีมกันแดด
              สูตรชะลอริ้วรอย และการผลัดเซลล์ผิวมาอย่างต่อเนื่อง
            </div>
            <div className=" fs-5 fw-bold text-uppercase mt-3">
              Detail Company
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
            </div>
            <div className="d-flex justify-content-between mt-4">
              <div className="d-flex">
                <button type="button" class="btn btn-primary px-5 mt-4">
                  <i class="me-3 bi bi-arrow-left-circle-fill"></i>Back
                </button>
              </div>
              <div className="d-flex">
                <button type="button" class="btn btn-primary px-5 mt-4">
                  ORDER<i class="ms-3 bi bi-arrow-right-circle-fill"></i>
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
