import React from "react";

class FaqAside extends React.Component {
  render() {
    return (
      <aside className="col-lg-3" id="faq_cat">
        <div className="box_style_cat" id="faq_box">
          <ul id="cat_nav">
            <li>
              <a href="#aboutus" className="active">
                <i className="icon_document_alt" />
                About Us
              </a>
            </li>
            <li>
              <a href="#terms">
                <i className="icon_document_alt" />
                Terms&Conditons
              </a>
            </li>
            <li>
              <a href="#privacy">
                <i className="icon_document_alt" />
                Privacy
              </a>
            </li>
          </ul>
        </div>
        {}
      </aside>
    );
  }
}

export default FaqAside;
