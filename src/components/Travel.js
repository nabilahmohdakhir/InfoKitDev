import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Untitled design.png";
import projImg2 from "../assets/img/check-out.png";
import carpool from "../assets/img/carpool.png";
import solo from "../assets/img/solo driver.png";
import buffet from "../assets/img/buffet.png";
import bbq from "../assets/img/BBQ.png";
//import colorSharp2 from "../assets/img/color-sharp2.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Highlights = () => {

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
          <Col>
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

                      <Row >
                      
                        <p><b>Check In</b></p>
                        <p>Check-in fiesta begins at <b>3 PM on January 19, 2023</b>, or whenever rooms are ready. Seek out the representative in charge for your key—it's initiation time!</p>
                        <p><b>Check Out</b></p>
                        <p>Check-out by <b>12 PM on January 21, 2023</b>. Avoid fashionably late exits—any extra costs are on the late crew. Each room is tailored for two adults, and our committee members are there for your queries.</p>
                        
                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="second">
                      
                      <Row>
                      <p><b>Carpool</b></p>
                        <p>Cash alert! Carpool champs, get your driver to collect their RM 120 at check-in!</p>
                        
                        <p><b>Solo Driver</b></p>
                        <p>You're not left out—you get your RM 120 too! Just keep it cool on the road; no subsidies for speeding tickets!</p>
                        
                      </Row>
                    </Tab.Pane>
                    
                    <Tab.Pane eventKey="third">
                    <Row>
                        <p><b>Buffet Bliss</b></p>
                        <p>Get ready to feast! All your meals are at the hotel café—breakfast, lunch, and dinner. Buffet style, because who doesn’t love a foodie party?</p>
                        
                        <p><b>BBQ Dinner</b></p>
                        <p>Enjoy your BBQ Dinner on 19 Jan! Head over to BBQ Lounge for some serious tasty eats and good vibes. Let's grub and have a blast! 🍔🎉</p>
                        
                        
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                    <Row>
                        <p>Alright, so here's the lowdown: You're the boss of your roommate situation! Feelin' like you want a partner in crime? Go ahead and pick your roomie.</p>
                        
                        <p>But hey, if you're riding solo and thinking, "Who's gonna be my roomie?" – no sweat! Just shoot a message to the committee, and they'll play matchmaker for you. Easy-peasy, right? 🤜🤛</p>

                        <p>If you've got a roomate, just give the committee the deets on your buddy. That way, we can figure out who's flying solo and pair them up with someone in need of a partner!</p>
                        <p></p>
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
