import { Fragment, useState, useEffect } from "react";

import styled from "styled-components";
import Sidebar from "./component/Sidebar";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

export function Detail_Product_Offer({ className }) {
    let { tran_id } = useParams();
    const [transaction, settransaction] = useState([]);
    const [product, setproduct] = useState([]);
    const [token, setToken] = useState(localStorage.getItem("status"));
    const [admin, setAdmin] = useState(parseInt(localStorage.getItem("admin")));
    const [confriminator, setConfriminator] = useState('true');
    const [ofers, setOfers] = useState([]);
    const [test, setTest] = useState([]);
    const [details, setdetail] = useState("");

    if (!token) {
        window.location.href = "/login";
    }

    if (admin != 1) {
        window.location.href = "/";
    }

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
        axios.put(`http://localhost:8000/transaction/update/${transaction._id}?update=step`, {
            value: 5,
        })
        axios.put(`http://localhost:8000/transaction/update/${transaction._id}?update=status`, {
            value: "wating",
        })
        axios.put(`http://localhost:8000/transaction/update/${transaction._id}?update=status_user`, {
            value: "confirm",
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <Fragment>
            <div className={className}>
                <div className="container-fluid">
                    <div className="row">
                        <Sidebar />
                        <div className="col bg-body-purple p-0">
                            <div className="fs-2 fw-bold mt-5 ms-5">Detail Offer</div>
                            <div className="fs-4 fw-bold ms-5">{transaction._id}</div>
                            <div className="container-fluid">
                                <div className="row px-4">
                                    <div className="col-12 col-xl-3 col-lg-3 my-4">
                                        <img
                                            src={product.p_image}
                                            class="card-img-top border-image-pill shadow-lg h-100"
                                        />
                                    </div>
                                    <div className="col-12 col-xl-9 col-lg-9 shadow-lg rounded-4 bg-light  my-4">
                                        <div class="px-3">
                                            <div class="d-flex mt-3">
                                                <span className="fs-5 fw-bold">{`สูตร : ${product.p_title}`}</span>
                                            </div>
                                            <div class="d-flex fw-semibold fs-3 text-danger"></div>
                                            <div class="card-text text-secondary mt-2 pb-3 fw-semibold">
                                                {product.p_detail}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="container-fluid">
                                <div class="px-4">
                                    <div class="d-flex mt-3">
                                        <span class="badge bg-danger fs-5">หมายเหตุ</span>
                                        <span class="border-bottom border-danger border-3 mb-3 fs-5 w-100 ">
                                            {" "}
                                        </span>
                                    </div>
                                    <div className="mt-3 bg-light shadow rounded-4 py-4">
                                        <div class="card-text text-secondary p-3 fw-semibold">
                                            {transaction.qualityComment_customer}
                                        </div>
                                    </div>
                                    <div class="d-flex mt-4">
                                        <span class="badge bg-primary fs-5">จำนวนเงิน</span>
                                        <span class="border-bottom border-primary border-3 mb-3 fs-5 w-100 ">
                                            {" "}
                                        </span>
                                    </div>
                                    <div className="mt-3 bg-light border-1 shadow rounded-4 p-4">
                                        <div className="row">
                                            <div className="col-12 col-xl-3 col-lg-4 col-md-6 fw-semibold fs-5 p-3">
                                                <span className="text-purple">จำนวนสั่งทำ =</span> {transaction.count} ชิ้น
                                            </div>
                                            <div className="col-12 col-xl-2 col-lg-3 col-md-6 fw-semibold fs-5 p-3">
                                                <span className="text-purple">{transaction.offer_price} </span> บาท/ชิ้น
                                            </div>
                                            <div className="col-12 col-xl-3 col-lg-4 col-md-6 fw-semibold fs-5 p-3">
                                                <span className="text-purple">ราคาทั้งหมด =</span> {transaction.total_price} บาท
                                            </div>
                                            <div className="col-12 col-xl-3 col-lg-4 col-md-6 fw-semibold fs-5 p-3">
                                                <span className="text-purple">มัดจำ 50% =</span> {transaction.total_offer} บาท
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex justify-content-between my-4 mx-4 mb-5 px-3">
                                <div className="d-flex">
                                    <Link to="/tb_offer">
                                        <button type="button" class="btn btn-primary px-5 mt-4">
                                            <i class="me-3 bi bi-arrow-left-circle-fill"></i>Back
                                        </button>
                                    </Link>
                                </div>
                                <div className="d-flex">
                                    <Link to="/tb_offer">
                                        <button type="button" class="btn btn-primary px-5 mt-4" onClick={onClickSend}>
                                            ยืนยันการมัดจำ<i class="ms-3 bi bi-arrow-right-circle-fill"></i>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment >
    );
}
export default styled(Detail_Product_Offer)``;
