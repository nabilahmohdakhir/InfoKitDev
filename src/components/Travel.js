import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Untitled design.png";
import projImg2 from "../assets/img/check-out.png";
import carpool from "../assets/img/carpool.png";
import solo from "../assets/img/solo driver.png";
import buffet from "../assets/img/buffet.png";
import bbq from "../assets/img/BBQ.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Travel = () => {

  const projects = [
    {
      title: "Check In",
      description: "The check-in fiesta begins at 3 PM on January 19, 2023, or whenever rooms are ready. Seek out the representative in charge for your key—it's initiation time!",
      imgUrl: projImg1,
    },
    {
      title: "Check Out",
      description: "Check-out by 12 PM on January 21, 2023. Avoid fashionably late exits—any extra costs are on the late crew. Each room is tailored for two adults, and our committee members are there for your queries.",
      imgUrl: projImg2,
    },
  
  ];

  const travelClaim = [
    {
      title: "Carpool",
      description: "Cash alert! Carpool champs, collect your RM 130 at check-in.",
      imgUrl: carpool,
    },
    {
      title: "Solo Driver",
      description: "You're not left out—you get your RM 130  too! Just keep it cool on the road; no subsidies for speeding tickets!",
      imgUrl: solo,
    },
  
  ];

  const foodInfo = [
    {
      title:"Buffet Bliss",
      description: "Get ready to feast! All your meals are at the hotel café—breakfast, lunch, and dinner. Buffet style, because who doesn’t love a foodie party?",
      imgUrl: buffet,
    },
    {
      title:"BBQ Dinner",
      description: "Enjoy your BBQ Dinner on 20 Jan! Head over to Cafe XXXXX for some seriously tasty eats and good vibes. Let's grub and have a blast! 🍔🎉",
      imgUrl: bbq,
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Highlights!</h2>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">

                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Check-In / Check-Out</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Travel Claim</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Foodie Vibes</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fourth">Roomie Arrangement</Nav.Link>
                    </Nav.Item>
                  </Nav>

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

                    <Tab.Pane eventKey="second">
                      
                      <Row>
                        {
                          travelClaim.map((project, index) => {
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
                    
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          foodInfo.map((project, index) => {
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
                    <Tab.Pane eventKey="fourth">
                    <Row>
                        <p>Alright, so here's the lowdown: You're the boss of your roommate situation! Feelin' like you want a partner in crime? Go ahead and pick your roomie.</p>
                        <p>But hey, if you're riding solo and thinking, "Who's gonna be my bunkmate?" – no sweat! Just shoot a message to the committee, and they'll play matchmaker for you. Easy-peasy, right? 🤜🤛</p>
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
