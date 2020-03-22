import React from "react";

class ContactForm extends React.Component {
  render() {
    return (
      <form
        method="post"
        action="assets/contact.php"
        id="contactform"
        autoComplete="off"
      >
        <div className="form-group">
          <label>Name</label>
          <input
            className="form-control"
            type="text"
            id="name_contact"
            name="name_contact"
          />
        </div>
        <div className="form-group">
          <label>Last name</label>
          <input
            className="form-control"
            type="text"
            id="lastname_contact"
            name="lastname_contact"
          />
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Email</label>
              <input
                className="form-control"
                type="email"
                id="email_contact"
                name="email_contact"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Telephone</label>
              <input
                className="form-control"
                type="text"
                id="phone_contact"
                name="phone_contact"
              />
            </div>
          </div>
        </div>
        {}
        <div className="form-group">
          <label>Message</label>
          <textarea
            className="form-control"
            id="message_contact"
            name="message_contact"
            style={{
              height: "120px"
            }}
            defaultValue={""}
          />
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Are you human? 3 + 1 =</label>
              <input
                className="form-control"
                type="text"
                id="verify_contact"
                name="verify_contact"
              />
            </div>
          </div>
        </div>
        <p className="add_top_30">
          <input
            type="submit"
            defaultValue="Submit"
            className="btn_1"
            id="submit-contact"
          />
        </p>
      </form>
    );
  }
}

export default ContactForm;
