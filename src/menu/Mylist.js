import { Fragment } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
export default function Mylist() {
  return (
    <Fragment>
      <Navbar />
      <div className="container-fluid pt-4 bg-body-purple">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <div className="border-bottom border-3 pb-2 border-primary">
              <div className="fs-4 fw-bold text-uppercase">
                <i class="bi bi-heart-fill fs-5 me-2 text-danger"></i>
                Mylist
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
                <div className="shadow-lg rounded-4 bg-light">
                  <div class="position-relative">
                    <img
                      src="asset/factory/factory-01.jpg"
                      class="card-img-top border-image"
                    />
                    <i class="bi bi-heart-fill position-absolute top-0 end-0 me-3 mt-3 stroke-white fs-5 text-danger"></i>
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
                      บริษัทมุ่งมั่นสร้างผลิตภัณฑ์ในการนอน หมอน เตียง โซฟา อื่นๆ
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
    </Fragment>
  );
}
