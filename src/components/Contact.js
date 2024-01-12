import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/bear-8.png";

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
    <section className="contact" id="location">
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

                      <p>We advice you to designate <b>Balai Polis Bukit Tinggi</b> route as your primary path initially , and during your journey, you can reset back to the actual destination. </p>


                    </Col>

                    <Col size={12} sm={12} className="px-1">
                      <div className="social-icon">
                      
                      <p>Actual Destination : <b>Cherengin Hills Convention & Spa Resort</b></p>
                      <a href="https://waze.com/ul/hw286vybeu"><img src={wazeIcon1} alt="Waze" /></a>
                      <a href="https://maps.app.goo.gl/F5PbUvcEQKkvduBE9?g_st=ic"><img src={gmapIcon1} alt="gmap" /></a>

                      <br></br>
                      <p><b>Suggested Route Plan</b> : Balai Polis Bukit Tinggi</p>
                      <a href="https://www.waze.com/ms/live-map/directions/balai-polis-bukit-tinggi-jalan-bukit-tinggi-bentong?to=place.w.66715681.667287887.1128428"><img src={wazeIcon1} alt="Waze" /></a>
                      <a href="https://www.google.com/maps/dir/3.151897,101.692904/balai+polis+bukit+tinggi/@3.2534793,101.5832894,11z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x31cc170400000001:0x6ccfed2462f9fa9a!2m2!1d101.8212522!2d3.3488132?entry=ttu"><img src={gmapIcon1} alt="gmap" /></a>



                      
                      
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
                    

                    <h6>If you have any questions, please get in touch with :</h6>
                    
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
