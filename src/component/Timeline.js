import { Fragment } from "react";

export default function Navbar() {
  return (
    <Fragment>
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10 p-0">
            <div className="row p-0 m-0">
              <div class="container-fluid ">
                <div class="row mt-4">
                  <div class="col">
                    <div
                      class="timeline-steps aos-init aos-animate"
                      data-aos="fade-up"
                    >
                      <div class="timeline-step">
                        <div
                          class="timeline-content"
                          data-toggle="popover"
                          data-trigger="hover"
                          data-placement="top"
                        >
                          <div class="inner-circle"></div>
                          <p class="fs-6 fw-bold mt-3 mb-1 text-uppercase text-primary">
                            Step 1
                          </p>
                          <p class="fs-6 mb-1 text-primary">เลือกสูตร</p>
                        </div>
                      </div>
                      <div class="timeline-step">
                        <div
                          class="timeline-content"
                          data-toggle="popover"
                          data-trigger="hover"
                          data-placement="top"
                        >
                          <div class="inner-circle-disable"></div>
                          <p class="fs-6 fw-bold mt-3 mb-1 text-uppercase">
                            Step 2
                          </p>
                          <p class="fs-6 mb-1">ประเมินราคา</p>
                        </div>
                      </div>
                      <div class="timeline-step">
                        <div
                          class="timeline-content"
                          data-toggle="popover"
                          data-trigger="hover"
                          data-placement="top"
                        >
                          <div class="inner-circle-disable"></div>
                          <p class="fs-6 fw-bold mt-3 mb-1 text-uppercase">
                            Step 3
                          </p>
                          <p class="fs-6 mb-1">สินค้าทดสอบ</p>
                        </div>
                      </div>
                      <div class="timeline-step">
                        <div
                          class="timeline-content"
                          data-toggle="popover"
                          data-trigger="hover"
                          data-placement="top"
                        >
                          <div class="inner-circle-disable"></div>
                          <p class="fs-6 fw-bold mt-3 mb-1 text-uppercase">
                            Step 4
                          </p>
                          <p class="fs-6 mb-1">มัดจำ</p>
                        </div>
                      </div>
                      <div class="timeline-step">
                        <div
                          class="timeline-content"
                          data-toggle="popover"
                          data-trigger="hover"
                          data-placement="top"
                        >
                          <div class="inner-circle-disable"></div>
                          <p class="fs-6 fw-bold mt-3 mb-1 text-uppercase">
                            Step 5
                          </p>
                          <p class="fs-6 mb-1">เลือกเเพคเกจ</p>
                        </div>
                      </div>
                      <div class="timeline-step">
                        <div
                          class="timeline-content"
                          data-toggle="popover"
                          data-trigger="hover"
                          data-placement="top"
                        >
                          <div class="inner-circle-disable"></div>
                          <p class="fs-6 fw-bold mt-3 mb-1 text-uppercase">
                            Step 6
                          </p>
                          <p class="fs-6 mb-1">ขอ อย.</p>
                        </div>
                      </div>
                      <div class="timeline-step">
                        <div
                          class="timeline-content"
                          data-toggle="popover"
                          data-trigger="hover"
                          data-placement="top"
                        >
                          <div class="inner-circle-disable"></div>
                          <p class="fs-6 fw-bold mt-3 mb-1 text-uppercase">
                            Step 7
                          </p>
                          <p class="fs-6 mb-1">ผลิตสินค้า</p>
                        </div>
                      </div>
                      <div class="timeline-step">
                        <div
                          class="timeline-content"
                          data-toggle="popover"
                          data-trigger="hover"
                          data-placement="top"
                        >
                          <div class="inner-circle-disable"></div>
                          <p class="fs-6 fw-bold mt-3 mb-1 text-uppercase">
                            Step 8
                          </p>
                          <p class="fs-6 mb-1">จ่ายเงิน</p>
                        </div>
                      </div>
                      <div class="timeline-step">
                        <div
                          class="timeline-content"
                          data-toggle="popover"
                          data-trigger="hover"
                          data-placement="top"
                        >
                          <div class="inner-circle-disable"></div>
                          <p class="fs-6 fw-bold mt-3 mb-1 text-uppercase">
                            Step 9
                          </p>
                          <p class="fs-6 mb-1">ส่งสินค้า</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </Fragment>
  );
}
