import React from "react";

class ContactBoxes extends React.Component {
  render() {
    return (
      <div className="col-xl-5 col-lg-6 pl-xl-5">
        <div className="box_contacts">
          <i className="ti-support" />
          <h2>Need Help?</h2>
          help@erasmusplay.com
        </div>
        <div className="box_contacts">
          <i className="ti-help-alt" />
          <h2>Questions?</h2>
          info@erasmusplay.com
        </div>
        <div className="box_contacts">
          <i className="ti-home" />
          <h2>Address</h2>
          <a href="#0">
            PO Box 97845 Baker st. 567, Los Angeles
            <br />
            California - US.
          </a>
        </div>
      </div>
    );
  }
}

export default ContactBoxes;
