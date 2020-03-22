import React from "react";
import PartnersResults from "./PartnersResults";
import PartnersList from "./PartnersList";

class PartnersMain extends React.Component {
  render() {
    return (
      <main>
        <PartnersResults></PartnersResults>
        {}
        <div className="filters_listing sticky_horizontal d-none">
          <div className="container">
            <ul className="clearfix">
              <li className>
                <div className="switch-field">
                  <input
                    type="radio"
                    id="all"
                    name="listing_filter"
                    defaultValue="all"
                    defaultChecked
                  />
                  <label htmlFor="all">All</label>
                  <input
                    type="radio"
                    id="popular"
                    name="listing_filter"
                    defaultValue="popular"
                  />
                  <label htmlFor="popular">Popular</label>
                  <input
                    type="radio"
                    id="latest"
                    name="listing_filter"
                    defaultValue="latest"
                  />
                  <label htmlFor="latest">Latest</label>
                </div>
              </li>
              <li>
                <a
                  className="btn_filt"
                  data-toggle="collapse"
                  href="#filters"
                  aria-expanded="false"
                  aria-controls="filters"
                  data-text-swap="Less filters"
                  data-text-original="More filters"
                >
                  More filters
                </a>
              </li>
              <li className="d-none">
                <div className="layout_view">
                  <a href="listing-1.html">
                    <i className="icon-th" />
                  </a>
                  <a href="#0" className="active">
                    <i className="icon-th-list" />
                  </a>
                  <a href="list-map.html">
                    <i className="icon-map" />
                  </a>
                </div>
              </li>
              <li className="d-none">
                <a
                  className="btn_map"
                  data-toggle="collapse"
                  href="#collapseMap"
                  aria-expanded="false"
                  aria-controls="collapseMap"
                  data-text-swap="Hide map"
                  data-text-original="View on map"
                >
                  View on map
                </a>
              </li>
            </ul>
          </div>
          {}
        </div>
        {}
        <div className="collapse" id="collapseMap">
          <div id="map" className="map" />
        </div>
        {}
        <div className="collapse" id="filters">
          <div className="container margin_30_5">
            <div className="row">
              <div className="col-md-6">
                <h6>Category</h6>
                <ul>
                  <li>
                    <label className="container_check">
                      Universities <small>12</small>
                      <input type="checkbox" />
                      <span className="checkmark" />
                    </label>
                  </li>
                  <li>
                    <label className="container_check">
                      Platforms <small>11</small>
                      <input type="checkbox" />
                      <span className="checkmark" />
                    </label>
                  </li>
                  <li>
                    <label className="container_check">
                      Residences <small>23</small>
                      <input type="checkbox" />
                      <span className="checkmark" />
                    </label>
                  </li>
                  <li className="d-md-none">
                    <label className="container_check">
                      Associations <small>56</small>
                      <input type="checkbox" />
                      <span className="checkmark" />
                    </label>
                  </li>
                  <li className="d-md-none">
                    <label className="container_check">
                      Events <small>56</small>
                      <input type="checkbox" />
                      <span className="checkmark" />
                    </label>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 d-none d-md-block">
                <h6 className="invisible">None</h6>
                <ul>
                  <li>
                    <label className="container_check">
                      Associations <small>56</small>
                      <input type="checkbox" />
                      <span className="checkmark" />
                    </label>
                  </li>
                  <li>
                    <label className="container_check">
                      Events <small>56</small>
                      <input type="checkbox" />
                      <span className="checkmark" />
                    </label>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 d-none">
                <div className="add_bottom_30">
                  <h6>Distance</h6>
                  <div className="distance">
                    {" "}
                    Radius around selected destination <span /> km
                  </div>
                  <input
                    type="range"
                    min={10}
                    max={100}
                    step={10}
                    defaultValue={30}
                    data-orientation="horizontal"
                  />
                </div>
              </div>
            </div>
            {}
          </div>
        </div>
        {}
        <PartnersList></PartnersList>
        {}
      </main>
    );
  }
}

export default PartnersMain;
