import { Fragment } from "react";

export default function DonotHave() {
  return (
    <Fragment>
      <div className="h-screen-60 d-flex align-items-center justify-content-center">
        <div class="d-flex align-items-center justify-content-center">
          <i class="bi bi-x-octagon-fill display-1 me-4 text-danger"></i>
          <div class="display-1 fw-bold text-purple">Dont'Have Product...</div>
        </div>
      </div>
    </Fragment>
  );
}
