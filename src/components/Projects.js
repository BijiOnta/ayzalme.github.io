import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/sd.png";
import projImg2 from "../assets/img/smp.png";
import projImg3 from "../assets/img/smk.png";
import web from "../assets/img/web.png";
import andro from "../assets/img/andro.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "SDN Loji 1",
      description: "Saya dulu SD nya di sini",
      imgUrl: projImg1,
    },
    {
      title: "SMP IBG",
      description: "Lanjut SMP Disini",
      imgUrl: projImg2,
    },
    {
      title: "SMK IBG",
      description: "Dan SMK disini (IBG lagi ea)",
      imgUrl: projImg3,
    },
  ];

  const ngaret = [
    {
      title: "Website Film",
      description: "Discontinue karna kekurangan modal",
      imgUrl: web,
    },
    {
      title: "Operation System Android",
      description: "Discontinue karna kekurangan modal dan alat",
      imgUrl: andro,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Riwayat</h2>
                <p>Riwayat Pendidikan dan Projects saya...<br></br><br></br>Ini perjalanan dari SD sampe Sekarang SMK dan juga ada project saya yang ga pernah lanjut :p</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Pendidikan</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Surprise!</Nav.Link>
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
                          ngaret.map((project, index) => {
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
                      <p>Yang baca ini I Love U 30000x<br></br>(Khusus Cewe) :p</p>
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
