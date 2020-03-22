import React from "react";

class HomePartnerPlatforms extends React.Component {
  render() {
    return (
      <div className="col-lg-3 col-md-6">
        <a href="row-listings-filterscol.html" className="box_cat_home">
          <i className="icon_menu-circle_alt" />
          <img src="img/custom_icon_platform.svg" width={65} height={65} alt />
          <h3>Platforms</h3>
          <ul className="d-none">
            <li>
              <strong>14</strong>Platforms
            </li>
          </ul>
        </a>
      </div>
    );
  }
}

export default HomePartnerPlatforms;
