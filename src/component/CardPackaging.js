import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

export default function CardPackaging({ packaging, setpackagingSelect }) {
  const onClick = () => {
    setpackagingSelect(packaging.pak_id);
  }
  return (
    <Fragment>
      {/* CARD*/}
      <div className="col-xl-3 col-lg-4 col-md-5 col-12 py-0 px-2 mt-4">
        <div className="form-check">
          {/* <Link to={`/packaging/${transaction}/${packaging.pak_id}`}> */}
          <label className="form-check-label w-100" htmlFor={packaging.pak_id}>
            <div className="shadow rounded-4 h-100 position-relative">
              <img
                src={packaging.pak_image}
                class="card-img-top rounded-4 border-image"
              />
              <div class="position-absolute top-0 end-0">
                {/* <Link to={`/packaging/${transaction}/${packaging.pak_id}`}> */}
                <input
                  className="form-check-input me-2 mt-2 fs-3"
                  type="radio"
                  name="flexRadioDefault"
                  id={packaging.pak_id}
                  onClick={onClick}
                />
                {/* </Link> */}
              </div>
            </div>
          </label>
          {/* </Link> */}
        </div>

      </div >

      {/* END CARD*/}
    </Fragment >
  );
}
