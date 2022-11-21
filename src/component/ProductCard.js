import { Fragment } from "react";
import { Link } from "react-router-dom";





export default function ProductCard({ fac_id, product, pro_id }) {

    console.log(pro_id);
    return (
        <Fragment>
            {/* CARD*/}
            <div className="col-3 py-0 px-2 mt-4 hoverCard">
                <Link to={`/QualityProduct/${fac_id}/${product.p_id}`} style={{ textDecoration: 'none' }} >
                    <div className="shadow-lg rounded-4 bg-light h-100 position-relative">
                        <div className={`position-absolute top-0 w-100 h-100 bg-card-contain z-100 ${pro_id == product.p_id ? "select-card" : ""}`} >
                        </div>
                        <img
                            src={product.p_image}
                            class="card-img-top border-image"
                        />
                        <div class="px-3">
                            <div class="d-flex mt-2 fw-bold font-6">
                                {product.p_title}
                            </div>
                            <div class="card-text text-secondary mt-2 pb-3 fw-semibold" style={{ overflow: 'hidden' }}>
                                {product.p_detail.length > 250 ?
                                    `${product.p_detail.substring(0, 250)}...` : product.p_detail
                                }
                            </div>
                        </div>
                    </div>
                </Link>
            </div >
            {/* END CARD*/}
        </Fragment >
    );
}
