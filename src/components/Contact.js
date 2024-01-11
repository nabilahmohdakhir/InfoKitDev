import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

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
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
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
                      <p><b>Waze :</b></p>
                      <p>Link Cherengin Resort</p>
                      <a href="https://waze.com/ul/hw286vybeu">Click here</a>
                    </Col>
                    <Col size={12} sm={12} className="px-1">
                      <p><b>Google Maps:</b></p>
                      <p>Link Cherengin Resort</p>
                      <a href="https://maps.app.goo.gl/F5PbUvcEQKkvduBE9?g_st=ic">Click here</a>
                     
                    </Col>

                    <Col size={12} sm={12} className="px-1">
                      <b>Full Address:</b>
                      <p>Lot 5540 & 5936,28750 Janda Baik, Bentong, Pahang Darul Makmur,Malaysia</p>
                    </Col>
                    
                    <Col size={12} sm={12} className="px-1">
                    <b>Important Notes:</b>
                    <p>Night route :</p>
                    <p>Day route</p>

                    <h6>Feel free to reach out to :</h6>
                    <a href="https://wa.link/t4rdxl">Belle Test Test</a>
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
