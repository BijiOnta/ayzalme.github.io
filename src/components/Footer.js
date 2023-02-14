import { Container, Row, Col } from "react-bootstrap";
import { Newsletter } from "./Newsletter.js";
import logo from "../assets/img/logo.png";
import navicon from "../assets/img/navicon.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Newsletter />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://github.com/BijiOnta" target="_blank"><img src={navicon} alt="" /></a>
              <a href="https://www.facebook.com/profile.php?id=100024437322125" target="_blank"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://instagram.com/ayzalme" target="_blank"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
