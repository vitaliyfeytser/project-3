import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-md">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="images/logo.svg" width="48px" height="40px" alt="Logo" />
          <span className="pl-2">COOL KIDS BOOK CLUB</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <div className="navbar-nav ml-auto">
            <button
              type="button"
              id="loginBtn"
              className="btn btn-light btn-sm"
              data-toggle="modal"
              data-target="#popUpWindow"
            >
              LOG IN
            </button>

            <div className="input-group" id="user-name-toggle">
              <div className="input-group justify-content-center">
                <button
                  className="btn btn-light dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                  data-user="0"
                  id="user-name-display"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  NAME PLACEHOLDER
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                  <a className="dropdown-item" href="#">
                    Logout
                  </a>
                </div>
              </div>
            </div>

            <a className="nav-item nav-link text-center" href="/">
              Sign Up
            </a>
            <a className="nav-item nav-link text-center" href="/favorite">
              Favorite
            </a>
            <a className="nav-item nav-link text-center" href="/book">
              Book
            </a>

            <button
              type="button"
              id="readers"
              className="btn btn-light btn-sm"
              data-toggle="modal"
              data-target="#popUpWindow"
            >
              Readers
            </button>
            <button
              type="button"
              id="faves"
              className="btn btn-light btn-sm"
              data-toggle="modal"
              data-target="#popUpWindow"
            >
              Faves
            </button>
            <button
              type="button"
              id="clubs"
              className="btn btn-light btn-sm"
              data-toggle="modal"
              data-target="#popUpWindow"
            >
              Clubs
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
