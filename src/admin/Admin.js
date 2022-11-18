import { Fragment, useState, useEffect } from "react";

import styled from "styled-components";
import Sidebar from "./component/Sidebar";
import Table from "./component/Table";
import axios from "axios";

export function Admin({ className }) {
  const [token, setToken] = useState(localStorage.getItem("status"));
  const [admin, setAdmin] = useState(parseInt(localStorage.getItem("admin")));

  if (!token) {
    window.location.href = "/login";
  }

  if (admin != 1) {
    window.location.href = "/";
  }

  return (
    <Fragment>
      <div className={className}>
        <div className="container-fluid bg-body-purple h-screen w-screen">
          <div className="row">
            <Sidebar />
            <div className="col">
              <div className="fs-2 fw-bold mt-5 ms-5 border-bottom border-3 border-primary">
                จัดการลูกค้าทั้งหมด
              </div>
              <div className="row p-0">
                <div className="col-xl-3 col-lg-4 col-md-5 col-12 mt-3 p-3">
                  <div className="btn btn-primary p-0 w-100 rounded-5 ">
                    <div className="rounded-cardMenuAdmin bg-dark-20 text-center p-3 text-light fw-semibold">
                      On Product
                    </div>
                    <div className="text-center p-3 text-light ">
                      <div className="row d-flex align-items-center">
                        <div className="col-4">total :</div>
                        <div className="col-4 fs-2 fw-bold">-</div>
                        <div className="col-4">order</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-5 col-12 mt-3 p-3">
                  <div className="btn btn-primary p-0 w-100 rounded-5 ">
                    <div className="rounded-cardMenuAdmin bg-dark-20 text-center p-3 text-light fw-semibold">
                      On Testing
                    </div>
                    <div className="text-center p-3 text-light ">
                      <div className="row d-flex align-items-center">
                        <div className="col-4">total :</div>
                        <div className="col-4 fs-2 fw-bold">-</div>
                        <div className="col-4">order</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-5 col-12 mt-3 p-3">
                  <div className="btn btn-primary p-0 w-100 rounded-5 ">
                    <div className="rounded-cardMenuAdmin bg-dark-20 text-center p-3 text-light fw-semibold">
                      On Offer
                    </div>
                    <div className="text-center p-3 text-light ">
                      <div className="row d-flex align-items-center">
                        <div className="col-4">total :</div>
                        <div className="col-4 fs-2 fw-bold">-</div>
                        <div className="col-4">order</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-5 col-12 mt-3 p-3">
                  <div className="btn btn-primary p-0 w-100 rounded-5 ">
                    <div className="rounded-cardMenuAdmin bg-dark-20 text-center p-3 text-light fw-semibold">
                      On Packaging
                    </div>
                    <div className="text-center p-3 text-light ">
                      <div className="row d-flex align-items-center">
                        <div className="col-4">total :</div>
                        <div className="col-4 fs-2 fw-bold">-</div>
                        <div className="col-4">order</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-5 col-12 mt-3 p-3">
                  <div className="btn btn-primary p-0 w-100 rounded-5 ">
                    <div className="rounded-cardMenuAdmin bg-dark-20 text-center p-3 text-light fw-semibold">
                      On FDA
                    </div>
                    <div className="text-center p-3 text-light ">
                      <div className="row d-flex align-items-center">
                        <div className="col-4">total :</div>
                        <div className="col-4 fs-2 fw-bold">-</div>
                        <div className="col-4">order</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-5 col-12 mt-3 p-3">
                  <div className="btn btn-primary p-0 w-100 rounded-5 ">
                    <div className="rounded-cardMenuAdmin bg-dark-20 text-center p-3 text-light fw-semibold">
                      On Produce
                    </div>
                    <div className="text-center p-3 text-light ">
                      <div className="row d-flex align-items-center">
                        <div className="col-4">total :</div>
                        <div className="col-4 fs-2 fw-bold">-</div>
                        <div className="col-4">order</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-5 col-12 mt-3 p-3">
                  <div className="btn btn-primary p-0 w-100 rounded-5 ">
                    <div className="rounded-cardMenuAdmin bg-dark-20 text-center p-3 text-light fw-semibold">
                      On Pays
                    </div>
                    <div className="text-center p-3 text-light ">
                      <div className="row d-flex align-items-center">
                        <div className="col-4">total :</div>
                        <div className="col-4 fs-2 fw-bold">-</div>
                        <div className="col-4">order</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-5 col-12 mt-3 p-3">
                  <div className="btn btn-primary p-0 w-100 rounded-5 ">
                    <div className="rounded-cardMenuAdmin bg-dark-20 text-center p-3 text-light fw-semibold">
                      On Deliveries
                    </div>
                    <div className="text-center p-3 text-light ">
                      <div className="row d-flex align-items-center">
                        <div className="col-4">total :</div>
                        <div className="col-4 fs-2 fw-bold">-</div>
                        <div className="col-4">order</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="input-group flex-nowrap my-3">
                <span class="input-group-text bg-warning" id="addon-wrapping">
                  <i class="bi bi-search"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Order Number"
                />
              </div>
              <Table />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default styled(Admin)``;
