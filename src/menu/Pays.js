import styled from "styled-components";
import Navbar from "../component/Navbar";
import Timeline from "../component/Timeline";
import { Fragment, useState, useEffect } from "react";
import Footer from "../component/Footer";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import axios from "axios";

export function Pays({ className }) {
  let { tran_id } = useParams();
  const [transaction, settransaction] = useState([]);
  const [product, setproduct] = useState([]);
  const [location, setlocation] = useState("");
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

  const sendPay = () => {
    axios.put(`http://localhost:8000/transaction/update/${transaction._id}?update=status_user`, {
      value: "wating",
    })
    axios.put(`http://localhost:8000/transaction/update/${transaction._id}?update=status`, {
      value: "confirm",
    })
    axios.put(`http://localhost:8000/transaction/update/${transaction._id}?update=location_customer`, {
      value: location,
    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });

  }
  console.log(location);

  return (
    <Fragment>
      <div className={className}>
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
                  {transaction._id}
                </div>
              </div>
            </div>
            <div className="col-1"></div>
          </div>
        </div>
        <Timeline step={transaction.step} />
        <div className="container-fluid pt-4 bg-body-purple">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-10">
              <div className="d-flex fs-5 fw-bold text-uppercase">
                Step 8 : Pays
              </div>
              <div className="row p-0 m-0">
                {/* CARD*/}
                <div className="col-8 py-0 px-2 mt-4">
                  <div className="row">
                    <div className="col-3">
                      <img
                        src={product.p_image}
                        class="card-img-top border-image-pill shadow-lg h-100"
                      />
                    </div>
                    <div className="col-9 shadow-lg rounded-4 bg-light">
                      <div class="px-3">
                        <div class="d-flex mt-3">
                          <span className="fs-5 fw-bold">{`สูตร : ${product.p_title}`}</span>
                          <span className="ms-4 fs-5 fw-bold text-danger">
                            <i class="bi bi-currency-bitcoin"></i>{`${transaction.offer_price}/ชิ้น`}
                          </span>
                        </div>
                        <div class="d-flex fw-semibold fs-3 text-danger"></div>
                        <div class="card-text text-secondary mt-2 pb-3 fw-semibold">
                          {product.p_detail}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5">
                    <span className="mt-5 fs-5 mb-3 fw-bold text-uppercase">
                      My Packaging
                    </span>
                    <span className="ms-3 border-2 border-bottom border-primary">
                      <a href={transaction.file_pakaging} target="_blank">
                        <span class="btn badge fw-semibold fs-5 text-primary" href={transaction.file_pakaging}>
                          <i class="bi bi-box-arrow-up-right me-2"></i>Click Open Link Packaging
                        </span>
                      </a>
                    </span>
                  </div>
                </div>
                {/* END CARD*/}
                {/* CARD*/}
                <div className="col-4 py-0 ps-4 mt-4">
                  <div class="p-4 shadow-lg rounded-4 bg-light">
                    <div class="d-flex mt-2 fw-bold font-6 border-bottom border-2">
                      {transaction._id}
                    </div>
                    <div className="mt-3 fw-semibold">
                      กรอกที่อยู่/จัดส่งสินค้า
                    </div>
                    <div class="form-outline mt-2">
                      <textarea
                        class="form-control"
                        id="textAreaExample"
                        rows="4"
                        onChange={e => setlocation(e.target.value)}
                      ></textarea>
                    </div>
                    <div className="row p-2 pb-0 fs-6">
                      <div className="col-6">ราคาต่อหน่วย</div>
                      <div className="col-6">
                        <div className="d-flex justify-content-between">
                          <div className="d-flex">{transaction.offer_price}</div>
                          <div className="d-flex">บาท</div>
                        </div>
                      </div>
                    </div>
                    <div className="row p-2 pb-0 fs-6">
                      <div className="col-6">จำนวน</div>
                      <div className="col-6">
                        <div className="d-flex justify-content-between">
                          <div className="d-flex">{transaction.count}</div>
                          <div className="d-flex">ชิ้น</div>
                        </div>
                      </div>
                    </div>
                    <div className="row p-2 pb-0 fs-6">
                      <div className="col-6">ราคาทั้งหมด</div>
                      <div className="col-6">
                        <div className="d-flex justify-content-between">
                          <div className="d-flex">{transaction.total_price}</div>
                          <div className="d-flex">บาท</div>
                        </div>
                      </div>
                    </div>
                    <div className="row p-2 pb-0 fs-6">
                      <div className="col-6">วางมัดจำ 50%</div>
                      <div className="col-6">
                        <div className="d-flex justify-content-between">
                          <div className="d-flex">{transaction.total_offer}</div>
                          <div className="d-flex">บาท</div>
                        </div>
                      </div>
                    </div>

                    <div className="row p-2 my-3 mx-1 fw-semibold fs-6 border-3 border rounded-3">
                      <div className="col-6">ชำระเงินอีก</div>
                      <div className="col-6">
                        <div className="d-flex justify-content-between">
                          <div className="d-flex">{transaction.total_offer}</div>
                          <div className="d-flex">บาท</div>
                        </div>
                      </div>
                    </div>
                    <Link to={`/wait/wating/${transaction.fac_id}/${transaction.step}`}>
                      <button type="button" class="btn btn-danger w-100 mt-2" onClick={sendPay}>
                        <i class="bi bi-wallet text-light me-2"></i>Pay
                      </button>
                    </Link>
                  </div>
                </div>
                {/* END CARD*/}
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
export default styled(Pays)`
  .card {
  }
`;
