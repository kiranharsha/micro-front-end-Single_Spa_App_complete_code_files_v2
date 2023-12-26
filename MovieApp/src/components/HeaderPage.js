import React from "react";
import "./styles.css";

const HeaderPage = () => {
  return (
    <div>
      <div className="nav">
        {/* <input type="checkbox" id="nav-check" /> */}
        <div className="nav-header">
          <div className="nav-title"> OrderMax-ui-widget Parent </div>
        </div>
        <div className="nav-btn">
          {/* <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label> */}
        </div>

        <div className="nav-links">
          <a href="//github.io/jo_geek" target="_blank">
            Links
          </a>
          <a href="http://stackoverflow.com/users/4084003/" target="_blank">
            Start Over
          </a>
          <a
            href="https://in.linkedin.com/in/jonesvinothjoseph"
            target="_blank"
          >
            Close
          </a>
          <a href="https://codepen.io/jo_Geek/" target="_blank">
            OrderMax Logo
          </a>
         
        </div>
      </div>
    </div>
  );
};

export default HeaderPage;
