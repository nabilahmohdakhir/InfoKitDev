import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import React from 'react';
import '../Timeline.css';
import TrackVisibility from 'react-on-screen';

export const Tentative = () => {

  const day1 = [
    {
      id: 1,
      date: '2022-01-01',
      title: 'Event 1',
      description: 'Description for Event 1',
    },
    {
      id: 2,
      date: '2022-02-15',
      title: 'Event 2',
      description: 'Description for Event 2',
    },
    // Add more events as needed
  ];

  const day2 = [
    {
      id: 1,
      date: '2022-01-01',
      title: 'Event 1',
      description: 'Description for Event 1',
    },
    {
      id: 2,
      date: '2022-02-15',
      title: 'Event 2',
      description: 'Description for Event 2',
    },
    // Add more events as needed
  ];

  const day3 = [
    {
      id: 1,
      date: '2022-01-01',
      title: 'Event 1',
      description: 'Description for Event 1',
    },
    {
      id: 2,
      date: '2022-02-15',
      title: 'Event 2',
      description: 'Description for Event 2',
    },
    // Add more events as needed
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Tentative</h2>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">

                  {/* Tab Bar*/}
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Day 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Day 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Day 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>

                    {/* Tab 1*/}
                    <Tab.Pane eventKey="first">
                    <div className="timeline">
                      {day1.map((event) => (
                        <div key={event.id} className="timeline-event">
                          <div className="timeline-date">{event.date}</div>
                          <div className="timeline-content">
                            <h3>{event.title}</h3>
                            <p>{event.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    </Tab.Pane>

                    {/* Tab 2*/}
                    <Tab.Pane eventKey="second">
                    <div className="timeline">
                      {day2.map((event) => (
                        <div key={event.id} className="timeline-event">
                          <div className="timeline-date">{event.date}</div>
                          <div className="timeline-content">
                            <h3>{event.title}</h3>
                            <p>{event.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    </Tab.Pane>

                    {/* Tab 3*/}
                    <Tab.Pane eventKey="third">
                    <div className="timeline">
                      {day3.map((event) => (
                        <div key={event.id} className="timeline-event">
                          <div className="timeline-date">{event.date}</div>
                          <div className="timeline-content">
                            <h3>{event.title}</h3>
                            <p>{event.description}</p>
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
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
