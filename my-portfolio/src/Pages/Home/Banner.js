import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Particles from "react-tsparticles";
import Header from "../Header/Header";
import me from '../../Images/me.png'
import './Banner.css'

const Banner = () => {
  const particlesInit = (main) => {
  };
  const particlesLoaded = (container) => {};
  return (
    <div id="banner">
        <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{

          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#fff",
            },
            links: {
              color: "#fff",
              distance: 150,
              enable: true,
              opacity: 0.1,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: .5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
        />
        <div className="container">
        <Header></Header>
        <div className="row">
          <div className="col-md-4 img-fluid d-sm-block d-none" >
            <img className="img-fluid profilePic" src={me} alt="" data-aos="fade-up"
              data-aos-duration="500" />
          </div>
          <div className="col-md-8 text-white hero-details" data-aos="fade-up"
            data-aos-duration="500">
            <p className="personal-profile__name">MD Subman Rafid</p>
            <p className="personal-profile__work">I'm <span style={{ fontWeight: 'bold' }}>
              <Typewriter
                words={['A Jr. Front-End Developer ⚛']}
                loop={5}
                cursor
                cursorStyle='_'
                typeSpeed={50}
                deleteSpeed={20}
                delaySpeed={1000}
              />
            </span></p>
            <div className="personal-profile__contacts">
              <dl className="contact-list contact-list__opacity-titles">
                <dt>Phone:</dt>
                <dd><a href="tel:01303664096">01303664096</a></dd>
                <dt>Email:</dt>
                <dd><a href="rafidmahin20@gmail.com">rafidmahin20@gmail.com</a></dd>
                <dt>Address:</dt>
                <dd>Dhaka, Bangladesh</dd>
              </dl>
            </div>
            <div className="personal-profile__social">
              <a href="https://github.com/rafidmahin20" target="blank"><i className="fa fa-github"></i></a>
              <a href="https://www.linkedin.com/in/md-subman-rafid-5bb7601ab/" target="blank"><i className="fa fa-linkedin-square"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Banner;
