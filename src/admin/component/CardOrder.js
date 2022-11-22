import { Fragment } from "react";

export default function CardOrder({ step, header }) {
  return (
    <Fragment>
      <div className="col-xl-3 col-lg-4 col-md-5 col-12 mt-3 p-3">
        <div className="bg-navbar p-0 w-100 rounded-5 ">
          <div className="rounded-cardMenuAdmin bg-dark-20 text-center p-3 text-light fw-semibold">
            {header}
          </div>
          <div className="text-center p-3 text-light ">
            <div className="row d-flex align-items-center">
              <div className="col-4">total :</div>
              <div
                className={`col-4 fs-2 fw-bold ${
                  step.length > 0 ? "text-warning" : ""
                }`}
              >
                {step.length > 0 ? step.length : "-"}
              </div>
              <div className="col-4">order</div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
