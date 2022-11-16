import { Fragment } from "react";

export default function Menubar() {
  return (
    <Fragment>
      <div className="sidebar">
        <div className="p-0 h">
          <div className="p-4 text-light text-center fw-bolder fs-4">
            IBRAND
          </div>
          <div className="text-light ps-4 py-3 fs-5 bg-dark-20">
            <i class="bi bi-1-circle-fill me-2"></i> On Product
            <span class="badge bg-danger ms-3">1+</span>
          </div>
          <div className="text-light ps-4 py-3 fs-5 ">
            <i class="bi bi-2-circle-fill me-2"></i> On Testing
          </div>
          <div className="text-light ps-4 py-3 fs-5 ">
            <i class="bi bi-3-circle-fill me-2"></i> On Offer
          </div>
          <div className="text-light ps-4 py-3 fs-5 ">
            <i class="bi bi-4-circle-fill me-2"></i> On Packaging
          </div>
          <div className="text-light ps-4 py-3 fs-5 ">
            <i class="bi bi-5-circle-fill me-2"></i> On FDA
          </div>
          <div className="text-light ps-4 py-3 fs-5 ">
            <i class="bi bi-6-circle-fill me-2"></i> On Produce
          </div>
          <div className="text-light ps-4 py-3 fs-5 ">
            <i class="bi bi-7-circle-fill me-2"></i> On Pays
          </div>
          <div className="text-light ps-4 py-3 fs-5 ">
            <i class="bi bi-box-seam-fill me-2"></i> On Deliveries
          </div>
          <div className="text-light ps-4 py-4 fs-5 border-top border-light">
            <i class="bi bi-door-open-fill"></i> Logout
          </div>
        </div>
      </div>
    </Fragment>
  );
}
