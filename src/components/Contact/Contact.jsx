import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import DataContext from '../../context/data';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(DataContext);
  const { title, cta, btn, email } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title={title} />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">{cta}</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={`mailto:${email}`}
            >
              {btn}
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
