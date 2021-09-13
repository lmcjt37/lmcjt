import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'gatsby';
import Fade from 'react-reveal/Fade';

const Navigation = () => {
  return (
    <Fade top duration={1000} delay={500} distance="30px">
      <nav className="nav nav-static-top">
        <Container>
          <Link to="/" activeClassName="nav-active" className="nav__item">
            Home
          </Link>
          <Link to="/about" activeClassName="nav-active" className="nav__item">
            About
          </Link>
        </Container>
      </nav>
    </Fade>
  );
};

export default Navigation;
