import { Fragment } from "react";

export default function Footer() {
  return (
    <Fragment>
      <div className="container-fluid pt-5 px-0 bg-body-purple">
        <footer className="text-white text-center text-lg-start bg-navbar">
          <div className="container p-4">
            <div className="row mt-4">
              {/*Grid column*/}
              <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">About Project ibrand</h5>
                <p>
                  At vero eos et accusamus odio dignissimos ducimus qui
                  blanditiis praesentium atque corrupti.
                </p>
                <p>
                  Blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias.
                </p>
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4 pb-1">
                  Make Brand Easy Like Snap
                </h5>
                <p>
                  Blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias.
                </p>
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">contact</h5>
                <div className="ms-4">
                  <div className="mb-3">
                    <i class="bi bi-house-fill"></i>
                    <span className="ms-2">New York, NY 10012, US</span>
                  </div>
                  <div className="mb-3">
                    <i class="bi bi-envelope-fill"></i>
                    <span className="ms-2">IBRAND@Company.com</span>
                  </div>
                  <div className="mb-3">
                    <i class="bi bi-telephone-fill"></i>
                    <span className="ms-2">+ 01 234 567 88</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center p-3 bg-dark-20">
            Company :
            <a className="ms-2 text-wheat" href="#">
              IBRAND.com
            </a>
          </div>
        </footer>
      </div>
    </Fragment>
  );
}
