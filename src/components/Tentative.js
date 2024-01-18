import { Container, Row, Col, Tab, Nav } from "react-bootstrap";





//import colorSharp2 from "../assets/img/color-sharp2.png";
//import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import React from 'react';
import '../Timeline.css';
import TrackVisibility from 'react-on-screen';
import  { useState } from 'react';

export const Tentative = () => {




  
  const day1 = [
    {
      id: 1,
      date: '0800',
      title: 'Staff Arrival',
      location:'Lanai Kijang',
      outfit:'Casual',
      description: '',
      
    },
    {
      id: 2,
      date: '0830',
      title: 'Short Briefing',
      location:'Lanai Kijang',
      outfit:'Casual',
      description: '',
      
    },
    {
      id: 3,
      date: '0900',
      title: 'Flag-Off',
      location:'',
      outfit:'Casual',
      description: '',
      
    },
    {
      id: 4,
      date: '1000',
      title: 'Activity',
      location:'National Museum, Orang Asli Crafts Museum  ',
      outfit:'Casual',
      description: ['The main event is hanging out at the National Museum, Orang Asli Crafts Museum , but feel free to explore National Museum, and Malay World Ethnology Museum',<li>Tour and briefing of the Museum by curator</li>,<li>Orang Asli game for staff's exposure to the culture</li>]
      
    },
    {
      id: 5,
      date: '1230',
      title: 'Lunch / Friday Prayers',
      location:'',
      outfit:'Casual',
      description: '',
    },
    {
      id: 6,
      date: '1500',
      title: 'Check-In',
      location:'Cherengin Hills Convention & Spa Resort',
      outfit:'Casual',
      description: '',
    },
    {
      id: 7,
      date: '1630',
      title: 'Outdoor Activities',
      location:['ATV Janda Baik / Paintball : SWAT Paintball Janda Baik'],
      outfit:'Sports',
      description: [<li>ATV: Jah Hut & Senoi<ul><li>Up to 6 Pax Per Tribe</li><li>No competition, just riding in surrounding area</li><li>Takes roughly 1.5 hours (5KM)</li><li>Transportation provided by Vendor (meet at the lobby) (4x4, Vans)</li><li>Double rider</li> </ul></li>,<li>Paintball : Temuan VS Kanaq<ul><li>Capture the flag style between tribe</li><li>3 rounds (Tribe A vs Tribe B for each round) </li><li>Game will start based on agenda (1-1.5 Hours per game)</li><li>Transportation provided by Cherengin's (15 Minutes walking distance)</li></ul></li>]
    },
    {
      id: 8,
      date: '1630',
      title: 'Indoor Activities',
      location:'Chermai, Cherengin Hills Convention & Spa Resort',
      outfit:'Sports',
      description: [
        <li>Board Games & e-Games: Semelai VS Temoq 
          <ul><li>Traditional & board games(2-4 Pax per Tribe) </li>
            <ul>
              <li>Competition between tribe, points noted</li>
              <li>Congkak, Batu Seremban, Carrom, Board Games (e.g. Cluedo, Saboteur)</li>
            </ul>
            <li>E-Sport</li>
              <ul>
                <li>Nintendo Switch Console</li>
                <li>Overcooked 2, Mario Kart, Mario Party</li>
                <li>Points Noted</li>
              </ul>
          </ul>
        </li>]
    },
    {
      id: 8,
      date: '1930',
      title: 'BBQ Dinner',
      location:'BBQ Lounge, Cherengin Hills Convention & Spa Resort',
      outfit:'Casual',
      description: "Raise your flag"
    },
    // Add more events as needed
  ];

  const day2 = [
    {
      id: 1,
      date: '0730',
      title: 'Breakfast',
      location:'Cherengin Hills Convention & Spa Resort',
      outfit:'Casual',
      description: 'Indoor cafe',
      
    },
    {
      id: 2,
      date: '0900',
      title: 'Outdoor Activities',
      location:'ATV Janda Baik / Paintball : SWAT Paintball Janda Baik',
      outfit:'Sports',
      description: [<li>ATV : Temuan & Kanaq <ul><li>Up to 6 Pax Per Tribe</li><li>No competition, just riding in surrounding area</li><li>Takes roughly 2.5 hours (5KM)</li><li>Transportation provided by Vendor (4x4, Vans)</li><li>Double rider</li> </ul></li>,<li>Paintball : Semelai VS Temoq<ul><li>Capture the flag style between tribe</li><li>Consists of 3 games (2 Tribe each)</li><li>Game will start based on agenda (1-1.5 Hours per game)</li><li>Transportation provided by Cherengin's (15 Minutes walking distance)</li></ul></li>]
      
    }, 
    {
      id: 3,
      date: '0900',
      title: 'Indoor Activities',
      location:'Chermai, Cherengin Hills Convention & Spa Resort',
      outfit:'Sports',
      description: [<li>Board Games & e-Sports: Jah Hut & Senoi </li>]
      
    },
    {
      id: 4,
      date: '1100',
      title: 'Outdoor Activities',
      location:'ATV Janda Baik / Paintball : SWAT Paintball Janda Baik',
      outfit:'Sports',
      description: [<li>ATV : Semelai & Temoq </li>,<li>Paintball : Juh Hut VS Senoi</li>]
      
    },
    {
      id: 5,
      date: '1100',
      title: 'Indoor Activities',
      location:'Chermai, Cherengin Hills Convention & Spa Resort',
      outfit:'Sports',
      description: [<li>Board Games & e-Sports: Temuan VS Kanaq </li>]
      
    },
    {
      id: 6,
      date: '1200',
      title: 'Lunch, Free and Easy',
      location:'Cherengin Hills Convention & Spa Resort',
      outfit:'Sports',
      description: []
      
    },
    {
      id: 7,
      date: '1430',
      title: 'Culture Talk',
      location:'Chermai, Cherengin Hills Convention & Spa Resort',
      outfit:'Casual',
      description: []
      
    },


    {
      id: 8,
      date: '1600',
      title: 'Goal Setting',
      location:'Chermai, Cherengin Hills Convention & Spa Resort',
      outfit:'Casual',
      description: []
      
    },
    {
      id: 9,
      date: '1900',
      title: 'Break',
      location:'Cherengin Hills Convention & Spa Resort',
      outfit:'Casual',
      description: []
      
    },
    {
      id: 10,
      date: '2000',
      title: 'Tribe Recognition & Staff Dinner',
      location:'Ballroom, Cherengin Hills Convention & Spa Resort',
      outfit:'Earth Colour',
      description: [<li>Lucky Draw 🔥</li>]
      
    },


    // Add more events as needed
  ];

  const day3 = [
    {
      id: 1,
      date: '0730',
      title: 'Breakfast',
      location:'Cherengin Hills Convention & Spa Resort',
      outfit:'Casual'      ,
      description:'Indoor cafe'
    },
   
    
    {
      id: 3,
      date: '1200',
      title: 'Checkout',
      location:'Cherengin Hills Convention & Spa Resort',
      outfit:'Casual',
      description: '',
    },
    // Add more events as needed
  ];

  return (
    <section className="tentative" id="tentative">
    
    <Container>
      
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Agenda</h2>
                <p></p>
                <Tab.Container id="tentative-tabs" defaultActiveKey="first">

                  {/* Tab Bar */}
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">19 Jan 2024</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">20 Jan 2024</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">21 Jan 2024</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>

                    {/* Timeline.css styling update */}
                    {/* Tab 1 */}
                    <Tab.Pane eventKey="first">
                    <div className="timeline">
                      {day1.map((event) => (
                        <div key={event.id} className="timeline-event">
                          <div className="timeline-date">{event.date}</div>
                          <div className="timeline-content">
                            <h3>{event.title}</h3>
                            <p>Location: {event.location}</p>
                            <p>Outfit: {event.outfit}</p>
                            <p>Additional Info: {event.description}</p>

                            
                          </div>
                        </div>
                      ))}
                    </div>
                    </Tab.Pane>

                    {/* Tab 2 */}
                    <Tab.Pane eventKey="second">
                    <div className="timeline">
                      {day2.map((event) => (
                        <div key={event.id} className="timeline-event">
                          <div className="timeline-date">{event.date}</div>
                          <div className="timeline-content">
                            <h3>{event.title}</h3>
                            <p>Location: {event.location}</p>
                            <p>Outfit: {event.outfit}</p>
                            <p>Additional Info: {event.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    </Tab.Pane>

                    {/* Tab 3 */}
                    <Tab.Pane eventKey="third">
                    <div className="timeline">
                      {day3.map((event) => (
                        <div key={event.id} className="timeline-event">
                          <div className="timeline-date">{event.date}</div>
                          <div className="timeline-content">
                            <h3>{event.title}</h3>
                            <p>Location: {event.location}</p>
                            <p>Outfit: {event.outfit}</p>
                            <p>Additional Info: {event.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
        
      </Container>
      
    </section>
  )
}
