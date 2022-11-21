import styled from "styled-components";
import Navbar from "../component/Navbar";
import Timeline from "../component/Timeline";
import { Fragment, useState, useEffect } from "react";
import Footer from "../component/Footer";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import axios from "axios";
import CardPackaging from "../component/CardPackaging";

export function Packaging_fail({ className }) {
    let { tran_id, pak_id } = useParams();
    const [transaction, settransaction] = useState([]);
    const [product, setproduct] = useState([]);
    const [packaging, setpackaging] = useState([]);
    const [packagingSelect, setpackagingSelect] = useState([]);
    const [link, setlink] = useState("")
    const [token, setToken] = useState(localStorage.getItem("status"));

    useEffect(() => {
        async function getTransaction() {
            const tran = await axios.get(`http://localhost:8000/transaction/find_tranid/${tran_id}`, {
                headers: {
                    token: token
                }
            });
            settransaction(tran.data);
            setproduct(tran.data.product[0]);
            setpackaging(tran.data.product[0].p_pakaging[pak_id - 1]);
        }
        getTransaction();
    }, []);

    const clickSend = () => {
        axios.put(`http://localhost:8000/transaction/update/${transaction._id}?update=status_user`, {
            value: "wating",
        });
        axios.put(`http://localhost:8000/transaction/update/${transaction._id}?update=status`, {
            value: "confirm",
        })
        axios.put(`http://localhost:8000/transaction/update/${transaction._id}?update=file_pakaging`, {
            value: link,
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <Fragment>
            <div className={className}>
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
                <Timeline step={transaction.step} />
                <div className="container-fluid pt-4 bg-body-purple">
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-10">
                            <div className="bg-danger p-4 rounded-4 mb-4">
                                <div className="d-flex fs-4 fw-bold text-light justify-content-center">
                                    กรุณาอัพไฟล์ใหม่ให้ตรงตามเเบบฟอร์ม
                                </div>
                                <div className="d-flex fs-5 text-light justify-content-center">
                                    {`เพิ่มเติม : ${transaction.qualityComment_factory}`}
                                </div>
                            </div>
                            <div className="d-flex fs-5 fw-bold text-uppercase text-danger">
                                Step 5 : แก้ไข้ Packaging
                            </div>
                            <div>
                                <div className="row m-0">

                                    <div className="col-xl-3 col-lg-4 col-md-5 col-12 py-0 px-2 mt-4">
                                        <div className="form-check">
                                            <label className="form-check-label w-100" htmlFor={packaging.pak_id}>
                                                <div className="shadow rounded-4 h-100 position-relative">
                                                    <img
                                                        src={packaging.pak_image}
                                                        class="card-img-top rounded-4 border-image"
                                                    />
                                                    <div class="position-absolute top-0 end-0">
                                                        <input
                                                            className="form-check-input me-2 mt-2 fs-3"
                                                            type="radio"
                                                            name="flexRadioDefault"
                                                            id={packaging.pak_id}
                                                        />
                                                    </div>
                                                </div>
                                            </label>
                                        </div>

                                    </div >

                                </div>
                            </div>
                        </div>
                        <div className="col-1"></div>
                    </div>
                </div>
                <div className="container-fluid pt-4 bg-body-purple">
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-10">
                            <div className="d-flex fs-5 mb-3 fw-bold text-uppercase">
                                You Can Download From<i class="bi bi-caret-down-fill ms-2"></i>
                            </div>
                            <span className="btn fw-semibold bg-navbar text-light p-2 px-4 rounded-pill ">
                                <i class="me-2 bi bi-box-arrow-up-right"></i>แบบฟอร์มการออกเเบบ คลิ๊ก
                            </span>
                            <span className="btn ms-2 fw-semibold bg-navbar text-light p-2 px-4 rounded-pill">
                                <i class="me-2 bi bi-box-arrow-up-right"></i>Ex. Design Pakaging

                            </span>

                            <div className="mt-5">
                                <span className="fs-5 mb-3 fw-bold text-uppercase">
                                    Enter URL (link) Your Desing
                                </span>
                                <div className="input-group mb-3 mt-3">
                                    <span className="input-group-text" id="basic-addon1"><i class="bi bi-link"></i></span>
                                    <input type="text" className="form-control" placeholder="Your Link Design Product" onChange={e => setlink(e.target.value)} />
                                </div>

                            </div>

                            <div className="d-flex justify-content-between mt-4">
                                <div className="d-flex"></div>
                                <div className="d-flex">
                                    <Link to={`/wait/wating/${transaction.fac_id}/${transaction.step}`}>
                                        <button type="button" class="btn btn-primary px-5 mt-4" onClick={clickSend}>
                                            SEND PACKAGING
                                            <i class="ms-3 bi bi-arrow-right-circle-fill"></i>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-1"></div>
                    </div>
                </div>
                <Footer />
            </div>
        </Fragment >
    );
}
export default styled(Packaging_fail)`
  .card {
  }
`;
