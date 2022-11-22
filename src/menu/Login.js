import { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import styled from "styled-components";

export function Login({ className }) {
  const [token, setToken] = useState("");
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      const token = await axios.post("http://localhost:8000/login", {
        email,
        password,
      });
      localStorage.setItem("status", token.data.token);
      localStorage.setItem("admin", token.data.rank);
      setToken(localStorage.getItem("status"));
      token.data.rank == 1
        ? (window.location.href = "/admin")
        : (window.location.href = "/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Fragment>
      <div className={className}>
        <div className="container-fluid">
          <div className="row p-0">
            <div className="col-xl-3 col-lg-4 col-md-5 col-12 bg-navbar h-nav-login">
              <Link to="/" style={{ textDecoration: "none" }}>
                <div className="d-flex justify-content-center align-items-center h-100 ">
                  <div class="btn rounded-pill w-50 fs-4 border-1 border-light text-light p-nav-login">
                    <div>
                      <img src="logowhite.png" class="size-logo"></img>
                    </div>
                    Home<i class="ms-2 bi bi-house-fill"></i>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col bg-login">
              <div className="d-flex justify-content-center align-items-center h-login">
                <div className="d-flex flex-column shadow rounded-5 card-login bg-light">
                  <div className="d-flex ms-5 my-4 fs-2 fw-bold text-purple text-uppercase">
                    Login IBRAND
                  </div>
                  <form onSubmit={onSubmit}>
                    <div className="d-flex flex-column mx-2 mb-5">
                      <input
                        type="email"
                        className="d-flex username p-3 bg-transparent border-1 border-bottom"
                        placeholder="username"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <br />
                      <input
                        type="password"
                        className="d-flex pwd p-3 bg-transparent border-1 border-bottom"
                        placeholder="password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <button className="btn d-flex fs-4 p-3 fw-semibold text-light bg-navbar text-uppercase border-card justify-content-center w-100">
                      <div className="d-flex">Sign in</div>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default styled(Login)`
  input {
    display: block;
    height: 50px;
    width: 90%;
    margin: 0 auto;
    border: none;
    &::placeholder {
      -webkit-transform: translateY(0px);
      transform: translateY(0px);
      -webkit-transition: 0.5s;
      transition: 0.5s;
    }
    &:hover,
    &:focus,
    &:active:focus {
      color: #ff5722;
      outline: none;
      border-bottom: 1px solid #ff5722;
      &::placeholder {
        color: #ff5722;
        position: relative;
        -webkit-transform: translateY(-20px);
        transform: translateY(-20px);
      }
    }
  }

  }
`;
