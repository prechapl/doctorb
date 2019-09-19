import React, { Component, Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Image from 'react-bootstrap/Image';
import TwitterDisplay from './TwitterDisplay';
import ContactForm from './ContactForm';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
// import InstagramEmbed from "react-instagram-embed";
import Instagram from './InstaWidget';

class Show extends Component {
  constructor() {
    super();
    this.state = {
      formVisible: null
    };
  }

  render() {
    return (
      <Fragment>
        <Container
          className="justify-content-center"
          // className="d-flex flex-column p-3"
          style={{ marginTop: '90px' }}
        >
          <Row className="justify-content-center p-2">
            <Image
              src="/show-pics/VascularSurgery-DrRadio-logo.png"
              alt="Vascular Surgery Show"
            />
          </Row>
          <Row style={{ height: '40px' }} className="justify-content-center">
            <Image
              src="/show-pics/SiriusXM_grey.png"
              alt="Vascular Surgery Show"
              height="32px"
            />
            <Image
              src="/show-pics/Channel-110-grey.png"
              alt="Vascular Surgery Show"
              height="28px"
              className="ml-2 pt-2"
            />
          </Row>
          <Row className="justify-content-center p-3">
            <Carousel>
              <Carousel.Item>
                <Image
                  style={{ height: '350px' }}
                  className="d-block"
                  src="/show-pics/Todd-drradio.jpeg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  style={{ height: '350px' }}
                  className="d-block"
                  src="/show-pics/Todd-drradio-mic2.jpeg"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  style={{ height: '350px' }}
                  className="d-block"
                  src="/show-pics/operating.jpg"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Row>

          <Row xl={6} className="justify-content-center px-5">
            <p style={{ textIndent: 30 }}>
              <span style={{ fontSize: 24 }}>Dr. Todd Berland </span>
              discusses vascular health and diseases of the vascular system and
              how they are managed. The Vacular Surgery Show is recorded
              bi-monthly and airs live on SiriusXM channel 110 every other
              Friday 6am-8am ET and re-airs Friday 4pm-6pm ET. On-Demand
              episodes are also available via SiriusXM.
            </p>
          </Row>
          <Row className="justify-content-center">
            <ToggleButtonGroup
              type="radio"
              name="options"
              value="true"
              onChange={() =>
                this.setState({ formVisible: !this.state.formVisible })
              }
            >
              <ToggleButton
                style={{
                  background: '#74b4ca',
                  color: 'white',
                  borderColor: '#74b4ca',
                  marginBottom: 10
                }}
              >
                send Dr. Todd Berland a message
              </ToggleButton>
            </ToggleButtonGroup>
          </Row>
          <Row className="mt-3 justify-content-center">
            {this.state.formVisible ? <ContactForm /> : null}
          </Row>

          <Row className="m-2 ">
            <Col xs={12} md={6}>
              <TwitterDisplay twitterLoaded={false} />
            </Col>
            <Col xs={12} md={6}>
              <Instagram />
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Show;
