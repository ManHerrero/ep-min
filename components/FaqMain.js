import React from "react";
import FaqAside from "./FaqAside";
import FaqList from "./FaqList";

class FaqMain extends React.Component {
  render() {
    return (
      <main>
        <div className="container margin_60_35">
          <div className="row">
            <FaqAside></FaqAside>
            {}
            <FaqList></FaqList>
            {}
          </div>
          {}
        </div>
        {}
      </main>
    );
  }
}

export default FaqMain;
