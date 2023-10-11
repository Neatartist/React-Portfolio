import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./projectcard";
import projImg1 from "../assets/img/guarded-river-60488-2757545d4c45.herokuapp.com_-min.png";
import projImg2 from "../assets/img/aqueous-garden-21223-0843a25d5cd3.herokuapp.com_ (1)-min.png";
import projImg3 from "../assets/img/weather-dashboard-min.png";
import projImg4 from "../assets/img/ecommerce.png";
import colorSharp2 from "../assets/img/color-sharp2-min.png";
import resume from '../assets/img/resumescreenshot-min-min.png';

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Zero Proof",
      description: "This website was crafted with a focus on inclusivity, catering to individuals who choose not to consume alcoholic beverages. The platform empowers users to share and discover locations that offer an array of mocktails and alcohol-free beer options.",
      imgUrl: projImg1,
      URL: "https://guarded-river-60488-2757545d4c45.herokuapp.com/",
    },
    {
      title: "Pixel Perfect Reviews",
      description: "This platform empowers users to actively engage with the gaming community by allowing them to leave comments and reviews on the games they've selected.  Users can contribute to discussions and provide valuable insights by commenting on others' experiences.",
      imgUrl: projImg2,
      URL: "https://aqueous-garden-21223-0843a25d5cd3.herokuapp.com/",
    },
  ];

  const workExperience = [
    {
      title: "Weather Dashboard",
      description: "This is a weather dashboard that was made using the OpenWeather API. The user can search for a city and the current weather and 5 day forecast will be displayed. The user can also click on a city in the search history and the weather will be displayed again.",
      imgUrl: projImg3,
      URL:'https://neatartist.github.io/weather-dashboard/',
    },
    {
      title: "Back-end E-commerce ",
      description: "This is a back-end e-commerce website that uses Express.js API and Sequelize to interact with a MySQL database. The database includes tables for products, categories, tags, and product tags. The user can perform CRUD operations on all tables.",
      imgUrl: projImg4,
      URL:'https://github.com/Neatartist/E_Commerce_Back_End.git',
    },
  ];
  const Resume = [
    {
      title: "Resume",
      description: "Current Resume",
      imgUrl: resume,
      URL: 'https://app.enhancv.com/share/1c7a4517/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic', 
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn animate__fast": "animate__animated animate__fadeOutLeft animate__fast"}>
                <h2>Experience Related Resources</h2>
                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="second">Mini projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Resume</Nav.Link>
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
                          workExperience.map((workExperience, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...workExperience}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          Resume.map((Resume, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...Resume}
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
      <img className="background-image-right"  src={colorSharp2} alt="side-color"></img>
    </section>
  )
}