import { Fragment } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Timeline from "../component/Timeline";

export default function QualityProduct() {
  return (
    <Fragment>
      <Navbar />
      <div className="container-fluid pt-4">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <div className="d-flex justify-content-between border-bottom border-2 pb-2">
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
      <div className="container-fluid pt-4">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <div className="bg-danger p-4 rounded-4 mb-4">
              <div className="d-flex fs-4 fw-bold text-light justify-content-center">
                สูตรมีความผิดพลาด กรุณาเเก้ไขสูตรใหม่
              </div>
              <div className="d-flex fs-6 text-light justify-content-center mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting,
              </div>
            </div>
            <div className="d-flex fs-5 fw-bold text-uppercase">
              Step 1 : Select quality Product
            </div>
            <div className="row p-0 m-0 gap-2">
              {/* CARD*/}
              <div className="col-3 mt-4 p-3  ">
                <img
                  src="asset/factory/01.jpg"
                  class="card-img-top rounded-3 img-select"
                />
                <div class="card-body">
                  <div className="d-flex justify-content-between my-2">
                    <div class="d-flex fw-bold">สูตร ColorFull</div>
                    <div class="d-flex fw-bold text-danger">4000/สูตร</div>
                  </div>
                  <div class="card-text text-secondary mb-3">
                    หลับสบาย สไตล์ ColorFull
                  </div>
                </div>
                <button type="button" class="btn btn-primary w-100">
                  Select
                </button>
              </div>
              {/* END CARD*/}
              {/* CARD*/}
              <div className="col-3 mt-4 p-3  ">
                <img
                  src="asset/factory/02.jpg"
                  class="card-img-top rounded-3 img-select"
                />
                <div class="card-body">
                  <div className="d-flex justify-content-between my-2">
                    <div class="d-flex fw-bold">สูตร ColorFull</div>
                    <div class="d-flex fw-bold text-danger">4500/สูตร</div>
                  </div>
                  <div class="card-text text-secondary mb-3">
                    หลับสบาย สไตล์ ColorFull
                  </div>
                </div>
                <button type="button" class="btn btn-primary w-100">
                  Select
                </button>
              </div>
              {/* END CARD*/}
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>

      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <span className="fs-5 fw-bold text-uppercase">สูตร ColorFull</span>
            <span className="ms-4 fs-5 fw-bold text-danger">
              ราคา 4000/สูตร
            </span>
            <div className="d-flex fs-6 mt-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting,
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
              <div className="d-flex justify-content-between">
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
