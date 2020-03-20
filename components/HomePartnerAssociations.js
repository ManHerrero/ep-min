import React from "react";

class HomePartnerAssociations extends React.Component {
  render() {
    return (
      <div className="col-lg-3 col-md-6">
        <a href="row-listings-filterscol.html" className="box_cat_home">
          <i className="icon_menu-circle_alt" />
          <img
            src="img/custom_icon_association.svg"
            width={65}
            height={65}
            alt
          />
          <h3>Associations</h3>
          <ul className="d-none">
            <li>
              <strong>7</strong>Associations
            </li>
          </ul>
        </a>
      </div>
    );
  }
}

export default HomePartnerAssociations;
