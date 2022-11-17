import { Fragment } from "react";

export default function DonotHave() {
  return (
    <Fragment>
      <div className="h-screen-60 d-flex align-items-center justify-content-center">
        <div class="d-flex align-items-center justify-content-center">
          <img src="icon.png" class="img-dontHave"></img>
          <div class="display-4 fw-bold text-purple ms-3">
            Dont'Have Product...
          </div>
        </div>
      </div>
    </Fragment>
  );
}
