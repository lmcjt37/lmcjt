import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';

import DataContext from '../../context/data';
import Nav from '../Nav/Nav';

const Header = () => {
  const { hero } = useContext(DataContext);
  const { title, name, subtitle, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    // constrain the blobs within the container
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <section id="hero" className="jumbotron">
        <Nav />
        <Container>
          {isDesktop && (
            <div className="darthfader">
              <div className="shape-blob" />
              <div className="shape-blob one" />
              <div className="shape-blob two" />
            </div>
          )}
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
            <h1 className="hero-title">
              {title} <span className="text-color-main">{name}</span>
              <br />
              {subtitle}
            </h1>
          </Fade>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
            <p className="hero-cta">
              <span className="cta-btn cta-btn--hero">
                <Link to="about" smooth duration={1000}>
                  {cta}
                </Link>
              </span>
            </p>
          </Fade>
        </Container>
      </section>
    </div>
  );
};

export default Header;
