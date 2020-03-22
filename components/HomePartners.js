import React from "react";
import HomePartnerUniversity from "./HomePartnerUniversity";
import HomePartnerPlatforms from "./HomePartnerPlatforms";
import HomePartnerAssociations from "./HomePartnerAssociations";

class HomePartners extends React.Component {
  render() {
    return (
      <div className="bg_color_1">
        <div className="container margin_80_55">
          <div className="main_title_2">
            <span>
              <em />
            </span>
            <h2>Our Partners</h2>
            <p>We are pleased to work with the best partners.</p>
          </div>
          <div className="row justify-content-center">
            {}
            <HomePartnerUniversity></HomePartnerUniversity>
            {}
            {}
            <HomePartnerPlatforms></HomePartnerPlatforms>
            {}
            {}
            <div className="col-lg-3 col-md-6 d-none">
              <a href="row-listings-filterscol.html" className="box_cat_home">
                <i className="icon_menu-circle_alt" />
                <img
                  src="img/custom_icon_residence.svg"
                  width={65}
                  height={65}
                  alt
                />
                <h3>Residences</h3>
                <ul className="d-none">
                  <li>
                    <strong>26</strong>Residences
                  </li>
                </ul>
              </a>
            </div>
            {}
            {}
            <HomePartnerAssociations></HomePartnerAssociations>
            {}
            {}
            <div className="col-lg-3 col-md-6 d-none">
              <a href="row-listings-filterscol.html" className="box_cat_home">
                <i className="icon_menu-circle_alt" />
                <img src="img/icon_home_5.svg" width={65} height={65} alt />
                <h3>Events</h3>
                <ul className="clearfix">
                  <li>
                    <strong>146</strong>Locations
                  </li>
                </ul>
              </a>
            </div>
            {}
          </div>
          {}
        </div>
        {}
      </div>
    );
  }
}

export default HomePartners;
