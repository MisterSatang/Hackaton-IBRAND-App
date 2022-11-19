import { Fragment } from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
    return (
        <Fragment>
            <span className="fs-5 fw-bold text-uppercase">{product.p_title}</span>
            <div className="d-flex fs-6 mt-3">
                {product.p_detail}
            </div>
        </Fragment >
    );
}
