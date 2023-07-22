import React from 'react';
import '../../styles/newsletter.css';

import { Container, Row, Col } from 'reactstrap';
import newsLetter from '../../assets/images/newsletter01.jpg';

const Newsletter = () => {
  return (
  <section className="newsletter">
    <Container>
        <Row>
            <Col lg='6'>
                <div className="newsletter__content">
                    <h2>Sign Up for Newsletter</h2>

                    <div className="newsletter__input">
                        <input type="email" placeholder='Enter your email' />
                        <button className="btn newsletter__btn">Subscribe</button>
                    </div>

                    <p>
                    "We are happy with you." 
                    </p>
                </div>

            </Col>
            <Col lh='6'>
                <div className="newsletter__img">
                    <img src={newsLetter} alt="" />
                </div>
            </Col>
        </Row>
    </Container>
  </section>
  );
};

export default Newsletter;