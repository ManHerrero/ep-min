import React from "react";

class HomeHero extends React.Component {
  render() {
    return (
      <section className="hero_single version_4">
        <div className="wrapper">
          <div className="container">
            <h3>Find the best accommodation</h3>
            <p>Start your Erasmus experience right now</p>
            <form action="search.html">
              <div className="row no-gutters custom-search-input-2">
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Where are you going to study..."
                    />
                    <i className="icon_pin_alt" />
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="form-group" id="input-dates">
                    <input
                      id="movein_bar"
                      className="form-control"
                      type="text"
                      name="dates"
                      placeholder="Move In"
                    />
                    <i className="icon_calendar" />
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="form-group">
                    <input
                      id="moveout_bar"
                      className="form-control"
                      type="text"
                      placeholder="Move Out"
                    />
                    <i className="icon_calendar" />
                  </div>
                </div>
                <div className="col-lg-2">
                  <input type="submit" defaultValue="Search" />
                </div>
              </div>
              {}
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default HomeHero;
