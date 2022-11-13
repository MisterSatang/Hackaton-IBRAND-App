import { Fragment } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
export default function Order() {
  return (
    <Fragment>
      <Navbar />
      <div className="container-fluid pt-4">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <div className="border-bottom border-2 pb-2">
              <div className="fs-4 fw-bold text-uppercase">
                <i class="bi bi-card-list fs-4 me-2"></i>
                Order
              </div>
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10 p-0">
            <div className="row p-0 m-0">
              {/* CARD*/}
              <div className="col-3 mt-4 pt-2">
                <img
                  src="asset/factory/factory-01.jpg"
                  class="card-img-top rounded-3"
                />
                <div class="card-body">
                  <div className="d-flex justify-content-between">
                    <div class="d-flex mt-2 mb-1 fw-bold">Top&Tang Company</div>
                    <div class="d-flex mt-2 mb-1 fw-bold text-danger">
                      4000/สูตร
                    </div>
                  </div>
                  <span class="d-flex fs-6 text-secondary">
                    ผลิตหมอนนอนสบาย หลับเป็นตาย
                  </span>
                  <div className="mt-2 mb-3">
                    <span class="badge text-bg-warning fs-6 me-2">Status</span>
                    <span class="badge text-bg-warning fs-6 me-2">
                      ขั้นตอน 2 รอการอนุมัติ
                    </span>
                  </div>
                </div>
                <div className="container-fluid p-0 mt-2">
                  <div className="row">
                    <div className="col">
                      <button type="button" class="btn btn-primary w-100">
                        ดำเนินการต่อ
                      </button>
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
      <Footer />
    </Fragment>
  );
}
