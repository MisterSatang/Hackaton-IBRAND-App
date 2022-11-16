import { Fragment } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Card from "../component/Card";

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
              <Card />
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}
