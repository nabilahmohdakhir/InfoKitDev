import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/logo-bear.png";

import 'animate.css';
import TrackVisibility from 'react-on-screen';
import navIcon1 from "../assets/img/icons8-whatsapp (2).svg";
import wazeIcon1 from "../assets/img/waze-white.png";
import gmapIcon1 from "../assets/img/google-maps.svg";

export const Location = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: 'Message sent successfully'});
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className="bear">
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              </div>
              }
              
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>How to get there ?</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={12} className="px-1">
                      <p>Navigate your way to <b>Cherengin Hills Convention & Spa Resort</b></p>
                    </Col>

                    <Col size={12} sm={12} className="px-1">
                      <div className="social-icon">
                      
                      <a href="https://waze.com/ul/hw286vybeu"><img src={wazeIcon1} alt="Waze" /></a>
                      <a href="https://maps.app.goo.gl/F5PbUvcEQKkvduBE9?g_st=ic"><img src={gmapIcon1} alt="gmap" /></a>

                      </div>
                      <br></br>
                    
                    </Col>
                    

                    <Col size={12} sm={12} className="px-1">
                    <br></br>
                      <b>Full Address:</b>
                      <br></br>
                      <p>Lot 5540 & 5936,28750 Janda Baik, Bentong, Pahang Darul Makmur,Malaysia</p>
                    </Col>
                    
                    <Col size={12} sm={12} className="px-1">
                    <b>Important Notes:</b>
                    <p>Night route :</p>
                    <p>Day route</p>

                    <h6>Feel free to reach out to :</h6>
                    
                    <Col size={12} sm={12} className="px-1">
                    <div className="social-icon">         
                      <figcaption><a href="https://wa.link/1p5an7"><img src={navIcon1} alt="Faridz" /></a> Faridz</figcaption>

                      <figcaption><a href="https://wa.link/gxhgcl"><img src={navIcon1} alt="Sharil" /></a> Sharil</figcaption>
                      </div>
                      </Col>                   
                    
                    </Col>
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
