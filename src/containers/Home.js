import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'reactstrap';

import './Home.scss';

const Home = () => (
  <header className="content-section">
    <Container className="d-flex h-100">
      <Row>
        <Col sm="8">
          <h1 className="section__title">davi naizer</h1>
          <hr className="title__separator ml-0" />
          <h2 className="mx-auto my-5">Javascript Developer</h2>
          <p>
            Hi, Iʼve been developing web and e-learning content for almost 18
            years now. Over all these years I had the pleasure to work on many
            projects along leading companies like Kraft Foods, Electrolux, Volvo
            Motors, HSBC Bank, Furukawa Electric, GP Strategies, Metlife, and
            many others.
            <br />
            <br />
            Please feel free to check a bit more about my me and my work.
          </p>
          <Link to="/about">
            <Button className="home__btn" color="primary" size="lg">
              GET TO KNOW
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  </header>
);

export default Home;
