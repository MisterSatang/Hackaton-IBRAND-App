import { Fragment } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Timeline from "../component/Timeline";

export default function Wait() {
  return (
    <Fragment>
      <Navbar />
      <div className="container-fluid pt-4 bg-body-purple">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <div className="d-flex justify-content-between border-bottom border-primary border-2 pb-2">
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
            <div className="bg-warning p-4 rounded-4 mb-4">
              <div className="d-flex fs-4 fw-bold text- justify-content-center">
                <div class="spinner-border me-3" role="status"></div>
                Waiting for confirmation from factory ...
              </div>
              <div className="d-flex fs-5 text- justify-content-center">
                กำลังตรวจสอบสูตร ใช้เวลาประมาณ 10-24 ชม.
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <button type="button" class="btn btn-primary px-5 mt-4">
                  <i class="me-3 bi bi-arrow-left-circle-fill"></i>Back
                </button>
              </div>
              <div className="d-flex"></div>
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}
