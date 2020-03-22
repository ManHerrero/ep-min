import React from "react";
import PartnersCard from "./PartnersCard";

class PartnersList extends React.Component {
  render() {
    return (
      <div className="container margin_60_35">
        {}
        <PartnersCard></PartnersCard>
        {}
        <div className="strip list_view">
          <div className="row no-gutters">
            <div className="col-lg-5">
              <figure className="partnerFigure">
                <a href="http://www.generandofuturo.es/">
                  <img
                    src="assets/img/Universities/logo_unizar.png"
                    className="img-fluid dpartner_min"
                    alt="Unviersidad de Zaragoza"
                  />
                  <div className="read_more">
                    <span>Read more</span>
                  </div>
                </a>
                <small>University</small>
              </figure>
            </div>
            <div className="col-lg-7">
              <div className="wrapper">
                <a href="#0" className="wish_bt d-none" />
                <h3>
                  <a href="https://www.unizar.es/">Generando Futuro</a>
                </h3>
                <small>Zaragoza, Spain</small>
                <p>
                  We are a non-profit association formed by entrepreneurs and
                  professionals from the private sector in Aragon.
                </p>
                <a
                  className="address d-none"
                  href="https://www.google.es/maps/dir/41.6473632,-0.9074313/Calle+Felipe+Sanclemente,+25,+50001+Zaragoza/@41.6460945,-0.9011821,15z/data=!3m1!4b1!4m17!1m7!3m6!1s0xd5914ef0e11ffcb:0x21c5970b6ee7f7ee!2sCalle+Felipe+Sanclemente,+25,+50001+Zaragoza!3b1!8m2!3d41.6493049!4d-0.8800644!4m8!1m1!4e1!1m5!1m1!1s0xd5914ef0e11ffcb:0x21c5970b6ee7f7ee!2m2!1d-0.8800644!2d41.6493049https://www.google.es/maps/dir/41.6473632,-0.9074313/Calle+Felipe+Sanclemente,+25,+50001+Zaragoza/@41.6460945,-0.9011821,15z/data=!3m1!4b1!4m17!1m7!3m6!1s0xd5914ef0e11ffcb:0x21c5970b6ee7f7ee!2sCalle+Felipe+Sanclemente,+25,+50001+Zaragoza!3b1!8m2!3d41.6493049!4d-0.8800644!4m8!1m1!4e1!1m5!1m1!1s0xd5914ef0e11ffcb:0x21c5970b6ee7f7ee!2m2!1d-0.8800644!2d41.6493049"
                >
                  Get directions
                </a>
              </div>
              <ul className="d-none">
                <li>
                  <a href="http://www.generandofuturo.es/">
                    <span className="loc_open">Go to site</span>
                  </a>
                </li>
                <li className="d-none">
                  <span className="loc_open">Now Open</span>
                </li>
                <li className="d-none">
                  <div className="score">
                    <span>
                      Superb<em>350 Reviews</em>
                    </span>
                    <strong>8.9</strong>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {}
        <p className="text-center add_top_60 d-none">
          <a href="#0" className="btn_1 rounded">
            Load more
          </a>
        </p>
      </div>
    );
  }
}

export default PartnersList;
