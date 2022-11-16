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
                  Not Confirm
                </label>
              </div>
            </div>
            <div className="d-flex fs-5 fw-bold text-uppercase">
              แก้ไข/เพิ่มเติม อะไรบ้าง
            </div>
            <div class="form-outline mt-2">
              <textarea
                class="form-control"
                id="textAreaExample"
                rows="4"
              ></textarea>
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
