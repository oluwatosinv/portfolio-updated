import React from "react";
import Header from "./Header";
import Projects from "./Projects";
import Top from "./Top";

const Homepage = () => {
  return (
    <div>
      <div className="header-top">
        <Top />
        <Header />
      </div>
      <Projects />
    </div>
  );
};

export default Homepage;
