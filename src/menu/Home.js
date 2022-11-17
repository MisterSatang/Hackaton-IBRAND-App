import { Fragment, useState, useEffect } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Card from "../component/Card";
import axios from "axios";
import styled from "styled-components";
import DonotHave from "../component/DonotHave";

export function Home({ className }) {
  const [factory, setFactory] = useState([]);
  const [province, setProvince] = useState("");
  const [provinceDisplay, setProvinceDisplay] = useState([]);
  const [product, setProduct] = useState("");
  const [productDisplay, setProductDisplay] = useState([]);
  const [catagory, setcatagory] = useState("");
  const [catagoryDisplay, setcatagoryDisplay] = useState([]);
  const [ingre, setingre] = useState("");
  const [ingreDisplay, setingreDisplay] = useState([]);
  const [user, setUser] = useState("");

  useEffect(() => {
    async function getfactory() {
      const factory = await axios.get(
        `http://localhost:8000/factory/filter?province=${province}&catagory_english=${catagory}&product_have=${product}&p_ingre=${ingre}`
      );
      setFactory(factory.data);
    }
    getfactory();
  }, [province, product, catagory, ingre]);

  useEffect(() => {
    async function getUser() {
      const user = await axios.get(`http://localhost:8000/user/1`);
      setUser(user.data);
    }
    getUser();
  }, []);

  useEffect(() => {
    async function getprovince() {
      const province = await axios.get(
        `http://localhost:8000/factory/province`
      );
      setProvinceDisplay(province.data);
    }
    getprovince();
  }, []);

  useEffect(() => {
    async function getproduct() {
      const catagory = await axios.get(`http://localhost:8000/factory/product`);
      setProductDisplay(catagory.data);
    }
    getproduct();
  }, []);

  useEffect(() => {
    async function getcatagory() {
      const catagory = await axios.get(
        `http://localhost:8000/factory/catagory`
      );
      setcatagoryDisplay(catagory.data);
    }
    getcatagory();
  }, []);

  useEffect(() => {
    async function getingre() {
      const ingre = await axios.get(`http://localhost:8000/factory/ingre`);
      setingreDisplay(ingre.data);
    }
    getingre();
  }, []);

  const Addprovince = (event) => {
    setProvince(event.target.value);
  };

  const Addproduct = (event) => {
    setProduct(event.target.value);
  };

  const Addcatagory = (event) => {
    setcatagory(event.target.value);
  };

  const Addingre = (event) => {
    setingre(event.target.value);
  };

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
                    <div class="input-group">
                      <select
                        class="form-select"
                        id="inputGroupSelect02"
                        onChange={Addprovince}
                      >
                        <option selected value="">
                          ค้นหาจังหวัด
                        </option>
                        {provinceDisplay.map((province) => (
                          <option value={province}>{province}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col mt-4">
                  <div class="input-group">
                    <select
                      class="form-select"
                      id="inputGroupSelect02"
                      onChange={Addcatagory}
                    >
                      <option selected value="">
                        ประเภท
                      </option>
                      {catagoryDisplay.map((catagory) => (
                        <option value={catagory}>{catagory}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col mt-4">
                  <div class="input-group">
                    <select
                      class="form-select"
                      id="inputGroupSelect02"
                      onChange={Addproduct}
                    >
                      <option selected value="">
                        หมวดหมู่
                      </option>
                      {productDisplay.map((product) => (
                        <option value={product}>{product}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col mt-4">
                  <div class="input-group">
                    <select
                      class="form-select"
                      id="inputGroupSelect02"
                      onChange={Addingre}
                    >
                      <option selected value="">
                        วัสดุ
                      </option>
                      {ingreDisplay.map((ingre) => (
                        <option value={ingre}>{ingre}</option>
                      ))}
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
                {factory.length > 0 ? (
                  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {factory.map((factoryData) => (
                      <Card
                        key={factoryData.fac_id}
                        factory={factoryData}
                        watchlist={user.watchlist}
                      />
                    ))}
                  </div>
                ) : (
                  <DonotHave />
                )}
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
