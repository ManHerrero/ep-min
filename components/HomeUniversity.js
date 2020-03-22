import React from "react";

class HomeUniversity extends React.Component {
  render() {
    return (
      <div className="item">
        <div className="strip grid">
          <figure>
            <a href="#" className="wish_bt d-none">
              Zaragoza
            </a>
            <a href="#">
              <img
                src="assets/img/Universities/logo_unizar.png"
                className="img-fluid"
                alt
                width={400}
                height={266}
              />
              <div className="read_more">
                <span>Read more</span>
              </div>
            </a>
            <small className="d-none">Zaragoza</small>
          </figure>
          <div className="wrapper">
            <h3>
              <a href="#">Universidad de Zaragoza</a>
            </h3>
            <p>
              The University of Zaragoza is the public University of Aragon.
              Rooted in its society and committed to its development, it is a
              creator of culture, a promoter of thought and an engine of
              economic progress. It is a place of permanent change and exchange
              in which science, culture and technology are promoted.
            </p>
            <a
              className="address d-none"
              href="https://www.google.com/maps/dir//Assistance+%E2%80%93+H%C3%B4pitaux+De+Paris,+3+Avenue+Victoria,+75004+Paris,+Francia/@48.8606548,2.3348734,14z/data=!4m15!1m6!3m5!1s0x47e66e1de36f4147:0xb6615b4092e0351f!2sAssistance+Publique+-+H%C3%B4pitaux+de+Paris+(AP-HP)+-+Si%C3%A8ge!8m2!3d48.8568376!4d2.3504305!4m7!1m0!1m5!1m1!1s0x47e67031f8c20147:0xa6a9af76b1e2d899!2m2!1d2.3504327!2d48.8568361"
            >
              Get directions
            </a>
          </div>
          <ul className="d-none">
            <li>
              <span className="loc_open">Now Open</span>
            </li>
            <li>
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
    );
  }
}

export default HomeUniversity;
