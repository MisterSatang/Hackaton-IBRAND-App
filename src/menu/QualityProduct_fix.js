import { Fragment, useState, useEffect } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Timeline from "../component/Timeline";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductCard from "../component/ProductCard";
import Detail_productQality from "../component/Detail_productQality";
import { Link } from "react-router-dom";

export default function QualityProduct_fail() {
    let { tran_id } = useParams();
    const [token, setToken] = useState(localStorage.getItem("status"));
    const [product, setproduct] = useState([]);
    const [detail, setdetail] = useState("");
    const [qualityComment_customer, setqualityComment_customer] = useState("");
    const [transaction, settransaction] = useState([]);
    const [text, settext] = useState([]);

    useEffect(() => {
        async function getfactory() {
            window.scrollTo(0, 0)
        }
        getfactory();
    }, []);

    useEffect(() => {
        async function getTransaction() {
            const tran = await axios.get(`http://localhost:8000/transaction/find_tranid/${tran_id}`, {
                headers: {
                    token: token
                }
            });
            settransaction(tran.data);
            setproduct(tran.data.product[0]);
            setqualityComment_customer(tran.data.qualityComment_customer);
            settext(tran.data.qualityComment_customer);
        }
        getTransaction();
    }, []);

    console.log(typeof (qualityComment_customer));

    const onClickSend = () => {
        console.log(detail);
        axios.put(`http://localhost:8000/transaction/update/${transaction._id}?update=qualityComment_customer`, {
            value: detail,
        })
        axios.put(`http://localhost:8000/transaction/update/${transaction._id}?update=status`, {
            value: "wating",
        })
        axios.put(`http://localhost:8000/transaction/update/${transaction._id}?update=status_user`, {
            value: "wating",
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
                                {transaction.fac_title}
                            </div>
                            <div className="d-flex fs-4 fw-bold text-uppercase">
                                {`No. ${transaction._id}`}
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
                        <div className="d-flex fs-5 fw-bold text-uppercase">
                            Step : fix quality Product
                        </div>
                        <div className="row p-0 m-0">
                            <div className="col-3 py-0 px-2 mt-4">
                                <div className="shadow-lg rounded-4 bg-light h-100">
                                    <img
                                        src={product.p_image}
                                        class="card-img-top border-image"
                                    />
                                    <div class="px-3">
                                        <div class="d-flex mt-2 fw-bold font-6">
                                            {product.p_title}
                                        </div>
                                        <div class="card-text text-secondary mt-2 pb-3 fw-semibold" style={{ overflow: 'hidden' }}>
                                            {/* {product.p_detail.length > 250 ?
                                                    `${product.p_detail.substring(0, 250)}...` : product.p_detail
                                                } */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* END CARD*/}
                        </div>
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>

            <div className="container-fluid pt-5 bg-body-purple">
                <div className="row">
                    <div className="col-1"></div>

                    <div className="col-10">
                        {product.p_detail}
                        <div className="d-flex fs-5 fw-bold text-uppercase mt-4">
                            รายละเอียดเพิ่มเติม (ปรับเเต่งสูตร)
                        </div>
                        <div class="form-outline mt-2">
                            <textarea
                                class="form-control"
                                id="textAreaExample"
                                rows="4"
                                onChange={e => setdetail(e.target.value)
                                }
                            ></textarea>
                            <div className="d-flex justify-content-between mt-4">
                                <div className="d-flex"></div>
                                <div className="d-flex">
                                    <Link to={`/wait/${transaction.status}/${transaction.fac_id}/${transaction.step}`} onClick={onClickSend}>
                                        <button type="button" class="btn btn-primary px-5 mt-4">
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
        </Fragment >
    );
}
