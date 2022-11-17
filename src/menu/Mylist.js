import { Fragment, useState, useEffect } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Card from "../component/Card";
import axios from "axios";

export default function Mylist() {
  const [factory, setFactory] = useState([]);
  const [user, setUser] = useState('');

  useEffect(() => {
    async function getfactory() {
      const factory = await axios.get
        (`http://localhost:8000/factory/watchlist?search=${user[0].watchlist}`);
      setFactory(factory.data);
    }
    getfactory();
  }, [user]);

  useEffect(() => {
    async function getUser() {
      const user = await axios.get
        (`http://localhost:8000/user/1`);
      setUser(user.data);
    }
    getUser();
  }, []);

  return (
    <Fragment>
      <Navbar />
      <div className="container-fluid pt-4 bg-body-purple">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <div className="border-bottom border-3 pb-2 border-primary">
              <div className="fs-4 fw-bold text-uppercase">
                <i class="bi bi-heart-fill fs-5 me-2 text-danger"></i>
                Mylist
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
              {
                factory.length > 0 ? (
                  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {factory.map((factoryData) => (
                      <Card key={factoryData.fac_id} factory={factoryData} watchlist={user[0].watchlist} />
                    ))}
                  </div>
                ) : (
                  <div>No Factory Displays....</div>
                )
              }
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}
