import React from "react";
import HomeHero from "./HomeHero";
import HomeUniversities from "./HomeUniversities";
import HomeWorks from "./HomeWorks";
import HomePartners from "./HomePartners";

class HomeMain extends React.Component {
  render() {
    return (
      <main>
        <HomeHero></HomeHero>
        {}
        <HomeUniversities></HomeUniversities>
        {}
        {}
        <HomeWorks></HomeWorks>
        {}
        <HomePartners></HomePartners>
        {}
      </main>
    );
  }
}

export default HomeMain;
