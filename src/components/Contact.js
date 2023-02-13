import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Hubungi Saya</h2>
                <form>
                  <Row>
                    <Col size={12} className="px-1">
                      <input type="text" placeholder="Email &ensp;&nbsp;: sengolcaduk32@gmail.com" disabled/>
                    </Col>
                    <div class="w-100"></div>
                    <Col size={12} className="px-1">
                      <input type="text" placeholder="Telegram &ensp;: @nyapnsu" disabled/>
                    </Col>
                    <div class="w-100"></div>
                    <Col size={12} className="px-1">
                      <input type="text" placeholder="Whatsapp : 083819xxxxxx (Secret :3)" disabled/>
                    </Col>
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
