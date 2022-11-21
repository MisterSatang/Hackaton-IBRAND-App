import { Fragment } from "react";

const step = 6;

export default function Navbar() {
  return (
    <Fragment>
      <div className="container-fluid pt-4 bg-body-purple">
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
                          <div
                            class={`${step >= 1
                                ? "inner-circle"
                                : "inner-circle-disable"
                              }`}
                          ></div>
                          <p
                            class={`fs-6 fw-bold mt-3 mb-1 text-uppercase ${step >= 1 ? "text-primary" : ""
                              }`}
                          >
                            Step 1
                          </p>
                          <p
                            class={`fs-6 mb-1 ${step >= 1 ? "text-primary" : ""
                              }`}
                          >
                            เลือกสูตร
                          </p>
                        </div>
                      </div>
                      <div class="timeline-step">
                        <div
                          class="timeline-content"
                          data-toggle="popover"
                          data-trigger="hover"
                          data-placement="top"
                        >
                          <div
                            class={`${step >= 2
                                ? "inner-circle"
                                : "inner-circle-disable"
                              }`}
                          ></div>
                          <p
                            class={`fs-6 fw-bold mt-3 mb-1 text-uppercase ${step >= 2 ? "text-primary" : ""
                              }`}
                          >
                            Step 2
                          </p>
                          <p
                            class={`fs-6 mb-1 ${step >= 2 ? "text-primary" : ""
                              }`}
                          >
                            ประเมินราคา
                          </p>
                        </div>
                      </div>
                      <div class="timeline-step">
                        <div
                          class="timeline-content"
                          data-toggle="popover"
                          data-trigger="hover"
                          data-placement="top"
                        >
                          <div
                            class={`${step >= 3
                                ? "inner-circle"
                                : "inner-circle-disable"
                              }`}
                          ></div>
                          <p
                            class={`fs-6 fw-bold mt-3 mb-1 text-uppercase ${step >= 3 ? "text-primary" : ""
                              }`}
                          >
                            Step 3
                          </p>
                          <p
                            class={`fs-6 mb-1 ${step >= 3 ? "text-primary" : ""
                              }`}
                          >
                            สินค้าทดสอบ
                          </p>
                        </div>
                      </div>
                      <div class="timeline-step">
                        <div
                          class="timeline-content"
                          data-toggle="popover"
                          data-trigger="hover"
                          data-placement="top"
                        >
                          <div
                            class={`${step >= 4
                                ? "inner-circle"
                                : "inner-circle-disable"
                              }`}
                          ></div>
                          <p
                            class={`fs-6 fw-bold mt-3 mb-1 text-uppercase ${step >= 4 ? "text-primary" : ""
                              }`}
                          >
                            Step 4
                          </p>
                          <p
                            class={`fs-6 mb-1 ${step >= 4 ? "text-primary" : ""
                              }`}
                          >
                            มัดจำ
                          </p>
                        </div>
                      </div>
                      <div class="timeline-step">
                        <div
                          class="timeline-content"
                          data-toggle="popover"
                          data-trigger="hover"
                          data-placement="top"
                        >
                          <div
                            class={`${step >= 5
                                ? "inner-circle"
                                : "inner-circle-disable"
                              }`}
                          ></div>
                          <p
                            class={`fs-6 fw-bold mt-3 mb-1 text-uppercase ${step >= 5 ? "text-primary" : ""
                              }`}
                          >
                            Step 5
                          </p>
                          <p
                            class={`fs-6 mb-1 ${step >= 5 ? "text-primary" : ""
                              }`}
                          >
                            เลือกเเพคเกจ
                          </p>
                        </div>
                      </div>
                      <div class="timeline-step">
                        <div
                          class="timeline-content"
                          data-toggle="popover"
                          data-trigger="hover"
                          data-placement="top"
                        >
                          <div
                            class={`${step >= 6
                                ? "inner-circle"
                                : "inner-circle-disable"
                              }`}
                          ></div>
                          <p
                            class={`fs-6 fw-bold mt-3 mb-1 text-uppercase ${step >= 6 ? "text-primary" : ""
                              }`}
                          >
                            Step 6
                          </p>
                          <p
                            class={`fs-6 mb-1 ${step >= 6 ? "text-primary" : ""
                              }`}
                          >
                            ขอ อย.
                          </p>
                        </div>
                      </div>
                      <div class="timeline-step">
                        <div
                          class="timeline-content"
                          data-toggle="popover"
                          data-trigger="hover"
                          data-placement="top"
                        >
                          <div
                            class={`${step >= 7
                                ? "inner-circle"
                                : "inner-circle-disable"
                              }`}
                          ></div>
                          <p
                            class={`fs-6 fw-bold mt-3 mb-1 text-uppercase ${step >= 7 ? "text-primary" : ""
                              }`}
                          >
                            Step 7
                          </p>
                          <p
                            class={`fs-6 mb-1 ${step >= 7 ? "text-primary" : ""
                              }`}
                          >
                            ผลิตสินค้า
                          </p>
                        </div>
                      </div>
                      <div class="timeline-step">
                        <div
                          class="timeline-content"
                          data-toggle="popover"
                          data-trigger="hover"
                          data-placement="top"
                        >
                          <div
                            class={`${step >= 8
                                ? "inner-circle"
                                : "inner-circle-disable"
                              }`}
                          ></div>
                          <p
                            class={`fs-6 fw-bold mt-3 mb-1 text-uppercase ${step >= 8 ? "text-primary" : ""
                              }`}
                          >
                            Step 8
                          </p>
                          <p
                            class={`fs-6 mb-1 ${step >= 8 ? "text-primary" : ""
                              }`}
                          >
                            จ่ายเงิน
                          </p>
                        </div>
                      </div>
                      <div class="timeline-step">
                        <div
                          class="timeline-content"
                          data-toggle="popover"
                          data-trigger="hover"
                          data-placement="top"
                        >
                          <div
                            class={`${step >= 9
                                ? "inner-circle"
                                : "inner-circle-disable"
                              }`}
                          ></div>
                          <p
                            class={`fs-6 fw-bold mt-3 mb-1 text-uppercase ${step >= 9 ? "text-primary" : ""
                              }`}
                          >
                            Step 9
                          </p>
                          <p
                            class={`fs-6 mb-1 ${step >= 9 ? "text-primary" : ""
                              }`}
                          >
                            ส่งสินค้า
                          </p>
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
