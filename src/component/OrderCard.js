import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

export default function OrderCard({ factory }) {
    return (
        <Fragment>
            {/* CARD*/}
            <div className="col-xl-3 col-lg-4 col-md-5 col-12 py-0 px-2 mt-4">
                <div className="shadow-lg rounded-4 bg-light h-100">
                    <img
                        src={factory.product[0].p_image}
                        class="card-img-top border-image"
                    />
                    <div class="px-3">
                        <div class="d-flex mt-2 fw-bold font-6">
                            {factory.fac_title.length > 30 ?
                                `${factory.fac_title.substring(0, 30)}..` : factory.fac_title
                            }
                        </div>
                    </div>
                    <div class="card-body px-3">
                        <span class="d-flex fs-6 text-secondary">
                            {factory._id}
                        </span>
                        {
                            factory.status == "wating" ? (<div className="mt-2 mb-3">
                                <span class="badge text-bg-warning fs-6 me-2">
                                    <div class="spinner-border spinner-border-sm me-2"></div>
                                    {`ขั้นตอน ${factory.step} รอการอนุมัติ...`}
                                </span>
                            </div>) : factory.status == "confirm" ? (<div className="mt-2 mb-3">
                                <span class="badge text-bg-success fs-6 me-2">
                                    <i class="bi bi-check-circle-fill me-2"></i>
                                    {`ขั้นตอน ${factory.step} อนุมัติเรียบร้อย`}
                                </span>
                            </div>) : (<div className="mt-2 mb-3">
                                <span class="badge text-bg-danger fs-6 me-2">
                                    <i class="bi bi-exclamation-circle-fill me-2"></i>
                                    {`ขั้นตอน ${factory.step} กรอกข้อมูลไม่ถูกต้อง`}
                                </span>
                            </div>)
                        }
                    </div>
                    <div className="container-fluid p-3 pt-0 mt-2">
                        {
                            factory.status == "wating" ? (<Link to={`/wait/${factory.status}/${factory.fac_id}`}>
                                <div className="row">
                                    <div className="col">
                                        <button type="button" class="btn btn-primary w-100">
                                            Detail
                                        </button>
                                    </div>
                                </div>
                            </Link>) : factory.status == "confirm" ? (<Link to={factory.step == 2 ? `/appraise/${factory._id}` : `/mylist`}>
                                <div className="row">
                                    <div className="col">
                                        <button type="button" class="btn btn-primary w-100">
                                            Detail
                                        </button>
                                    </div>
                                </div>
                            </Link>) : (<Link to={`/qualityProduct_fail/${factory._id}`}>
                                <div className="row">
                                    <div className="col">
                                        <button type="button" class="btn btn-primary w-100">
                                            Detail
                                        </button>
                                    </div>
                                </div>
                            </Link>)
                        }
                    </div>
                </div>
            </div>
            {/* END CARD*/}
        </Fragment >
    );
}
