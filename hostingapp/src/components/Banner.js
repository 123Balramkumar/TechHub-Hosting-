import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import background1 from "../assets/background1.jpg";
import domain from "../assets/domain.webp";
import server from "../assets/server.avif";

function Banner() {

  return (
    <div className="item">
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            style={{ width: "100%", height: "90vh" }}
            src={background1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h1 style={{ color: "white" }}>Hosting Services</h1>
            <h5 style={{ color: "white" }}>
              "Empower your digital presence with TechHub Hosting Seamless
              Domains, Robust Hosting, Dedicated Servers, and Cloud Solutions
              tailored for your success."
            </h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: "100%", height: "90vh" }}
            src={domain}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h1 style={{ color: "white" }}>Domain Services</h1>
            <h5 style={{ color: "white" }}>
              "Unlock your online potential with TechHub Domains Your gateway to
              a distinctive and memorable digital presence."
            </h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: "100%", height: "90vh" }}
            src={server}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h1 style={{ color: "white" }}>Server</h1>
            <h5 style={{ color: "white" }}>
              "Elevate your performance with TechHub Servers Robust solutions
              for unmatched reliability and power in the digital realm."
            </h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Banner;
