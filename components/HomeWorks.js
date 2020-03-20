import React from "react";

class HomeWorks extends React.Component {
  render() {
    return (
      <div className="call_section">
        <div className="wrapper">
          <div className="container margin_80_55">
            <div className="main_title_2">
              <span>
                <em />
              </span>
              <h2>How it Works</h2>
              <p>The easiest way to find the best accommodation for you.</p>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="box_how wow">
                  <i className="pe-7s-search" />
                  <h3>Search Accommodation</h3>
                  <p>Pick your destination and your desirable dates.</p>
                  <span />
                </div>
              </div>
              <div className="col-md-4">
                <div className="box_how">
                  <i className="pe-7s-info" />
                  <h3>We find the most suitable accommodations</h3>
                  <p>
                    We search in our trusted platforms in just one click, choose
                    the best option for you.
                  </p>
                  <span />
                </div>
              </div>
              <div className="col-md-4">
                <div className="box_how">
                  <i className="pe-7s-like2" />
                  <h3>Book, Reach or Call</h3>
                  <p>We redirect you to our partner's platforms.</p>
                </div>
              </div>
            </div>
            {}
            <p
              className="text-center add_top_30 wow bounceIn d-none"
              data-wow-delay="0.5"
            >
              <a href="register.html" className="btn_1 rounded">
                Register Now
              </a>
            </p>
          </div>
        </div>
        {}
      </div>
    );
  }
}

export default HomeWorks;
