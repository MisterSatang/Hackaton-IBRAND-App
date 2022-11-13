import { Fragment } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Timeline from "../component/Timeline";

export default function Detail() {
  return (
    <Fragment>
      <Navbar />
      <div className="container-fluid pt-4">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <div className="d-flex justify-content-between border-bottom border-2 pb-2">
              <div className="d-flex fs-4 fw-bold text-uppercase">
                <i class="bi bi-buildings-fill fs-4 me-2"></i>
                Top&Tang Company
              </div>
              <div className="btn btn-secondary rounded-pill">
                <i className="bi-heart-fill me-2"></i>Save
              </div>
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>

      <div className="container-fluid pt-4">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <div className="row mb-4">
              <div className="col-4">
                <img
                  src="asset/factory/factory-01-1.jpg"
                  class="card-img-top rounded-3 img-select"
                />
              </div>
              <div className="col-4">
                <img
                  src="asset/factory/factory-01-3.jpg"
                  class="card-img-top rounded-3 img-select"
                />
              </div>
              <div className="col-4">
                <img
                  src="asset/factory/factory-01-2.jpg"
                  class="card-img-top rounded-3 img-select"
                />
              </div>
            </div>
            <span className=" fs-5 fw-bold text-uppercase">Detail Company</span>
            <span className="ms-4 fs-5 fw-bold text-danger">
              ราคา 4000/สูตร
            </span>
            <div className="d-flex fs-6 mt-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting,
            </div>
            <div className="d-flex fs-6 mt-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting,
            </div>
            <div className=" fs-5 fw-bold text-uppercase mt-3">
              Detail Company
            </div>
            <div className="row p-0 m-0 gap-2">
              {/* CARD*/}
              <div className="col-3 mt-2 p-3  ">
                <img
                  src="asset/factory/01.jpg"
                  class="card-img-top rounded-3 img-select"
                />
                <div class="card-body">
                  <div className="d-flex justify-content-between my-2">
                    <div class="d-flex fw-bold">สูตร ColorFull</div>
                    <div class="d-flex fw-bold text-danger">4000/สูตร</div>
                  </div>
                </div>
              </div>
              {/* END CARD*/}
              {/* CARD*/}
              <div className="col-3 mt-2 p-3  ">
                <img
                  src="asset/factory/02.jpg"
                  class="card-img-top rounded-3 img-select"
                />
                <div class="card-body">
                  <div className="d-flex justify-content-between my-2">
                    <div class="d-flex fw-bold">สูตร ColorFull</div>
                    <div class="d-flex fw-bold text-danger">4500/สูตร</div>
                  </div>
                </div>
              </div>
              {/* END CARD*/}
            </div>
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <button type="button" class="btn btn-primary px-5 mt-4">
                  <i class="me-3 bi bi-arrow-left-circle-fill"></i>Back
                </button>
              </div>
              <div className="d-flex">
                <button type="button" class="btn btn-primary px-5 mt-4">
                  ORDER<i class="ms-3 bi bi-arrow-right-circle-fill"></i>
                </button>
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
