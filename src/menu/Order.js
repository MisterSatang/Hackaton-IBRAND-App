import { Fragment, useState, useEffect } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import axios from "axios";
import Loading from "../component/Loading";
import OrderCard from "../component/OrderCard";
import DonotHave from "../component/DonotHave";

export default function Order() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState("");
  const [token, setToken] = useState(localStorage.getItem("status"));

  useEffect(() => {
    async function getUser() {
      try {
        setLoading(true);
        const user = await axios.get(`http://localhost:8000/transaction/byuser`, {
          headers: {
            token: token
          }
        });
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
      <Navbar onNav="order" />
      <div className="container-fluid pt-4 bg-body-purple">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <div className="border-bottom border-3 pb-2 border-primary">
              <div className="fs-4 fw-bold text-uppercase">
                <i class="bi bi-card-list fs-4 me-2"></i>
                Order
              </div>
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
      <div className="container-fluid bg-body-purple">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <div className="row">
              {user.length > 0 ? (
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                  {user.map((factoryData) => (
                    <OrderCard
                      key={factoryData._id}
                      factory={factoryData}
                    />
                  ))}
                </div>
              ) : (
                <DonotHave />
              )}
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
}
