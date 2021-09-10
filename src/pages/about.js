import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';

import Header from '../components/Header/Header';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import Title from '../components/Title/Title';
import ProjectImg from '../components/Image/ProjectImg';
import { DataProvider } from '../context/data';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

import { aboutPageData, footerData } from '../mock/data';

const About = () => {
  const { img, title, paragraphs } = aboutPageData;

  const [footer, setFooter] = useState({});
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setFooter({ ...footerData });
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <>
      <DataProvider value={{ footer }}>
        <Header />
        <section id="about-hero" className="jumbotron">
          <Nav />
          <Container>
            <Title title={title} />
            <Fade bottom duration={1000} delay={500} distance="30px">
              <div className="about-hero-wrapper__image">
                <Tilt
                  options={{
                    reverse: false,
                    max: 8,
                    perspective: 1000,
                    scale: 1,
                    speed: 300,
                    transition: true,
                    axis: null,
                    reset: true,
                    easing: 'cubic-bezier(.03,.98,.52,.99)',
                  }}
                >
                  <div data-tilt className="thumbnail rounded">
                    <ProjectImg alt={title} filename={img} />
                  </div>
                </Tilt>
              </div>
            </Fade>
          </Container>
        </section>
        <section id="about-page">
          <Container>
            <Row className="about-page-wrapper">
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
                <div className="about-page-wrapper__info">
                  {paragraphs.map((item, index) => {
                    const key = index;
                    return (
                      <p key={`info-wrapper-text-${key}`} className="about-page-wrapper__info-text">
                        {item}
                      </p>
                    );
                  })}
                </div>
              </Fade>
            </Row>
          </Container>
        </section>
        <Footer />
      </DataProvider>
    </>
  );
};

export default About;
