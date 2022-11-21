import { Fragment, useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Timeline from "../component/Timeline";
import { useParams } from 'react-router-dom';
import axios from "axios";
import { Link } from "react-router-dom";

export default function Wait() {
  let { fac_id, status, step } = useParams();
  const [factory, setFactory] = useState([]);

  console.log(fac_id, status);
  useEffect(() => {
    async function getfactory() {
      const factory = await axios.get(
        `http://localhost:8000/factory/search/${fac_id}`
      );
      setFactory(factory.data);
    }
    getfactory();
  }, []);

  useEffect(() => {
    async function getfactory() {
      window.scrollTo(0, 0)
    }
    getfactory();
  }, []);

  console.log(factory);

  return (
    <Fragment>
      <Navbar />
      <div className="container-fluid pt-4 bg-body-purple">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <div className="d-flex justify-content-between border-bottom border-primary border-2 pb-2">
              <div className="d-flex fs-4 fw-bold text-uppercase">
                <i class="bi bi-buildings-fill fs-4 me-2"></i>
                {factory.title}
              </div>
              <div className="d-flex fs-4 fw-bold text-uppercase">
                {`No. ${factory._id}`}
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
            <div className="bg-warning p-4 rounded-4 mb-4">
              <div className="d-flex fs-4 fw-bold text- justify-content-center">
                <div class="spinner-border me-3" role="status"></div>
                Waiting for confirmation from factory ...
              </div>
              {
                step == 1 ? <div className="d-flex fs-5 text- justify-content-center">
                  กำลังตรวจสอบสูตร ใช้เวลาประมาณ 10-24 ชม.
                </div> : step == 2 ? <div className="d-flex fs-5 text- justify-content-center">
                  ทางโรงงานกำลังจัดส่ง testing product ใช้เวลาประมาณ 2-3 วัน
                </div> : step == 4 ? <div className="d-flex fs-5 text- justify-content-center">
                  ทางโรงงานกำลังยืนยันการมัดจำ ใช้เวลาประมาณ 1-2 ชั่วโมง
                </div> : step == 5 ? <div className="d-flex fs-5 text- justify-content-center">
                  กำลังตรวจสอบ Packaging ใช้เวลาประมาณ 1-2 วัน
                </div> : step == 6 ? <div className="d-flex fs-5 text- justify-content-center">
                  การขออนุมัติ อ.ย. ใช้เวลาประมาณ 7-14 วันทำการ
                </div> : step == 7 ? <div className="d-flex fs-5 text- justify-content-center">
                  เริ่มกระบวนการผลิต ใช้เวลาประมาณ 14-20 วันทำการ
                </div> : step == 8 ? <div className="d-flex fs-5 text- justify-content-center">
                  รอการตรวจสอบการชำระเงิน ใช้เวลาประมาณ 30 นาที
                </div> : step == 9 ? <div className="d-flex fs-5 text- justify-content-center">
                  บริษัทกำลังเตรียมจัดส่งสินค้า ใช้เวลาประมาณ 1-3 วันทำการ
                </div> : null
              }

            </div>
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <Link to="/order">
                  <button type="button" class="btn btn-primary px-5 mt-4">
                    <i class="me-3 bi bi-arrow-left-circle-fill"></i>Back
                  </button>
                </Link>
              </div>
              <div className="d-flex"></div>
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}
