import { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Menubar({ onNav }) {
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
  const [sumOrder, SetSumOrder] = useState([]);

  const x = () => {
    localStorage.clear();
  };

  useEffect(() => {
    async function getUser() {
      try {
        const user = await axios.get(`http://localhost:8000/user/getuser`, {
          headers: {
            token: token,
          },
        });
        const onproduct = await axios.get(
          `http://localhost:8000/transaction/byfac/onproduct/${user.data.fac_id}`
        );
        const ontesting = await axios.get(
          `http://localhost:8000/transaction/byfac/ontesting/${user.data.fac_id}`
        );
        const ontesting_2 = await axios.get(
          `http://localhost:8000/transaction/byfac/ontesting_2/${user.data.fac_id}`
        );
        const offer = await axios.get(
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
        const sum =
          onProduct.length +
          onTesting.length +
          onTesting_2.length +
          onOffer.length +
          onPackaging.length +
          onFDA.length +
          onProduce.length +
          onPays.length +
          onDeliver.length;
        SetSumOrder(sum);
      } catch (e) {
        console.error(e);
      }
    }
    getUser();
  }, []);

  return (
    <Fragment>
      <div className="sidebar">
        <div className="p-0 h">
          <div className="p-4 text-light text-center fw-bolder fs-4">
            IBRAND
          </div>
          <Link to="/admin" style={{ textDecoration: "none" }}>
            <div
              className={`text-light ps-4 py-3 fs-5 ${
                onNav == "home" ? "bg-dark-20" : ""
              }`}
            >
              <i class="bi bi-house-fill me-2"></i> Home
              <span className="ms-2 bg-outline-light text-warning fw-semibold">
                ทั้งหมด {sumOrder} รายการ
              </span>
            </div>
          </Link>
          <Link to="/tb_product" style={{ textDecoration: "none" }}>
            <div
              className={`text-light ps-4 py-3 fs-5 ${
                onNav == "product" ? "bg-dark-20" : ""
              }`}
            >
              <div className="d-flex justify-content-between">
                <div>
                  <i class="bi bi-1-circle-fill me-2"></i> On Product
                </div>
                <div className="d-flex me-3">
                  {onProduct.length > 0 ? (
                    <span class="badge bg-danger">+ {onProduct.length}</span>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </Link>
          <Link to="/tb_testing" style={{ textDecoration: "none" }}>
            <div
              className={`text-light ps-4 py-3 fs-5 ${
                onNav == "sendTesting" ? "bg-dark-20" : ""
              }`}
            >
              <div className="d-flex justify-content-between">
                <div>
                  <i class="bi bi-1-circle-fill me-2"></i> On Send Testing
                </div>
                <div className="d-flex me-3">
                  {onTesting.length > 0 ? (
                    <span class="badge bg-danger">+ {onTesting.length}</span>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </Link>
          <Link to="/tb_testing_2" style={{ textDecoration: "none" }}>
            <div
              className={`text-light ps-4 py-3 fs-5 ${
                onNav == "testing" ? "bg-dark-20" : ""
              }`}
            >
              <div className="d-flex justify-content-between">
                <div>
                  <i class="bi bi-1-circle-fill me-2"></i> On Testing
                </div>
                <div className="d-flex me-3">
                  {onTesting_2.length > 0 ? (
                    <span class="badge bg-danger">+ {onTesting_2.length}</span>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </Link>
          <Link to="/tb_offer" style={{ textDecoration: "none" }}>
            <div
              className={`text-light ps-4 py-3 fs-5 ${
                onNav == "offer" ? "bg-dark-20" : ""
              }`}
            >
              <div className="d-flex justify-content-between">
                <div>
                  <i class="bi bi-1-circle-fill me-2"></i> On Offer
                </div>
                <div className="d-flex me-3">
                  {onOffer.length > 0 ? (
                    <span class="badge bg-danger">+ {onOffer.length}</span>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </Link>
          <Link to="/tb_packaging" style={{ textDecoration: "none" }}>
            <div
              className={`text-light ps-4 py-3 fs-5 ${
                onNav == "packaging" ? "bg-dark-20" : ""
              }`}
            >
              <div className="d-flex justify-content-between">
                <div>
                  <i class="bi bi-1-circle-fill me-2"></i> On Packaging
                </div>
                <div className="d-flex me-3">
                  {onPackaging.length > 0 ? (
                    <span class="badge bg-danger">+ {onPackaging.length}</span>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </Link>
          <Link to="/tb_FDA" style={{ textDecoration: "none" }}>
            <div
              className={`text-light ps-4 py-3 fs-5 ${
                onNav == "fda" ? "bg-dark-20" : ""
              }`}
            >
              <div className="d-flex justify-content-between">
                <div>
                  <i class="bi bi-1-circle-fill me-2"></i> On FDA
                </div>
                <div className="d-flex me-3">
                  {onFDA.length > 0 ? (
                    <span class="badge bg-danger">+ {onFDA.length}</span>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </Link>

          <Link to="/tb_produce" style={{ textDecoration: "none" }}>
            <div
              className={`text-light ps-4 py-3 fs-5 ${
                onNav == "produce" ? "bg-dark-20" : ""
              }`}
            >
              <div className="d-flex justify-content-between">
                <div>
                  <i class="bi bi-1-circle-fill me-2"></i> On Produce
                </div>
                <div className="d-flex me-3">
                  {onProduce.length > 0 ? (
                    <span class="badge bg-danger">+ {onProduce.length}</span>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </Link>

          <Link to="/tb_pays" style={{ textDecoration: "none" }}>
            <div
              className={`text-light ps-4 py-3 fs-5 ${
                onNav == "pay" ? "bg-dark-20" : ""
              }`}
            >
              <div className="d-flex justify-content-between">
                <div>
                  <i class="bi bi-1-circle-fill me-2"></i> On Pays
                </div>
                <div className="d-flex me-3">
                  {onPays.length > 0 ? (
                    <span class="badge bg-danger">+ {onPays.length}</span>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </Link>
          <Link to="/tb_deliveries" style={{ textDecoration: "none" }}>
            <div
              className={`text-light ps-4 py-3 fs-5 ${
                onNav == "deliveries" ? "bg-dark-20" : ""
              }`}
            >
              <div className="d-flex justify-content-between">
                <div>
                  <i class="bi bi-1-circle-fill me-2"></i>On Deliveries
                </div>
                <div className="d-flex me-3">
                  {onDeliver.length > 0 ? (
                    <span class="badge bg-danger">+ {onDeliver.length}</span>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </Link>
          <Link to="/login" onClick={x} style={{ textDecoration: "none" }}>
            <div className="text-light ps-4 py-4 fs-5 border-top border-light">
              <i class="bi bi-door-open-fill"></i> Logout
            </div>
          </Link>
        </div>
      </div>
    </Fragment>
  );
}
