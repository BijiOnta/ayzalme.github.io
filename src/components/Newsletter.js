import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import confetti from "canvas-confetti";

export const Newsletter = () => {

  function tembak() {
    var count = 200;
    var defaults = { origin: { y: 0.7 }};

    function ready(particleRatio, opts) {
      confetti(Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio)}));
    }

    ready(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    ready(0.2, {
      spread: 60,
    });
    ready(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });
    ready(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });
    ready(0.25, {
      spread: 120,
      startVelocity: 45,
    });
  }
  return (
      <Col lg={12}>
        <div className="newsletter-bx tengah tombol">
            <button onClick={tembak} className="kotak">XII MMB The Best!</button>
	</div>
      </Col>
  )
}
