import { Fragment, useState, useEffect } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Timeline from "../component/Timeline";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import axios from "axios";

export default function Pretester2_2() {
  let { tran_id } = useParams();
  const [transaction, settransaction] = useState([]);
  const [product, setproduct] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("status"));
  const [confriminator, setConfriminator] = useState('true');

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
      axios.put(`http://localhost:8000/transaction/update/${transaction._id}?update=status`, {
        value: "wating",
      })
      axios.put(`http://localhost:8000/transaction/update/${transaction._id}?update=status_user`, {
        value: "confirm",
      })
      axios.put(`http://localhost:8000/transaction/update/${transaction._id}?update=step`, {
        value: 4,
      }).then((response) => {
        console.log(response);
      }).catch((error) => {
        console.log(error);
      });
      window.location.href = `/pledge/${transaction._id}`
    } else {
      axios.put(`http://localhost:8000/transaction/update/${transaction._id}?update=step`, {
        value: 1,
      })
      window.location.href = `/qualityProduct_fix/${transaction._id}`
    }
  }

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
              Step 3 : Pre Tester ( Confirm Product )
            </div>
            <div className="row my-4">
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
                      <i class="bi bi-currency-bitcoin"></i>{`${transaction.offer_price}/unit`}
                    </span>
                  </div>
                  <div class="d-flex fw-semibold fs-3 text-danger"></div>
                  <div class="card-text text-secondary mt-2 pb-3 fw-semibold">
                    {product.p_detail}
                  </div>
                </div>
              </div>
            </div>
            <div className="p-3 ps-5">
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
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Confirm
                </label>
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
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Not Confirm{" "}
                  <span className="text-danger">* ต้องการเเก้ไขสูตร</span>
                </label>
              </div>
            </div>
            <div className="d-flex justify-content-between mt-4">
              <div className="d-flex"></div>
              <div className="d-flex">
                <button type="button" class="btn btn-primary px-5 mt-4" onClick={onClickSend}>
                  SEND<i class="ms-3 bi bi-arrow-right-circle-fill"></i>
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
