import { Fragment } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
export default function Mylist() {
  return (
    <Fragment>
      <Navbar />
      <div className="container-fluid pt-4">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <div className="border-bottom border-2 pb-2">
              <div className="fs-4 fw-bold text-uppercase">
                <i class="bi bi-heart-fill fs-5 me-2 text-danger"></i>
                Mylist
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
                <div class="position-relative">
                  <img
                    src="asset/factory/factory-01.jpg"
                    class="card-img-top rounded-3"
                  />
                  <i class="bi bi-heart-fill position-absolute top-0 end-0 me-3 mt-3 stroke-white fs-5 text-danger"></i>
                </div>
                <div class="card-body">
                  <div className="d-flex justify-content-between">
                    <div class="d-flex my-2 fw-bold">Top&Tang Company</div>
                    <div class="d-flex my-2 fw-bold text-danger">4000/สูตร</div>
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
                  <button type="button" class="btn btn-secondary w-100">
                    Detail
                  </button>
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
