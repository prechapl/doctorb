import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SocialIcon } from 'react-social-icons';

import { Link } from 'react-router-dom';

class Footer extends Component {

  render() {
    return (
      <Container fluid={true} className="bg-light">
        <Row>
          <Container>
            <Row className="mb-5">
                <Col sm className="mt-5">
                  <Link to="/" className="text-dark"><h6>Home</h6></Link>
                  <Link to="/about" className="text-dark"><h6>About</h6></Link>
                  <Link to="/publications" className="text-dark"><h6>Publications</h6></Link>
                  <Link to="/show" className="text-dark">
                    <h6>
                      <i>Vascular Surgery Show</i> SiriusXM
                    </h6>
                  </Link>
                  <Link to="/contact" className="text-dark"><h6>Contact</h6></Link>
                  <p>
                    Tel: <a href="tel:2122635060">212-263-5060</a>
                  </p>
                  <SocialIcon url="https://www.linkedin.com/in/todd-berland-5228ab19/" style={{ height: 40, width: 40 }} />
                  <SocialIcon url="https://twitter.com/VascularDr" style={{ height: 40, width: 40 }} className="ml-2 mr-2" />
                  <SocialIcon url="https://www.instagram.com/thevasculardr/" style={{ height: 40, width: 40 }} />
                </Col>
                <Col sm className="mt-5">
                  <Link to="/specialties" className="text-dark"><h6>Specialties</h6></Link>
                  <ul>
                    {/* <li><a href="#Specialties/0" >Vascular Surgery </a></li> */}
                    {/* <li><a href="#Specialties/1" >Endovascular Surgery </a></li> */}
                    <li><Link to="Specialties/0" >Vascular Surgery </Link></li>
                    <li><Link to="#Specialties/1" >Endovascular Surgery </Link></li>
                    <li><Link to="#Specialties/2" >Peripheral Vascular Disease </Link></li>
                    <li><Link to="#Specialties/3" >Angioplasty / Stenting </Link></li>
                    <li><Link to="#Specialties/4" > Venous Disease</Link></li>
                    <li><Link to="#Specialties/5" > Deep Vein Thrombosis </Link> </li>
                    <li><Link to="#Specialties/6" >Aortic Anuerysms </Link></li>
                    <li><Link to="#Specialties/7" >Cerebrovascular Disease </Link></li>
                  </ul>
                </Col>
                <Col lg={6} className="mt-4">
                  <img className="img-fluid" alt="static Mapbox map of the NYU Langone Medical Center" src="https://api.mapbox.com/styles/v1/wgriffin13/cjz4lr6nr01lb1co0n3j94lok/static/-73.9731,40.742,14,0,0/600x400@2x?access_token=pk.eyJ1Ijoid2dyaWZmaW4xMyIsImEiOiJjanNmZThqZTgwNTY2NDR0N2FpcWhiN21yIn0.z913-AGo9Vpf6OLehajKgQ" />
                </Col>
            </Row>
          </Container>
        </Row>
      </Container>
    );
  }
}

export default Footer;
