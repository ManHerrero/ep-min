import React from "react";

class HomePartnerUniversity extends React.Component {
  render() {
    return (
      <div className="col-lg-3 col-md-6">
        <a href="row-listings-filterscol.html" className="box_cat_home">
          <i className="icon_menu-circle_alt" />
          <img src="img/custom_icon_student.svg" width={65} height={65} alt />
          <h3>Universities</h3>
          <ul className="d-none">
            <li>
              <strong>73</strong>Locations
            </li>
          </ul>
        </a>
      </div>
    );
  }
}

export default HomePartnerUniversity;
