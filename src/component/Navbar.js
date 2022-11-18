import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [token, setToken] = useState(localStorage.getItem("status"));

  const x = () => {
    localStorage.clear();
  }

  return (
    <Fragment>
      <nav class="navbar navbar-expand-lg bg-navbar p-3 px-5 shadow">
        <div class="container-fluid">
          <a class="navbar-brand text-white" href="#">
            <img src="logowhite.png" class="size-logo"></img>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon "></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarNavDropdown">
            <ul class="navbar-nav ms-auto bg-dark-20 rounded-5 ">
              <Link
                to="/"
                class="nav-link active bg-dark-20 rounded-menu p-2 px-5 text-light border-0"
              >
                <div class="nav-menu">
                  <i class="bi bi-house-door me-1 text-wheat"></i>Home
                </div>
              </Link>
              {
                token ? <Link
                  to="/mylist"
                  class="nav-link active bg-transparent p-2 mx-4 text-light border-0"
                >
                  <div>
                    {/* <i class="bi bi-heart me-1"></i> */}
                    Mylist
                  </div>
                </Link> : null
              }
              {
                token ? <Link
                  to="/order"
                  class="nav-link active bg-transparent p-2 mx-4 text-light border-0"
                >
                  <div>
                    Order
                  </div>
                </Link> : null
              }

            </ul>
            <ul class="navbar-nav ms-auto d-none d-lg-inline-flex">
              {
                token ? <Link to="/login" onClick={x}>
                  <button type="button" class="btn btn-outline-light rounded-pill">
                    Logout
                  </button>
                </Link> : <Link to="/login">
                  <button type="button" class="btn btn-outline-light rounded-pill">
                    Login<i class="ms-2 bi bi-person-circle"></i>
                  </button>
                </Link>
              }
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}
