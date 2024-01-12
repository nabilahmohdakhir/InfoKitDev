import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo-bear.png";
import navIcon1 from "../assets/img/icons8-whatsapp (2).svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <Container>

        <Row className="align-items-center">
          
          <Col size={12} sm={12} className="text-left text-sm-left">
          <p> If you have any questions, feel free to reach out!</p>
          <p>Clicking any of these links is like a random joke generator - you never know who you'll get to contact with! 😂</p>
            <Container>
            <div className="social-icon">
              
              <a href="https://wa.link/gxhgcl"><img src={navIcon1} alt="Sharil" /></a>
              <a href="https://wa.link/1p5an7"><img src={navIcon1} alt="Hani" /></a>
              <a href="https://wa.link/ryipri"><img src={navIcon1} alt="Bel" /></a>
              <a href="https://wa.link/q73cmp"><img src={navIcon1} alt="Husaif" /></a>
              <a href="https://wa.link/d4rpwj"><img src={navIcon1} alt="Deveina" /></a>
              <a href="https://wa.link/1p5an7"><img src={navIcon1} alt="Faridz" /></a>

              
            </div>
            </Container>
          </Col>
          
        </Row>
        <Row className="align-items-center">
        <Col size={12} sm={12} className="text-center text-sm-center">
          <p> <em>Nabilah Mohd Akhir 🩷 (✿◕‿◕✿)</em></p>
          <p>  <em>Github Source Code //disabled</em></p>
          </Col>
          </Row>
      </Container>
      
    </footer>
  )
}
