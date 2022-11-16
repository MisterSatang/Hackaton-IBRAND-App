import { Fragment } from "react";

import styled from "styled-components";
import Sidebar from "./component/Sidebar";
import Table from "./component/Table";

export function TB_1_Product({ className }) {
  return (
    <Fragment>
      <div className={className}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-2 col-lg-3 col-md-4 col-12 p-0 bg-navbar h-screen">
              <Sidebar />
            </div>
            <div className="col bg-body-purple">
              <div className="fs-2 fw-bold mt-5 ms-5">On Product</div>
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
export default styled(TB_1_Product)``;
