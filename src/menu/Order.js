import { Fragment } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
export default function Order() {
  return (
    <Fragment>
      <Navbar />
      <div className="container-fluid pt-4 bg-body-purple">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <div className="border-bottom border-3 pb-2 border-primary">
              <div className="fs-4 fw-bold text-uppercase">
                <i class="bi bi-card-list fs-4 me-2"></i>
                Order
              </div>
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
      <div className="container-fluid bg-body-purple">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <div className="row">
              {/* CARD*/}
              <div className="col-3 py-0 px-2 mt-4">
                <div className="shadow-lg rounded-4 bg-light h-100">
                  <img
                    src="asset/factory/factory-01.jpg"
                    class="card-img-top border-image"
                  />
                  <div class="px-3">
                    <div class="d-flex mt-2 fw-bold font-6">
                      Top&Tang Company
                    </div>
                    <div class="d-flex fw-semibold fs-3 text-danger">
                      <i class="bi bi-currency-bitcoin"></i>4000/สูตร
                    </div>
                  </div>
                  <div class="card-body px-3">
                    <span class="d-flex fs-6 text-secondary">
                      No.0315621132585
                    </span>
                    <div className="mt-2 mb-3">
                      <span class="badge text-bg-warning fs-6 me-2">
                        <div class="spinner-border spinner-border-sm me-2"></div>
                        ขั้นตอน 2 รอการอนุมัติ...
                      </span>
                    </div>
                  </div>
                  <div className="container-fluid p-3 pt-0 mt-2">
                    <div className="row">
                      <div className="col">
                        <button type="button" class="btn btn-primary w-100">
                          Detail
                        </button>
                      </div>
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
