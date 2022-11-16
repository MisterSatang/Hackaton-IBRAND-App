import React, { Fragment, useState } from "react";

export default function CardPackaging() {
  const [isActive, setIsActive] = useState(false);
  const handleClick = (event) => {
    setIsActive((current) => !current);
  };
  return (
    <Fragment>
      {/* CARD*/}
      <div className="col-xl-3 col-lg-4 col-md-5 col-12 py-0 px-2 mt-4">
        <div className="form-check">
          <label className="form-check-label w-100" htmlFor="flexRadioDefault1">
            <div className="shadow rounded-4 h-100 position-relative">
              <img
                src="asset/packaging/01.png"
                class="card-img-top rounded-4 border-image"
              />
              <div class="position-absolute top-0 end-0">
                <input
                  className="form-check-input me-2 mt-2 fs-3"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
              </div>
            </div>
          </label>
        </div>
      </div>
      {/* END CARD*/}
    </Fragment>
  );
}
