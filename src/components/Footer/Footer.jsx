import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';

import DataContext from '../../context/data';

const Footer = ({ to }) => {
  const { footer } = useContext(DataContext);
  const { networks } = footer;

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link to={to} smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
        <div className="social-links">
          {networks &&
            networks.map((network) => {
              const { id, name, url } = network;
              return (
                <a key={id} href={url} rel="noopener noreferrer" target="_blank" aria-label={name}>
                  <i className={`fa fa-${name || 'refresh'} fa-inverse ${name}`} />
                </a>
              );
            })}
        </div>
        <hr />
        <p className="footer__text">Powered by caffiene ☕️ - Made by Me ⚡️</p>
      </Container>
    </footer>
  );
};

export default Footer;

Footer.propTypes = {
  to: PropTypes.string.isRequired,
};
