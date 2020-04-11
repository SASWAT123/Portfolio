import React from "react";
import Typical from "react-typical";

const LandingPage = () => {
  var ReactFitText = require("react-fittext");
  return (
    <div className="landing_page">
      <div className="intro">Hello, I'm SASWAT PRIYADARSHAN!</div>
      <div className="tagline">
        I am a{" "}
        <Typical
          loop={Infinity}
          wrapper="b"
          steps={[
            "Full Stack Developer",
            1500,
            "Team Player",
            1500,
            "Creative Thinker",
            1500,
            "Tech Enthusiast",
            1500,
          ]}
        />
      </div>
      <div className="icons-social">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/saswat-priyadarshan-ba2241122/"
        >
          <i className="fa fa-linkedin-square"></i>
        </a>
        <a target="_blank" href="https://github.com/SASWAT123">
          <i className="fa fa-github-square"></i>
        </a>
        <a target="_blank" href="https://twitter.com/P21Saswat">
          <i className="fa fa-twitter-square"></i>
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
