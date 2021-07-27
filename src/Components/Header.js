import React from "react";
import "./Componets.css";

class Header extends React.Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <button
            class="navbar-toggler btn btn-primary"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <button type="button" class="btn btn-outline-primary button_pd">
                <a class="nav-link active" href="/">
                  Home <span class="sr-only">(current)</span>
                </a>
              </button>
              <button type="button" class="btn btn-outline-success button_pd">
                <a class="nav-link" href="/about">
                  About
                </a>
              </button>
              <button type="button" class="btn btn-outline-danger button_pd">
                <a class="nav-link" href="/services">
                  Services
                </a>
              </button>
              <button type="button" class="btn btn-outline-warning button_pd">
                <a
                  class="nav-link "
                  href="/contact"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Contact
                </a>
              </button>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
