import { Fragment, useState, useEffect } from "react";

import styled from "styled-components";
import Sidebar from "./component/Sidebar";
import Table from "./component/Table";
import axios from "axios";
import Loading from "../component/Loading";
import CardOrder from "./component/CardOrder";

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
            <Sidebar onNav="home" />
            <div className="col">
              <div className="fs-2 fw-bold mt-5 ms-5 border-bottom border-3 border-primary">
                จัดการลูกค้าทั้งหมด
              </div>
              <div className="row p-0">
                <CardOrder step={onProduct} header={"On Product"} />
                <CardOrder step={onTesting} header={"On Send Testing"} />
                <CardOrder step={onTesting_2} header={"On Testing"} />
                <CardOrder step={onOffer} header={"On Offer"} />
                <CardOrder step={onPackaging} header={"On Packaging"} />
                <CardOrder step={onFDA} header={"On FDA"} />
                <CardOrder step={onProduce} header={"On Produce"} />
                <CardOrder step={onPays} header={"On Pays"} />
                <CardOrder step={onDeliver} header={"On Deliveries"} />
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
