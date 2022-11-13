import { Fragment } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <div className="container-fluid">
        <div className="row pt-4">
          <div className="col-1"></div>
          <div className="col">
            <div className="row">
              <div className="col">
                <div class="input-group flex-nowrap">
                  <span class="input-group-text" id="addon-wrapping">
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
                <div class="input-group flex-nowrap">
                  <span class="input-group-text" id="addon-wrapping">
                    <i class="bi bi-building"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="ค้นหาชื่อโรงงาน"
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
          <div className="col-1"></div>
        </div>
      </div>
      {/* CARD*/}
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <div className="row p-0 m-0">
              <div className="col-3 mt-4 pt-2">
                <div class="position-relative">
                  <img
                    src="asset/factory/factory-01.jpg"
                    class="card-img-top rounded-3"
                  />
                  <i class="bi bi-heart-fill position-absolute top-0 end-0 me-3 mt-3 stroke-white fs-5 text-black-50"></i>
                </div>
                <div class="card-body">
                  <div className="d-flex justify-content-between">
                    <div class="d-flex fs-5 my-2 fw-bold">Top&Tang Company</div>
                    <div class="d-flex fs-5 my-2 fw-bold">4000/สูตร</div>
                  </div>
                  <p class="card-text text-secondary">
                    ที่อยู่ 22/3 หมู่ 1 ถนนความฝันเจริญ ซอยจินตาประเสริฐ
                  </p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    <i class="bi bi-trophy-fill me-2 text-warning"></i>
                    บริษัทมุ่งมั่นสร้างผลิตภัณฑ์ในการนอน หมอน เตียง โซฟา อื่นๆ
                  </li>
                  <li class="list-group-item">
                    <i class="bi bi-trophy-fill me-2 text-warning"></i>นอนสะบาย
                    หลับปุ๋ย
                  </li>
                  <li class="list-group-item">
                    <i class="bi bi-trophy-fill me-2 text-warning"></i>
                    หลับทั้งวัน ทั้งคืน หลับเป็นตาย
                  </li>
                </ul>
                <div class="card-body mt-1">
                  <button type="button" class="btn btn-primary w-100">
                    Detail
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}
