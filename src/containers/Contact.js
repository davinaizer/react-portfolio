import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { SocialIcon } from '../components';

import './Contact.scss';

import icon0 from '../assets/social_envelope-square.svg';
import icon1 from '../assets/social_facebook.svg';
import icon2 from '../assets/social_linkedin.svg';
import icon3 from '../assets/social_github.svg';

const Contact = () => (
  <section id="contact" className="contact-section">
    <Container>
      <Row>
        <Col lg="8" className="">
          <h2 className="section__title text-left">Contact</h2>
          <hr className="title__separator ml-0" />
          <p className="lead">
            If you want to reach me, feel free to email me or check my social
            profiles.
          </p>
        </Col>
      </Row>

      <Row>
        <Col className="my-5">
          <SocialIcon icon={icon0} href={'mailto:davi.naizer@gmail.com'} />
          <SocialIcon
            icon={icon1}
            href={'https://www.facebook.com/davi.naizer'}
          />
          <SocialIcon
            icon={icon2}
            href={'https://www.linkedin.com/in/davi-naizer'}
          />
          <SocialIcon icon={icon3} href={'https://github.com/davinaizer'} />
        </Col>
      </Row>
    </Container>
  </section>
);

export default Contact;
