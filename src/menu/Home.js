import { Fragment, useState, useEffect } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Card from "../component/Card";
import axios from "axios";
import styled from "styled-components";

export function Home({ className }) {
  const [factory, setFactory] = useState([]);
  useEffect(() => {
    async function getfactory() {
      const factory = await axios.get(`http://localhost:8000/factory`);
      setFactory(factory.data);
    }
    getfactory();
  }, []);

  console.log(factory);

  return (
    <Fragment>
      <div className={className}>
        <Navbar />
        <div className="container-fluid bg-body-purple">
          <div className="row">
            <div className="col-1"></div>
            <div className="col">
              <div className="row">
                <div className="col-xl-4 col-lg-5 col-md-5 col-12 mt-4">
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
                <div className="col mt-4">
                  <div class="input-group">
                    <select class="form-select" id="inputGroupSelect02">
                      <option selected>ประเภท</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
                <div className="col mt-4">
                  <div class="input-group">
                    <select class="form-select" id="inputGroupSelect02">
                      <option selected>หมวดหมู่</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
                <div className="col mt-4">
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
                <Card />
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
