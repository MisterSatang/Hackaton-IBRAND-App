import { Fragment } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

import styled from "styled-components";

export function Home({ className }) {
  return (
    <Fragment>
      <div className={className}>
        <Navbar />
        <div className="container-fluid pt-4 bg-body-purple">
          <div className="row">
            <div className="col-1"></div>
            <div className="col">
              <div className="row">
                <div className="col-5">
                  <div class="input-group flex-nowrap">
                    <span
                      class="input-group-text bg-warning"
                      id="addon-wrapping"
                    >
                      <i class="bi bi-geo-alt"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="ค้นหาจังหวัด"
                    />
                  </div>
                </div>
                <div className="col">
                  <div class="input-group">
                    <select class="form-select" id="inputGroupSelect02">
                      <option selected>ประเภท</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
                <div className="col">
                  <div class="input-group">
                    <select class="form-select" id="inputGroupSelect02">
                      <option selected>หมวดหมู่</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
                <div className="col">
                  <div class="input-group">
                    <select class="form-select" id="inputGroupSelect02">
                      <option selected>วัสดุพิเศษ</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1 p-0 m-0"></div>
          </div>
        </div>
        <div className="container-fluid bg-body-purple">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-10">
              <div className="row">
                {/* CARD*/}
                <div className="col-3 py-0 px-2 mt-4">
                  <div className="shadow-lg rounded-4 bg-light">
                    <div class="position-relative">
                      <img
                        src="asset/factory/factory-01.jpg"
                        class="card-img-top border-image"
                      />
                      <i class="bi bi-heart-fill position-absolute top-0 end-0 me-3 mt-3 stroke-white fs-5 text-black-50"></i>
                    </div>
                    <div class="px-3">
                      <div class="d-flex mt-2 fw-bold font-6">
                        Top&Tang Company
                      </div>
                      <div class="d-flex fw-semibold fs-3 text-danger">
                        <i class="bi bi-currency-bitcoin"></i>4000/สูตร
                      </div>
                      <p class="card-text text-success mt-2 fw-semibold">
                        ที่อยู่ 22/3 หมู่ 1 ถนนความฝันเจริญ ซอยจินตาประเสริฐ
                      </p>
                    </div>
                    <ul class="list-group list-group-flush border-card p-2">
                      <li class="list-group-item bg-light">
                        <i class="bi bi-trophy-fill me-2 text-warning"></i>
                        บริษัทมุ่งมั่นสร้างผลิตภัณฑ์ในการนอน หมอน เตียง โซฟา
                        อื่นๆ
                      </li>
                      <li class="list-group-item bg-light">
                        <i class="bi bi-trophy-fill me-2 text-warning"></i>
                        นอนสะบาย หลับปุ๋ย
                      </li>
                      <li class="list-group-item bg-light">
                        <i class="bi bi-trophy-fill me-2 text-warning"></i>
                        หลับทั้งวัน ทั้งคืน หลับเป็นตาย
                      </li>
                    </ul>
                  </div>
                </div>
                {/* END CARD*/}
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
export default styled(Home)`
  .card {
  }
`;
