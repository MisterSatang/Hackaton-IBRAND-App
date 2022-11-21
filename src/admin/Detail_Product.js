import { Fragment, useState, useEffect } from "react";

import styled from "styled-components";
import Sidebar from "./component/Sidebar";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

export function Detail_Product({ className }) {
  let { tran_id } = useParams();
  const [transaction, settransaction] = useState([]);
  const [product, setproduct] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("status"));
  const [admin, setAdmin] = useState(parseInt(localStorage.getItem("admin")));
  const [confriminator, setConfriminator] = useState('true');
  const [ofers, setOfers] = useState([]);
  const [test, setTest] = useState([]);
  const [details, setdetail] = useState("");

  if (!token) {
    window.location.href = "/login";
  }

  if (admin != 1) {
    window.location.href = "/";
  }

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
    if (confriminator == 'true') {
      console.log(ofers, test);
      axios.put(`http://localhost:8000/transaction/update/${transaction._id}?update=offer_price`, {
        value: ofers,
      })
      axios.put(`http://localhost:8000/transaction/update/${transaction._id}?update=testing_price`, {
        value: test,
      })
      axios.put(`http://localhost:8000/transaction/update/${transaction._id}?update=status_user`, {
        value: 'confirm',
      })
      axios.put(`http://localhost:8000/transaction/update/${transaction._id}?update=step`, {
        value: 2,
      }).then((response) => {
        console.log(response);
      }).catch((error) => {
        console.log(error);
      });
    } else {
      axios.put(`http://localhost:8000/transaction/update/${transaction._id}?update=qualityComment_factory`, {
        value: details,
      })
      axios.put(`http://localhost:8000/transaction/update/${transaction._id}?update=status_user`, {
        value: 'fail',
      })
      axios.put(`http://localhost:8000/transaction/update/${transaction._id}?update=status`, {
        value: 'fail',
      }).then((response) => {
        console.log(response);
      }).catch((error) => {
        console.log(error);
      });
    }
  }

  return (
    <Fragment>
      <div className={className}>
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
            <div className="col bg-body-purple p-0">
              <div className="fs-2 fw-bold mt-5 ms-5">Detail Product</div>
              <div className="fs-4 fw-bold ms-5">{transaction._id}</div>
              <div className="container-fluid">
                <div className="row p-4">
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
              <div className="container-fluid">
                {
                  transaction.qualityComment_customer ? (<div class="px-4">
                    <div class="d-flex mt-3">
                      <span class="badge bg-danger fs-5">หมายเหตุ</span>
                      <span class="border-bottom border-danger border-3 mb-3 fs-5 w-100 ">
                        {" "}
                      </span>
                    </div>
                    <div class="card-text text-secondary mt-3 fw-semibold">
                      {transaction.qualityComment_customer}
                    </div>
                  </div>) : null
                }
              </div>
              <div className="p-3 ps-5 ms-4">
                <div className="form-check fs-4">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    defaultChecked
                    value={true}
                    onChange={e => setConfriminator(e.target.value)}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Confirm
                  </label>
                </div>
                <div className="input-group w-20rem ps-5 py-3">
                  <input
                    type="number"
                    className="form-control"
                    aria-label="Dollar amount (with dot and two decimal places)"
                    onChange={e => setOfers(e.target.value)}
                  />
                  <span className="input-group-text">
                    <i class="bi bi-currency-bitcoin"></i>
                  </span>
                  <span className="input-group-text fw-semibold">
                    Unit/Price
                  </span>
                </div>
                <div className="input-group w-20rem ps-5 py-3">
                  <input
                    type="number"
                    className="form-control"
                    aria-label="Dollar amount (with dot and two decimal places)"
                    onChange={e => setTest(e.target.value)}
                  />
                  <span className="input-group-text">
                    <i class="bi bi-currency-bitcoin"></i>
                  </span>
                  <span className="input-group-text fw-semibold">
                    Testing Price
                  </span>
                </div>

                <div className="form-check fs-4">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    value={false}
                    onChange={e => setConfriminator(e.target.value)}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    Not Confirm
                  </label>
                </div>
                <div className="mx-4 px-3 my-3">
                  <div className="d-flex fs-5 fw-bold text-uppercase">
                    รายละเอียด
                  </div>
                  <div class="form-outline mt-2">
                    <textarea
                      class="form-control"
                      id="textAreaExample"
                      rows="4"
                      onChange={e => setdetail(e.target.value)}
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-between my-4 mx-4 mb-5 px-3">
                <div className="d-flex">
                  <button type="button" class="btn btn-primary px-5 mt-4">
                    <i class="me-3 bi bi-arrow-left-circle-fill"></i>Back
                  </button>
                </div>
                <div className="d-flex">
                  <Link to="/tb_product">
                    <button type="button" class="btn btn-primary px-5 mt-4" onClick={onClickSend}>
                      Confirm<i class="ms-3 bi bi-arrow-right-circle-fill"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default styled(Detail_Product)``;
