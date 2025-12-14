import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { FaFilePdf } from "react-icons/fa";
// import Instagram from "./InstaWidget";
import FacebookDisplay from "./FacebookDisplay";

class About extends Component {
  render() {
    return (
      <Container className="d-flex flex-column">
        <Row className="justify-content-center pt-5 mt-5 mb-2">
          <Col md={4} xs={11}>
            <Row className="justify-content-center">
              <Image
                className="border shadow p-2 bg-white rounded"
                src="/toddberland-500px.jpg"
                fluid
              />

              <Button
                href="/cv.pdf"
                className="mt-4"
                style={{
                  background: "#74b4ca",
                  color: "white",
                  borderColor: "#74b4ca"
                }}
              >
                <Col style={{ fontSize: "18px" }}>
                  Curriculum Vitae {<FaFilePdf className="mb-1 ml-1" />}
                </Col>
              </Button>
            </Row>
          </Col>
          <Col className="mt-2 p-4">
            <p style={{ textIndent: "40px" }} className="lead">
              Dr. Berland is a world renowned vascular surgeon based in New York
              City. He is listed in Castle Connolly “America’s Top Doctors” for
              2019 and has been a member of Alpha Omega Alpha, America’s top
              Medical Society, since 2003. Dr. Berland is published extensively
              and is the principal investigator for several ongoing research
              trials. Dr. Berland is also the host of the “Vascular Surgery
              Show” on Sirius/XM‘s Doctor Radio (Channel 110), which airs live
              bi-weekly on Fridays from 6-8am.
            </p>
            <p style={{ textIndent: "40px" }} className="lead">
              Dr. Berland obtained his degree from the Medical College of
              Georgia in 2003 and completed his General Surgery residency at
              Mayo Clinic in 2008, where, as Chief Resident, he was awarded a
              patent for a unique minimally invasive technique that can be used
              in different procedures over a wide range of surgical
              subspecialties. Dr. Berland decided to pursue a fellowship in
              Vascular Surgery when it became apparent that the field’s
              technology was rapidly advancing towards less invasive procedures,
              allowing patients to recover and return to their daily activities
              more quickly. Upon completing his fellowship at NYU’s Lagone
              Medical Center in 2010, Dr. Berland joined the faculty there and
              is currently the Director of Outpatient Vascular Interventions.
              Dr. Berland speaks nationally and internationally.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center mt-3">
          <Col xs={12} xl={4} className="pt-4 pb-2">
            <Card
              className="shadow"
              style={{
                borderWidth: 2,
                borderColor: "#74b4ca",
                height: 470
              }}
            >
              <Card.Body>
                <Card.Img variant="top" src="/show-pics/operating.jpg" />

                <h4 className="mt-2"> Chance Favors the Prepared</h4>
                <p style={{ fontSize: "14px" }}>
                  <i>by Danielle Wong Moores</i>
                </p>
                <Card.Text>
                  Surgeon, innovator, radio host — Dr. Todd Berland is always
                  looking for the next opportunity.
                </Card.Text>
                <Card.Link href="http://magazines.augusta.edu/2018/12/21/chance-favors-the-prepared/">
                  read full article
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} xl={4} className="pt-4 pb-2 mb-3">
            <Card
              className="shadow"
              style={{
                borderWidth: 2,
                borderColor: "#74b4ca",
                height: 470
              }}
            >
              <Card.Body>
                <Row className="justify-content-center mb-3">
                  <h4 className="mt-2"> Available for Expert Work</h4>
                </Row>
                <Card.Text style={{ textIndent: "20px" }}>
                  Dr. Berland's expertise in vascular disease and treatments has
                  lead to being sought out to provide expert opinion in legal
                  cases. He is available for both plaintiff and defense side
                  work. Dr. Berland’s specialist knowledge supports considered
                  opinions which may be placed before a court (or other judicial
                  or quasi-judicial body – for example, a tribunal or
                  arbitration). His opinion may assist the court or parties in
                  reaching its decision.
                  <br />
                </Card.Text>
                <Card.Link href="#contact">contact Dr. Berland</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} xl={4} className="pt-4 pb-2 mb-3">
            <Card
              className="shadow"
              style={{
                borderWidth: 2,
                borderColor: "#74b4ca",
                height: 470
              }}
            >
              <Card.Body>
                <Row className="justify-content-center mb-3">
                  <h4 className="mt-2"> Available, Affable & Able</h4>
                </Row>
                <Card.Text style={{ textIndent: "20px" }}>
                  "In addition to diagnosing and treating people with venous
                  disease, aortic disease, thoracic disease, and other
                  conditions, I connect with my patients and try to relate to
                  them on a personal level, so I know what they’re going
                  through. My patients can contact me anytime, day or night, and
                  I work hard to be “available, affable, and able”—the three
                  “A’s” of surgery."
                  <br />
                  <br />
                  <small>
                    <i>- Todd Berland, M.D.</i>
                  </small>
                  <br />
                </Card.Text>
                <Card.Link href="#contact">contact Dr. Berland</Card.Link>
              </Card.Body>
            </Card>
          </Col>

          {/* Facebook feed disabled for now - needs proper page URL
          <Col xs={10} md={4}>
            <FacebookDisplay />
          </Col>
          */}
        </Row>
      </Container>
    );
  }
}

export default About;
