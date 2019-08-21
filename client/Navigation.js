import React, { Component, Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';

class Navigation extends Component {
  render() {
    return (
      <Fragment>
        <Row style={{ marginBottom: '20px' }}>
          <Navbar
            fixed="top"
            bg="light"
            expand="md"
            collapseOnSelect
            style={{
              borderStyle: 'solid',
              borderWidth: '1px 3px 3px 3px',
              borderColor: '#74b4ca',
              padding: 0,
              paddingRight: 5,
              paddingLeft: 5
            }}
          >
            <Container>
              <Navbar.Brand href="#">
                <img
                  src="/ToddBerlandMD_logo.png"
                  height="70px"
                  alt="Tood Berland, MD - Vascular Specialists"
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="justify-content-center">
                  <Nav.Item>
                    <Nav.Link href="#about">About</Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link href="#specialties">Specialties</Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link href="#publications">Publications</Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link href="#awareness">Patient Awareness</Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link href="#show">Sirius XM Show</Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Row>
      </Fragment>
    );
  }
}

export default Navigation;
