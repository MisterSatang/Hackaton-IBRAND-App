import { Fragment, useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Timeline from "../component/Timeline";
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom";
import axios from 'axios';
import ProducProductCardOnlyDetailtCard from "../component/ProductCardOnlyDetail";

export default function Detail() {
  let { fac_id } = useParams();
  const [factory, setFactory] = useState([]);
  const [image, setimage] = useState([]);
  const [product, setproduct] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("status"));

  useEffect(() => {
    window.scrollTo(0, 0)
    async function getfactory() {
      const factory = await axios.get(
        `http://localhost:8000/factory/search/${fac_id}`
      );
      setFactory(factory.data);
      setimage(factory.data.image)
      setproduct(factory.data.product)
    }
    getfactory();
  }, [fac_id]);

  return (
    <Fragment>
      <Navbar />
      <div className="container-fluid pt-4 bg-body-purple">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <div className="d-flex justify-content-between border-bottom border-3 border-primary pb-2">
              <div className="d-flex fs-4 fw-bold text-uppercase">
                <i class="bi bi-buildings-fill fs-4 me-2"></i>
                {factory.title}
              </div>
              {/* <div className="btn btn-secondary rounded-pill">
                <i className="bi-heart-fill me-2"></i>Save
              </div> */}
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>

      <div className="container-fluid pt-4 bg-body-purple">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <div className="row mb-4">
              <div className="col-5 p-0">
                <img
                  src={image[0]}
                  class="card-img-top img-detail-1"
                />
              </div>
              <div className="col p-0">
                <div className="row">
                  <div className="col pe-0">
                    <img
                      src={image[1]}
                      class="card-img-top img-detail-2"
                    />
                  </div>
                  <div className="col ps-0">
                    <img
                      src={image[2]}
                      class="card-img-top img-detail-2"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col pe-0">
                    <img
                      src={image[3]}
                      class="card-img-top img-detail-2"
                    />
                  </div>
                  <div className="col ps-0">
                    <img
                      src={image[4]}
                      class="card-img-top img-detail-2"
                    />
                  </div>
                </div>
              </div>
            </div>
            <span className=" fs-5 fw-bold text-uppercase">Detail Company</span>
            <span className="ms-4 fs-5 fw-bold text-danger">
              {factory.rate_price}
            </span>
            <div className="d-flex fs-6 mt-3 fw-semibold">
              {factory.location}
            </div>
            <div className="d-flex fs-6 mt-3">
              {factory.detail_full}
            </div>
            <div className=" fs-5 fw-bold text-uppercase mt-3">
              Detail Product
            </div>
            <div className="row p-0 m-0">
              {product.length > 0 ? (
                <>
                  {product.map((factoryData) => (
                    <ProducProductCardOnlyDetailtCard key={factoryData.p_id} product={factoryData} />
                  ))}
                </>
              ) : (
                <div></div>
              )}
            </div>
            <div className="d-flex justify-content-between mt-4">
              <div className="d-flex">
                <Link to="/">
                  <button type="button" class="btn btn-primary px-5 mt-4">
                    <i class="me-3 bi bi-arrow-left-circle-fill"></i>Back
                  </button>
                </Link>
              </div>
              <div className="d-flex">
                {
                  !token ? <Link to="/login">
                    <button type="button" class="btn btn-primary px-5 mt-4">
                      ORDER<i class="ms-3 bi bi-arrow-right-circle-fill"></i>
                    </button>
                  </Link> : <Link to={`/QualityProduct/${fac_id}/${fac_id}001`}>
                    <button type="button" class="btn btn-primary px-5 mt-4">
                      ORDER<i class="ms-3 bi bi-arrow-right-circle-fill"></i>
                    </button>
                  </Link>
                }
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
