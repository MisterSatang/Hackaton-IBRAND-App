import { Fragment, useState, useEffect } from "react";

import styled from "styled-components";
import Sidebar from "./component/Sidebar";
import Table from "./component/Table";
import axios from "axios";
import Loading from "../component/Loading";

export function TB_7_Pays({ className }) {
  const [token, setToken] = useState(localStorage.getItem("status"));
  const [admin, setAdmin] = useState(parseInt(localStorage.getItem("admin")));
  const [onProduct, setOnProduct] = useState([]);
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
            token: token,
          },
        });
        const onproduct = await axios.get(
          `http://localhost:8000/transaction/byfac/onpay/${user.data.fac_id}`
        );
        setOnProduct(onproduct.data);
        setUser(user.data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    getUser();
  }, []);

  if (loading) return <Loading />;
  return (
    <Fragment>
      <div className={className}>
        <div className="container-fluid bg-body-purple h-screen w-screen">
          <div className="row">
            <Sidebar onNav="pay" />
            <div className="col">
              <div className="fs-2 fw-bold mt-5 mb-3 ms-5">On Pays</div>
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
                  {onProduct.length > 0 ? (
                    <>
                      {onProduct.map((productData) => (
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
export default styled(TB_7_Pays)``;
