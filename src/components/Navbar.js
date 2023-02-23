import React from "react";
import PropTypes from "prop-types";

export default function navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container">
          <a className="navbar-brand" href="/">{props.title}</a>
           <button className="navbar-toggler" type="button" data-bs-toggle="collapse"  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link active" aria-current="page" href="/">{props.Name01}</a>
              </li>
              <li className="nav-item"> <a className="nav-link" href="/">{props.Name02}</a></li>
              <li className="nav-item"><a className="nav-link" href="/">{props.Name03}</a></li>
            </ul>
              <div className={`form-check form-switch text-${props.mode === 'light'? 'dark':'light'}`}>
                  <input onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                 <label className="form-check-label " htmlfor="flexSwitchCheckDefault">Dark Mode</label>
              </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

navbar.propTypes = {
  title: PropTypes.string.isRequired,
  Name01: PropTypes.string.isRequired,
  Name02: PropTypes.string,
  Name03: PropTypes.string,
}

navbar.defaultProps = {
    title: "Title",
    Name01: "Home",
    Name02: "About",
    Name03: "Contact",
  }