import { Fragment, useState, useEffect } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Timeline from "../component/Timeline";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductCard from "../component/ProductCard";
import Detail_productQality from "../component/Detail_productQality";
import { Link } from "react-router-dom";

export default function QualityProduct() {
  let { fac_id, product_id } = useParams();
  const [token, setToken] = useState(localStorage.getItem("status"));
  const [factory, setFactory] = useState([]);
  const [image, setimage] = useState([]);
  const [product, setproduct] = useState([]);
  const [detail, setdetail] = useState("");
  const x = parseInt(product_id.slice(-1));
  const [user, setUser] = useState("");

  useEffect(() => {
    async function getfactory() {
      const factory = await axios.get(
        `http://localhost:8000/factory/search/${fac_id}`
      );
      setFactory(factory.data);
      setimage(factory.data.image)
      setproduct(factory.data.product)
    }
    getfactory();
  }, [fac_id, product_id]);

  if (!token) {
    window.location.href = "/login";
  }

  useEffect(() => {
    async function getUser_auth() {
      const user = await axios.get(`http://localhost:8000/user/getuser`, {
        headers: {
          token: token
        }
      });
      setUser(user.data);
    }
    getUser_auth();
  }, []);

  useEffect(() => {
    async function getfactory() {
      window.scrollTo(0, 0)
    }
    getfactory();
  }, []);

  const onClickSend = () => {
    console.log(detail);
    console.log(product[x - 1]);
    axios.post("http://localhost:8000/transaction", {
      product: product[x - 1],
      qualityComment_customer: detail,
      step: 1,
      user_id: user._id,
      user_name: user.first_name,
      fac_id: fac_id,
      fac_title: factory.title,
      status: "wating"
    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
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
                {factory.title}
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
            {/* <div className="bg-danger p-4 rounded-4 mb-4">
              <div className="d-flex fs-4 fw-bold text-light justify-content-center">
                สูตรมีความผิดพลาด กรุณาเเก้ไขสูตรใหม่
              </div>
              <div className="d-flex fs-6 text-light justify-content-center mb-4">
                ช่วยลดการเกิดสิวที่ต้นเหตุ เช่น อนุมูลอิสระ ความมันส่วนเกิน
                เชื้อแบคทีเรียก่อสิว พร้อมผลัดเซลล์ผิวอย่างอ่อนโยน
                ช่วยให้ผิวเรียบเนียน กระจ่างใสขึ้น รวมถึงมีสารสกัดจากใบบัวบก
                ช่วยเพิ่มความชุ่มชื้นไม่ทำให้ผิวแห้งลอก
              </div>
            </div> */}
            <div className="d-flex fs-5 fw-bold text-uppercase">
              Step 1 : Select quality Product
            </div>
            <div className="row p-0 m-0">
              {product.length > 0 ? (
                <>
                  {product.map((factoryData) => (
                    <ProductCard key={factoryData.p_id} product={factoryData} fac_id={fac_id} />
                  ))}
                </>
              ) : (
                <div></div>
              )}
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>

      <div className="container-fluid pt-5 bg-body-purple">
        <div className="row">
          <div className="col-1"></div>

          <div className="col-10">
            {product.length > 0 ? (
              <>
                <Detail_productQality product={product[x - 1]} />
              </>
            ) : (
              <div></div>
            )}
            <div className="d-flex fs-5 fw-bold text-uppercase mt-4">
              รายละเอียดเพิ่มเติม (ปรับเเต่งสูตร)
            </div>
            <div class="form-outline mt-2">
              <textarea
                class="form-control"
                id="textAreaExample"
                rows="4"
                onChange={e => setdetail(e.target.value)}
              ></textarea>
              <div className="d-flex justify-content-between mt-4">
                <div className="d-flex"></div>
                <div className="d-flex">
                  <Link to={`/wait/wating/${factory.fac_id}`}>
                    <button type="button" class="btn btn-primary px-5 mt-4" onClick={onClickSend}>
                      SEND<i class="ms-3 bi bi-arrow-right-circle-fill"></i>
                    </button>
                  </Link>
                </div>
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
