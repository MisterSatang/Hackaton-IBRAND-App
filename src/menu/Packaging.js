import { Fragment } from "react";
import styled from "styled-components";

import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Timeline from "../component/Timeline";
import CardPackaging from "../component/CardPackaging";

export function Packaging({ className }) {
  return (
    <Fragment>
      <div className={className}>
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
                  กรุณาอัพไฟล์ใหม่ให้ตรงตามเเบบฟอร์ม
                </div>
              </div>
              <div className="d-flex fs-5 fw-bold text-uppercase">
                Step 5 : Select Packaging
              </div>
              <div>
                <div className="row m-0">
                  <CardPackaging />
                  <CardPackaging />
                  <CardPackaging />
                  <CardPackaging />
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
              <div className="d-flex fs-5 mb-3 fw-bold text-uppercase">
                You Can Download From<i class="bi bi-caret-down-fill ms-2"></i>
              </div>
              <span className="fw-semibold bg-navbar text-light p-2 px-4 rounded-pill ">
                แบบฟอร์มการออกเเบบ คลิ๊ก
                <i class="ms-2 bi bi-download"></i>
              </span>
              <span className="ms-2 fw-semibold bg-navbar text-light p-2 px-4 rounded-pill">
                Ex. Design Pakaging
                <i class="ms-2 bi bi-download"></i>
              </span>

              <div className="mt-5">
                <span className="mt-5 fs-5 mb-3 fw-bold text-uppercase">
                  Upload your Design Pakaging
                </span>
                <span class="btn btn-outline-primary rounded-pill px-4 py-2 ms-3">
                  Your Design Pakaging <i class="bi bi-upload ms-1"></i>
                </span>
              </div>

              <div className="d-flex justify-content-between mt-4">
                <div className="d-flex"></div>
                <div className="d-flex">
                  <button type="button" class="btn btn-primary px-5 mt-4">
                    SEND PACKAGING
                    <i class="ms-3 bi bi-arrow-right-circle-fill"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="col-1"></div>
          </div>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
}
export default styled(Packaging)`
  .card {
  }
`;
