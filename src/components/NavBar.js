import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo-bear.png';
import navIcon1 from '../assets/img/icons8-whatsapp (2).svg';
// import navIcon2 from '../assets/img/nav-icon2.svg';
// import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#housekeeping" className={activeLink === 'housekeeping' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('housekeeping')}>Housekeeping</Nav.Link>
              <Nav.Link href="#emergency" className={activeLink === 'emergency' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('emergency')}>Emergency</Nav.Link>
              <Nav.Link href="#food" className={activeLink === 'food' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('food')}>Foodie Vibes</Nav.Link>
              <Nav.Link href="#claim" className={activeLink === 'claim' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('claim')}>Travel Claim</Nav.Link>
              <Nav.Link href="#location" className={activeLink === 'location' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('claim')}>Location</Nav.Link>
              <Nav.Link href="#tentative" className={activeLink === 'tentative' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('tentative')}>Tentative</Nav.Link>
            
            </Nav>
            <span className="navbar-text">
              
              <HashLink to='Footer'>
                <button className="vvd"><span>Contact</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}

// add logo bawah first tag container
//<Navbar.Brand href="/">
//            <img src={logo} alt="Logo" />
  //        </Navbar.Brand>