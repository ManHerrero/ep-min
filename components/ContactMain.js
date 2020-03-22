import React from "react";
import ContactForm from "./ContactForm";
import ContactBoxes from "./ContactBoxes";

class ContactMain extends React.Component {
  render() {
    return (
      <main>
        <div className="container margin_60_35">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6 pr-xl-5">
              <div className="main_title_3">
                <span />
                <h2>Send us a message</h2>
                <p>We will help you with all your doubs.</p>
              </div>
              <div id="message-contact" />
              <ContactForm></ContactForm>
            </div>
            <ContactBoxes></ContactBoxes>
          </div>
        </div>
        {}
      </main>
    );
  }
}

export default ContactMain;
