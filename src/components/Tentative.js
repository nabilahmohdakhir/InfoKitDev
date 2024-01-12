import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

//import colorSharp2 from "../assets/img/color-sharp2.png";
//import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import React from 'react';
import '../Timeline.css';
import TrackVisibility from 'react-on-screen';

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
      location:'Museum Seni Kraf',
      outfit:'Casual',
      description: 'Activity with Museum Seni Kraf',
      
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
      date: '1700',
      title: 'Outdoor Activities',
      location:'Cherengin Hills Convention & Spa Resort',
      outfit:'Sports',
      description: [<li>ATV : Tribe 3 & 4 </li>,<li>Paintball : Tribe 1 & 2</li>]
    },
    {
      id: 8,
      date: '1700',
      title: 'Indoor Activities',
      location:'Cherengin Hills Convention & Spa Resort',
      outfit:'Sports',
      description: "Board Games: Tribe 5 & 6"
    },
    {
      id: 8,
      date: '1930',
      title: 'BBQ Dinner',
      location:'Cherengin Hills Convention & Spa Resort',
      outfit:'Casual',
      description: ""
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
      description: '',
      
    },
    {
      id: 2,
      date: '0900',
      title: 'Outdoor Activities',
      location:'Cherengin Hills Convention & Spa Resort',
      outfit:'Sports',
      description: [<li>ATV : Tribe 3 & 4 </li>,<li>Paintball : Tribe 1 & 2</li>]
      
    },
    {
      id: 3,
      date: '0900',
      title: 'Indoor Activities',
      location:'Cherengin Hills Convention & Spa Resort',
      outfit:'Sports',
      description: [<li>e-Sports: Tribe 3 & 4 </li>]
      
    },
    {
      id: 4,
      date: '1100',
      title: 'Outdoor Activities',
      location:'Cherengin Hills Convention & Spa Resort',
      outfit:'Sports',
      description: [<li>ATV : Tribe 3 & 4 </li>,<li>Paintball : Tribe 1 & 2</li>]
      
    },
    {
      id: 5,
      date: '1100',
      title: 'Indoor Activities',
      location:'Cherengin Hills Convention & Spa Resort',
      outfit:'Sports',
      description: [<li>e-Sports: Tribe 3 & 4 </li>]
      
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
      id: 6,
      date: '1500',
      title: 'Goal Setting',
      location:'Cherengin Hills Convention & Spa Resort',
      outfit:'Casual',
      description: []
      
    },
    {
      id: 6,
      date: '1900',
      title: 'Break',
      location:'Cherengin Hills Convention & Spa Resort',
      outfit:'Casual',
      description: []
      
    },
    {
      id: 6,
      date: '2000',
      title: 'Tribe Recognition & Staff Dinner',
      location:'Cherengin Hills Convention & Spa Resort',
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
    },
    {
      id: 2,
      date: '0900',
      title: 'Team Building Closing Ceremony & Culture Talk',
      location:'Hall, Cherengin Hills Convention & Spa Resort',
      outfit:'Casual',
      description: 'Special Guest : Hsin Ying ',
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
                <h2>Tentative</h2>
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
