import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

import Header from '../components/Header/Header';
import Title from '../components/Title/Title';
import AboutImg from '../components/Image/AboutImg';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

import { aboutPageData } from '../mock/data';

const About = () => {
  const { img, title } = aboutPageData;

  return (
    <>
      <Header />
      <section id="hero" className="jumbotron">
        <Container>
          <Title title={title} />
          <Fade bottom duration={1000} delay={500} distance="30px">
            <div className="about-wrapper__image">
              <AboutImg alt="profile picture" filename={img} />
            </div>
          </Fade>
        </Container>
      </section>
    </>
  );
};

export default About;
