import { Fragment } from "react";

export default function Card() {
  return (
    <Fragment>
      {/* CARD*/}
      <div className="col-xl-3 col-lg-4 col-md-5 col-12 py-0 px-2 mt-4">
        <div className="shadow-lg rounded-4 bg-light h-100">
          <div class="position-relative">
            <img
              src="asset/factory/factory-01.jpg"
              class="card-img-top border-image"
            />
            <i class="bi bi-heart-fill position-absolute top-0 end-0 me-3 mt-3 stroke-white fs-5 text-black-50"></i>
          </div>
          <div class="px-3">
            <div class="d-flex mt-2 fw-bold font-6">Top&Tang Company</div>
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
    </Fragment>
  );
}
