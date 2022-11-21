import { Fragment, useState, useEffect } from "react";

import styled from "styled-components";
import Sidebar from "./component/Sidebar";
import Table from "./component/Table";
import axios from "axios";
import Loading from "../component/Loading";

export function Admin({ className }) {
  const [token, setToken] = useState(localStorage.getItem("status"));
  const [admin, setAdmin] = useState(parseInt(localStorage.getItem("admin")));
  const [onProduct, setOnProduct] = useState([]);
  const [onTesting, setOnTesting] = useState([]);
  const [onTesting_2, setOnTesting_2] = useState([]);
  const [onOffer, setOnoffer] = useState([]);
  const [onPackaging, setOnPackaging] = useState([]);
  const [onProduce, setOnProduce] = useState([]);
  const [onFDA, setOnFDA] = useState([]);
  const [onPays, setOnPays] = useState([]);
  const [onDeliver, setOnDeliver] = useState([]);
  const [allProduct, setAllProduct] = useState([]);
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  if (!token) {
    window.location.href = "/login";
  }

  if (admin != 1) {
    window.location.href = "/";
  }

  useEffect(() => {
    async function getUser() {
      try {
        setLoading(true);
        const user = await axios.get(`http://localhost:8000/user/getuser`, {
          headers: {
            token: token
          }
        });
        const onproduct = await axios.get(
          `http://localhost:8000/transaction/byfac/onproduct/${user.data.fac_id}`
        );
        const ontesting = await axios.get(
          `http://localhost:8000/transaction/byfac/ontesting/${user.data.fac_id}`
        );
        const ontesting_2 = await axios.get(
          `http://localhost:8000/transaction/byfac/ontesting_2/${user.data.fac_id}`
        ); const offer = await axios.get(
          `http://localhost:8000/transaction/byfac/onoffer/${user.data.fac_id}`
        );
        const packaging = await axios.get(
          `http://localhost:8000/transaction/byfac/onpakaging/${user.data.fac_id}`
        );
        const FDA = await axios.get(
          `http://localhost:8000/transaction/byfac/onFDA/${user.data.fac_id}`
        );
        const produce = await axios.get(
          `http://localhost:8000/transaction/byfac/onproduce/${user.data.fac_id}`
        );
        const pays = await axios.get(
          `http://localhost:8000/transaction/byfac/onpay/${user.data.fac_id}`
        );
        const deliver = await axios.get(
          `http://localhost:8000/transaction/byfac/ondeliver/${user.data.fac_id}`
        );
        const allproduct = await axios.get(
          `http://localhost:8000/transaction/byfac/${user.data.fac_id}`
        );
        setOnProduct(onproduct.data);
        setOnTesting(ontesting.data);
        setOnTesting_2(ontesting_2.data);
        setOnoffer(offer.data);
        setOnPackaging(packaging.data);
        setOnFDA(FDA.data);
        setOnProduce(produce.data);
        setOnPays(pays.data);
        setOnDeliver(deliver.data);
        setAllProduct(allproduct.data);
        setUser(user.data);
      } catch (e) {
        console.error(e);

      } finally {
        setLoading(false);
      }
    }
    getUser();
  }, []);

  if (loading) return <Loading />

  return (
    <Fragment>
      <div className={className}>
        <div className="container-fluid bg-body-purple h-screen w-screen">
          <div className="row">
            <Sidebar />
            <div className="col">
              <div className="fs-2 fw-bold mt-5 ms-5 border-bottom border-3 border-primary">
                จัดการลูกค้าทั้งหมด
              </div>
              <div className="row p-0">
                <div className="col-xl-3 col-lg-4 col-md-5 col-12 mt-3 p-3">
                  <div className="btn btn-primary p-0 w-100 rounded-5 ">
                    <div className="rounded-cardMenuAdmin bg-dark-20 text-center p-3 text-light fw-semibold">
                      On Product
                    </div>
                    <div className="text-center p-3 text-light ">
                      <div className="row d-flex align-items-center">
                        <div className="col-4">total :</div>
                        <div className="col-4 fs-2 fw-bold">{onProduct.length}</div>
                        <div className="col-4">order</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-5 col-12 mt-3 p-3">
                  <div className="btn btn-primary p-0 w-100 rounded-5 ">
                    <div className="rounded-cardMenuAdmin bg-dark-20 text-center p-3 text-light fw-semibold">
                      On Send Testing
                    </div>
                    <div className="text-center p-3 text-light ">
                      <div className="row d-flex align-items-center">
                        <div className="col-4">total :</div>
                        <div className="col-4 fs-2 fw-bold">{onTesting.length}</div>
                        <div className="col-4">order</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-5 col-12 mt-3 p-3">
                  <div className="btn btn-primary p-0 w-100 rounded-5 ">
                    <div className="rounded-cardMenuAdmin bg-dark-20 text-center p-3 text-light fw-semibold">
                      On Testing
                    </div>
                    <div className="text-center p-3 text-light ">
                      <div className="row d-flex align-items-center">
                        <div className="col-4">total :</div>
                        <div className="col-4 fs-2 fw-bold">{onTesting_2.length}</div>
                        <div className="col-4">order</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-5 col-12 mt-3 p-3">
                  <div className="btn btn-primary p-0 w-100 rounded-5 ">
                    <div className="rounded-cardMenuAdmin bg-dark-20 text-center p-3 text-light fw-semibold">
                      On Offer
                    </div>
                    <div className="text-center p-3 text-light ">
                      <div className="row d-flex align-items-center">
                        <div className="col-4">total :</div>
                        <div className="col-4 fs-2 fw-bold">{onOffer.length}</div>
                        <div className="col-4">order</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-5 col-12 mt-3 p-3">
                  <div className="btn btn-primary p-0 w-100 rounded-5 ">
                    <div className="rounded-cardMenuAdmin bg-dark-20 text-center p-3 text-light fw-semibold">
                      On Packaging
                    </div>
                    <div className="text-center p-3 text-light ">
                      <div className="row d-flex align-items-center">
                        <div className="col-4">total :</div>
                        <div className="col-4 fs-2 fw-bold">{onPackaging.length}</div>
                        <div className="col-4">order</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-5 col-12 mt-3 p-3">
                  <div className="btn btn-primary p-0 w-100 rounded-5 ">
                    <div className="rounded-cardMenuAdmin bg-dark-20 text-center p-3 text-light fw-semibold">
                      On FDA
                    </div>
                    <div className="text-center p-3 text-light ">
                      <div className="row d-flex align-items-center">
                        <div className="col-4">total :</div>
                        <div className="col-4 fs-2 fw-bold">{onFDA.length}</div>
                        <div className="col-4">order</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-5 col-12 mt-3 p-3">
                  <div className="btn btn-primary p-0 w-100 rounded-5 ">
                    <div className="rounded-cardMenuAdmin bg-dark-20 text-center p-3 text-light fw-semibold">
                      On Produce
                    </div>
                    <div className="text-center p-3 text-light ">
                      <div className="row d-flex align-items-center">
                        <div className="col-4">total :</div>
                        <div className="col-4 fs-2 fw-bold">{onProduce.length}</div>
                        <div className="col-4">order</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-5 col-12 mt-3 p-3">
                  <div className="btn btn-primary p-0 w-100 rounded-5 ">
                    <div className="rounded-cardMenuAdmin bg-dark-20 text-center p-3 text-light fw-semibold">
                      On Pays
                    </div>
                    <div className="text-center p-3 text-light ">
                      <div className="row d-flex align-items-center">
                        <div className="col-4">total :</div>
                        <div className="col-4 fs-2 fw-bold">{onPays.length}</div>
                        <div className="col-4">order</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-5 col-12 mt-3 p-3">
                  <div className="btn btn-primary p-0 w-100 rounded-5 ">
                    <div className="rounded-cardMenuAdmin bg-dark-20 text-center p-3 text-light fw-semibold">
                      On Deliveries
                    </div>
                    <div className="text-center p-3 text-light ">
                      <div className="row d-flex align-items-center">
                        <div className="col-4">total :</div>
                        <div className="col-4 fs-2 fw-bold">{onDeliver.length}</div>
                        <div className="col-4">order</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="input-group flex-nowrap my-3">
                <span class="input-group-text bg-warning" id="addon-wrapping">
                  <i class="bi bi-search"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Order Number"
                />
              </div>
              <table class="table ">
                <thead className="bg-navbar text-light">
                  <tr>
                    <th scope="col">Order Number</th>
                    <th scope="col">Order Date</th>
                    <th scope="col">Status</th>
                    <th scope="col">Owner</th>
                    <th scope="col">View Detail</th>
                  </tr>
                </thead>
                <tbody>
                  {allProduct.length > 0 ? (
                    <>
                      {allProduct.map((productData) => (
                        <Table key={productData._id} product={productData} />
                      ))}
                    </>
                  ) : (
                    <></>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default styled(Admin)``;
