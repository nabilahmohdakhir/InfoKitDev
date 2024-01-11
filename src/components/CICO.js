
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const CICO = () => {

  const projects = [
    {
      title: "Check-In",
      description: "The check-in fiesta begins at 3 PM on January 19, 2023, or whenever rooms are ready. Seek out the representative in charge for your key—it's initiation time!",
      imgUrl: projImg1,
    },
    {
      title: "Check-Out",
      description: "Check-out by 12 PM on January 21, 2023. Avoid fashionably late exits—any extra costs are on the late crew. Each room is tailored for two adults, and our committee members are there for your queries.",
      imgUrl: projImg2,
    },
  
  ];

  return (
    <section className="cico" id="cico">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Check-In / Check-Out</h2>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
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
