import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo-bear.png";
import navIcon1 from "../assets/img/icons8-whatsapp (2).svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={12} className="text-center text-sm-end">
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
            <p>Developed By Nabilah Mohd Akhir (●'◡'●)</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
