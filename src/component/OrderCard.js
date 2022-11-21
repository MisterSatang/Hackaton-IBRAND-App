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
                            factory.status_user == "wating" ? (<div className="mt-2 mb-3">
                                <span class="badge text-bg-warning fs-6 me-2">
                                    <div class="spinner-border spinner-border-sm me-2"></div>
                                    {
                                        factory.step == 4 ? `ขั้นตอน ${factory.step} รอการยืนยันมัดจำ` : factory.step == 5 ? `ขั้นตอน ${factory.step} รอการตรวจสอบ` : factory.step == 6 ? `ขั้นตอน ${factory.step} รอการตรวจสอบ อ.ย.` : factory.step == 7 ? `ขั้นตอน ${factory.step} รอการผลิตสินค้า...` : factory.step == 8 ? `ขั้นตอน ${factory.step} ตรวจสอบการชำระเงิน` : factory.step == 9 ? `ขั้นตอน ${factory.step} รอการจัดส่งสินค้า...` : `ขั้นตอน ${factory.step} รอการอนุมัติ...`
                                    }
                                </span>
                            </div>) : factory.status_user == "confirm" ? (<div className="mt-2 mb-3">
                                <span class="badge text-bg-success fs-6 me-2">
                                    <i class="bi bi-check-circle-fill me-2"></i>
                                    {
                                        factory.step == 3 ? `ขั้นตอน ${factory.step - 1} ยืนยันสินค้า Testing` : factory.step == 4 ? `ขั้นตอน ${factory.step - 1} Testing เรียบร้อย` : factory.step == 5 ? `ขั้นตอน ${factory.step - 1} มัดจำ เรียบร้อย` : factory.step == 8 ? `ขั้นตอน ${factory.step - 1} สินค้าผลิตเสร็จสิ้น` : factory.step == 9 ? `ขั้นตอน ${factory.step - 1} จัดส่งสินค้าเสร็จสิ้น` : `ขั้นตอน ${factory.step - 1} อนุมัติเรียบร้อย`
                                    }
                                </span>
                            </div>) : (<div className="mt-2 mb-3">
                                <span class="badge text-bg-danger fs-6 me-2">
                                    <i class="bi bi-exclamation-circle-fill me-2"></i>
                                    {
                                        factory.step == 5 ? `ขั้นตอน ${factory.step} packaging ไม่ถูกต้อง` : `ขั้นตอน ${factory.step} กรอกข้อมูลไม่ถูกต้อง`
                                    }
                                </span>
                            </div>)
                        }
                    </div>
                    <div className="container-fluid p-3 pt-0 mt-2">
                        {
                            factory.status_user == "wating" ? (<Link to={`/wait/${factory.status_user}/${factory.fac_id}/${factory.step}`}>
                                <div className="row">
                                    <div className="col">
                                        <button type="button" class="btn btn-primary w-100">
                                            Detail
                                        </button>
                                    </div>
                                </div>
                                {/* add step */}
                            </Link>) : factory.status_user == "confirm" && factory.step == 9 ? <></> : factory.status_user == "confirm" ? (<Link to={factory.step == 2 ? `/appraise/${factory._id}` : factory.step == 3 ? `/pretester2-2/${factory._id}` : factory.step == 4 ? `/pledge/${factory._id}` : factory.step == 5 ? `/packaging/${factory._id}` : factory.step == 8 ? `/pays/${factory._id}` : null}>
                                {/* add step */}
                                <div className="row">
                                    <div className="col">
                                        <button type="button" class="btn btn-primary w-100">
                                            Detail
                                        </button>
                                    </div>
                                </div>
                            </Link>) : (<Link to={factory.step == 5 ? `/packaging_fail/${factory._id}/${factory.pakaging_choose}` : `/qualityProduct_fail/${factory._id}`}>
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
