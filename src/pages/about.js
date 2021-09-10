import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

import Header from '../components/Header/Header';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import Title from '../components/Title/Title';
import AboutImg from '../components/Image/AboutImg';
import { DataProvider } from '../context/data';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

import { aboutPageData, footerData } from '../mock/data';

const About = () => {
  const { img, title } = aboutPageData;

  const [footer, setFooter] = useState({});

  useEffect(() => {
    setFooter({ ...footerData });
  }, []);

  return (
    <>
      <DataProvider value={{ footer }}>
        <Header />
        <section id="hero" className="jumbotron">
          <Nav />
          <Container>
            <Title title={title} />
            <Fade bottom duration={1000} delay={500} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Container>
        </section>
        <Footer />
      </DataProvider>
    </>
  );
};

export default About;
