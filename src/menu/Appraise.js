import { Fragment, useState, useEffect } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Timeline from "../component/Timeline";
import { useParams } from 'react-router-dom';
import axios from "axios";

export default function Appraise() {
  let { tran_id } = useParams();
  const [transaction, settransaction] = useState([]);
  const [product, setproduct] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("status"));

  useEffect(() => {
    async function getTransaction() {
      const tran = await axios.get(`http://localhost:8000/transaction/find_tranid/${tran_id}`, {
        headers: {
          token: token
        }
      });
      settransaction(tran.data);
      setproduct(tran.data.product[0]);
    }
    getTransaction();
  }, []);


  return (
    <Fragment>
      <Navbar />
      <div className="container-fluid pt-4 bg-body-purple">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <div className="d-flex justify-content-between border-primary border-bottom border-2 pb-2">
              <div className="d-flex fs-4 fw-bold text-uppercase">
                <i class="bi bi-buildings-fill fs-4 me-2"></i>
                {transaction.fac_title}
              </div>
              <div className="d-flex fs-4 fw-bold text-uppercase">
                {`No. ${transaction._id}`}
              </div>
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
      <Timeline />
      <div className="container-fluid pt-4 bg-body-purple">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <div className="d-flex fs-5 fw-bold text-uppercase">
              Step 2 : Appraise
            </div>
            <div className="row p-0 m-0">
              {/* CARD*/}
              <div className="col-8 py-0 px-2 mt-4">
                <div className="row">
                  <div className="col-3">
                    <img
                      src={product.p_image}
                      class="card-img-top border-image-pill shadow-lg"
                    />
                  </div>
                  <div className="col-9 shadow-lg rounded-4 bg-light">
                    <div class="px-3">
                      <div class="d-flex mt-3 fw-bold fs-5">
                        {product.p_title}
                      </div>
                      <div class="d-flex fw-semibold fs-3 text-danger"></div>
                      <div class="card-text text-secondary mt-2 pb-3 fw-semibold">
                        {product.p_detail}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* END CARD*/}
              {/* CARD*/}
              <div className="col-4 py-0 ps-4 mt-4">
                <div class="p-3 shadow-lg rounded-4 bg-light">
                  <div class="d-flex mt-2 fw-bold font-6 border-bottom border-2">
                    {product.p_id}
                  </div>
                  <div class="d-flex fw-semibold fs-3 text-danger">
                    <i class="bi bi-currency-bitcoin"></i>4000/สูตร
                  </div>

                  <button type="button" class="btn btn-primary w-100 mt-2">
                    Confirm
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
