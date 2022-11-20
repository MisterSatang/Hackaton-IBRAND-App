import styled from "styled-components";
import Navbar from "../component/Navbar";
import Timeline from "../component/Timeline";
import { Fragment, useState, useEffect } from "react";
import Footer from "../component/Footer";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import axios from "axios";

export function Pledge({ className }) {
  let { tran_id } = useParams();
  const [transaction, settransaction] = useState([]);
  const [product, setproduct] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("status"));
  const [confriminator, setConfriminator] = useState('true');
  const [count, setcount] = useState(0);

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

  const onClickSend = () => {
    axios.put(`http://localhost:8000/transaction/update/${transaction._id}?update=status_user`, {
      value: "wating",
    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
  }

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
        <Timeline />
        <div className="container-fluid pt-4 bg-body-purple">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-10">
              <div className="d-flex fs-5 fw-bold text-uppercase">
                Step 4 : Pledge
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
                        <div class="d-flex mt-3">
                          <span className="fs-5 fw-bold">{`สูตร : ${product.p_title}`}</span>
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
                  <div class="p-4 shadow-lg rounded-4 bg-light">
                    <div class="d-flex mt-2 fw-bold font-6 border-bottom border-2">
                      {transaction._id}
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
                          <input
                            type="number"
                            className="form-control p-2 me-4"
                            placeholder="กรุณากรอก"
                            onChange={e => setcount(e.target.value)}
                          />

                          <div className="d-flex">ชิ้น</div>
                        </div>
                      </div>
                    </div>
                    <div className="row p-2 pb-0 fs-6">
                      <div className="col-6">ราคาทั้งหมด</div>
                      <div className="col-6">
                        <div className="d-flex justify-content-between">
                          <div className="d-flex">{transaction.offer_price * count}</div>
                          <div className="d-flex">บาท</div>
                        </div>
                      </div>
                    </div>

                    <div className="row p-2 my-3 mx-1 fw-semibold fs-6 border-3 border rounded-3">
                      <div className="col-6">วางมัดจำ 50%</div>
                      <div className="col-6">
                        <div className="d-flex justify-content-between">
                          <div className="d-flex">{(transaction.offer_price * count) / 2}</div>
                          <div className="d-flex">บาท</div>
                        </div>
                      </div>
                    </div>
                    <button type="button" class="btn btn-danger w-100 mt-2">
                      <i class="bi bi-bag-fill text-light me-2"></i>Order
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
      </div>
    </Fragment>
  );
}
export default styled(Pledge)`
  .card {
  }
`;
