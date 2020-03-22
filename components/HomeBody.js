import React from "react";
import HomeHead from "./HomeHead";
import HomeMain from "./HomeMain";

class HomeBody extends React.Component {
  render() {
    return (
      <div>
        <div id="page">
          <HomeHead></HomeHead>
          {}
          <HomeMain></HomeMain>
          {}
        </div>
        {}
        <div id="toTop" />
        {}
      </div>
    );
  }
}

export default HomeBody;
