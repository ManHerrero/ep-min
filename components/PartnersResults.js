import React from "react";

class PartnersResults extends React.Component {
  render() {
    return (
      <div id="results" className="d-none">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-10">
              <h4>
                <strong>2</strong> result for All listing
              </h4>
            </div>
            <div className="col-lg-9 col-md-8 col-2">
              <a href="#0" className="search_mob btn_search_mobile" /> {}
              <div className="row no-gutters custom-search-input-2 inner">
                {}
                <div className="col-lg-8">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="What are you looking for..."
                    />
                    <i className="icon_search" />
                  </div>
                </div>
                <div className="col-lg-4 d-none">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Where"
                    />
                    <i className="icon_pin_alt" />
                  </div>
                </div>
                <div className="col-lg-3">
                  <select className="wide">
                    <option>All Categories</option>
                    <option>Universities</option>
                    <option>Platforms</option>
                    <option>Residences</option>
                    <option>Associations</option>
                    <option>Events</option>
                  </select>
                </div>
                <div className="col-lg-1">
                  <input type="submit" defaultValue="Search" />
                </div>
              </div>
            </div>
          </div>
          {}
          <div className="search_mob_wp">
            <div className="custom-search-input-2">
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="What are you looking for..."
                />
                <i className="icon_search" />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Where"
                />
                <i className="icon_pin_alt" />
              </div>
              <select className="wide">
                <option>All Categories</option>
                <option>Shops</option>
                <option>Hotels</option>
                <option>Restaurants</option>
                <option>Bars</option>
                <option>Events</option>
                <option>Fitness</option>
              </select>
              <input type="submit" defaultValue="Search" />
            </div>
          </div>
          {}
        </div>
        {}
      </div>
    );
  }
}

export default PartnersResults;
