import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ onNav }) {
  const [token, setToken] = useState(localStorage.getItem("status"));

  const x = () => {
    localStorage.clear();
  };

  console.log(onNav);

  return (
    <Fragment>
      <nav class="navbar navbar-expand-lg bg-navbar p-3 px-5 shadow">
        <div class="container-fluid">
          <a class="navbar-brand text-white" href="#">
            <img src="../../../logowhite.png" class="size-logo"></img>
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
                class={`nav-link 0 rounded-menu p-2 px-5 text-light border-0 ${
                  onNav == "home" ? "active bg-dark-20" : ""
                }`}
              >
                <div class={`${onNav == "home" ? "nav-menu" : ""}`}>
                  {onNav == "home" ? (
                    <i class="bi bi-house-door me-1 text-wheat"></i>
                  ) : (
                    ""
                  )}
                  Home
                </div>
              </Link>
              {token ? (
                <Link
                  to="/mylist"
                  class={`nav-link 0 rounded-menu p-2 px-5 text-light border-0 ${
                    onNav == "mylist" ? "active bg-dark-20" : ""
                  }`}
                >
                  <div class={`${onNav == "mylist" ? "nav-menu" : ""}`}>
                    {onNav == "mylist" ? (
                      <i class="bi bi-heart me-1 text-wheat"></i>
                    ) : (
                      ""
                    )}
                    Mylist
                  </div>
                </Link>
              ) : null}
              {token ? (
                <Link
                  to="/order"
                  class={`nav-link 0 rounded-menu p-2 px-5 text-light border-0 ${
                    onNav == "order" ? "active bg-dark-20" : ""
                  }`}
                >
                  <div class={`${onNav == "order" ? "nav-menu" : ""}`}>
                    {onNav == "order" ? (
                      <i class="bi bi-bag me-1 text-wheat"></i>
                    ) : (
                      ""
                    )}
                    Order
                  </div>
                </Link>
              ) : null}
            </ul>
            <ul class="navbar-nav ms-auto d-none d-lg-inline-flex">
              {token ? (
                <Link to="/login" onClick={x}>
                  <button
                    type="button"
                    class="btn btn-outline-light rounded-pill"
                  >
                    <i class="bi bi-door-open me-2"></i>Logout
                  </button>
                </Link>
              ) : (
                <Link to="/login">
                  <button
                    type="button"
                    class="btn btn-outline-light rounded-pill"
                  >
                    Login<i class="ms-2 bi bi-person-circle"></i>
                  </button>
                </Link>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}
