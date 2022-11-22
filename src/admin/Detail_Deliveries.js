import { Fragment, useState, useEffect } from "react";

import styled from "styled-components";
import Sidebar from "./component/Sidebar";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

export function Detail_Deliveries({ className }) {
  let { tran_id, pak_id } = useParams();
  const [transaction, settransaction] = useState([]);
  const [product, setproduct] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("status"));
  const [deliver, setdeliver] = useState("")
  const [admin, setAdmin] = useState(parseInt(localStorage.getItem("admin")));

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
    axios.put(`http://localhost:8000/transaction/update/${transaction._id}?update=status`, {
      value: "confirm",
    })
    axios.put(`http://localhost:8000/transaction/update/${transaction._id}?update=status_user`, {
      value: "confirm",
    })
    axios.put(`http://localhost:8000/transaction/update/${transaction._id}?update=deliver_code`, {
      value: deliver,
    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
  }
  return (
    <Fragment>
      <div className={className}>
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
            <div className="col bg-body-purple p-0">
              <div className="fs-2 fw-bold mt-5 ms-5">Detail Testing</div>
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
              </div>
              <div className="container-fluid">
                <div class="px-4">
                  <div class="d-flex my-3">
                    <span className="fs-4 fw-bold">Packaging</span>
                    <span className="border-2 border-bottom border-primary">
                      <a href={transaction.file_pakaging} target="_blank">
                        <span class="btn badge fw-semibold fs-5 text-primary" href={transaction.file_pakaging}>
                          <i class="bi bi-box-arrow-up-right me-2"></i>Click Open Link Packaging
                        </span>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="container-fluid mt-4">
                <div class="px-4">
                  <div class="d-flex my-3">
                    <div className="input-group mb-3">
                      <span
                        className="input-group-text fs-5 fw-bold bg-warning"
                        id="inputGroup-sizing-default"
                      >
                        Delivery Number
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                        placeholder="please enter delivery number xxxxxxxxx"
                        onChange={e => setdeliver(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-between my-4 mx-4 mb-5 px-3">
                <div className="d-flex mt-4">
                  <Link to="/tb_deliveries">
                    <button type="button" class="btn btn-primary px-5">
                      <i class="me-3 bi bi-arrow-left-circle-fill"></i>Back
                    </button>
                  </Link>
                </div>
                <div className="d-flex mt-4">
                  <Link to="/tb_deliveries">
                    <button type="button" class="btn btn-primary px-5" onClick={onClickSend}>
                      Finish<i class="ms-3 bi bi-arrow-right-circle-fill"></i>
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
export default styled(Detail_Deliveries)``;
