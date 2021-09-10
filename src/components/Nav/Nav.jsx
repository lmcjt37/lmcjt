import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'gatsby';

const Navigation = () => {
  return (
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
  );
};

export default Navigation;
