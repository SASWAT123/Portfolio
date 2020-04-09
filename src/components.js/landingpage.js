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
        <a target="_blank" href="https://google.com">
          <i className="fa fa-google"></i>
        </a>
        <a target="_blank" href="https://www.linkedin.com">
          <i className="fa fa-linkedin-square"></i>
        </a>
        <a target="_blank" href="https://github.com">
          <i className="fa fa-github-square"></i>
        </a>
        <a target="_blank" href="https://twitter.com">
          <i className="fa fa-twitter-square"></i>
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
