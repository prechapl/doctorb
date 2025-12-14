import React, { Component, Fragment } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Publications extends Component {
  // ResearchGate widget removed - their X-Frame-Options policy blocks embedding
  // componentDidMount() {
  //   (() => {
  //     var st = document.createElement("script");
  //     st.type = "text/javascript";
  //     st.async = true;
  //     st.src =
  //       "https://www.researchgate.net/javascript/plugin/plugin-api-min.js";
  //     var s = document.getElementsByTagName("script")[0];
  //     s.parentNode.insertBefore(st, s);
  //   })();
  // }

  render() {
    return (
      <Fragment>
        <Container className="d-flex flex-column pt-5 mt-5" fluid>
          <Row className="justify-content-center">
            <Col xs={12} md={5}>
              <Card
                style={{
                  padding: 1,
                  marginTop: 5,
                  borderWidth: 2,
                  borderColor: "#74b4ca"
                }}
                className="shadow"
              >
                <Card.Header>Dr. Berland's current Clinical Trials</Card.Header>
                <Card.Body>
                  <Card.Text>
                    <Row className="justify-content-between">
                      <Col xs={9} style={{ fontWeight: "bold" }}>
                        Medtronic Abre Stent Trial
                      </Col>
                      <Col xs={3}>
                        <small>
                          <i>2016-Present</i>
                        </small>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="ml-1 mb-3">
                        Evaluating the Medtronic Abre venous stent <br />
                        Sponsor: Medtronic <br /> Principal Investigator: Todd
                        Berland, M.D.
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={9} style={{ fontWeight: "bold" }}>
                        Cook VIVO Trial
                      </Col>
                      <Col xs={3}>
                        <small>
                          <i>2016-Present</i>
                        </small>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="ml-1 mb-3">
                        Evaluating the Cook Zilver Vena Stent – Active Follow Up
                        <br />
                        Sponsor: Cook
                        <br />
                        Principal Investigator: Todd Berland, M.D.
                      </Col>
                    </Row>

                    <Row className="justify-content-between">
                      <Col xs={9} style={{ fontWeight: "bold" }}>
                        EndoAVF Trial
                      </Col>
                      <Col xs={3}>
                        <small>
                          <i>2016-Present</i>
                        </small>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="ml-1 mb-3">
                        Evaluating efficacy of percutaneous fistula creation
                        Enrollment to Summer 2019
                      </Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={5}>
              <Card
                style={{
                  padding: 2,
                  marginTop: 8,
                  borderWidth: 2,
                  borderColor: "#74b4ca"
                }}
                className="shadow"
              >
                <Card.Body>
                  <Card.Link
                    href="/publications/1000-saphenous-ablations-1.pdf"
                    className="text-dark"
                  >
                    <Card.Img
                      variant="top"
                      src="/publications/1000-saphenous-ablations-pic3.png"
                      className="mb-3"
                    />
                    Laser Saphenous Ablations in More Than 1,000 Limbs With
                    Long-Term Dup Examination Follow-Up
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={5}>
              <Card
                style={{
                  padding: 2,
                  marginTop: 8,
                  borderWidth: 2,
                  borderColor: "#74b4ca"
                }}
                className="shadow"
              >
                <Card.Body>
                  <Card.Link
                    className="text-dark"
                    href="/publications/Endovascular-Creation-of-Arteriovenous.pdf"
                  >
                    <Card.Img
                      variant="top"
                      src="/publications/Endovascular-Creation-of-Arteriovenous-pic1.png"
                      className="mb-3"
                    />
                    Endovascular Creation of Arteriovenous Fistulae for
                    Hemodialysis Access with a 4 Fr Device: Clinical Experience
                    from the EASE Study
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={5}>
              <Card
                style={{
                  padding: 2,
                  marginTop: 8,
                  borderWidth: 2,
                  borderColor: "#74b4ca"
                }}
                className="shadow"
              >
                <Card.Body>
                  <Card.Link className="text-dark" href="#arteryimbrication">
                    <Card.Img
                      variant="top"
                      src="/publications/CommonCarotidArteryImbrication-thumb.png"
                      className="mb-3"
                    />
                    Common carotid artery imbrication as an adjunct to carotid
                    endarterectomy to prevent postoperative carotid kinking
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={5}>
              <Card
                style={{
                  padding: 2,
                  marginTop: 8,
                  borderWidth: 2,
                  borderColor: "#74b4ca"
                }}
                className="shadow"
              >
                <Card.Body>
                  <Card.Link className="text-dark" href="#mesentericischemia">
                    <Card.Img
                      variant="top"
                      src="/publications/Acute-Mesenteric-Ischemia-pic.jpg"
                      className="mb-3"
                    />
                    Acute Mesenteric Ischemia
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={5}>
              <Card
                style={{
                  padding: 2,
                  marginTop: 8,
                  borderWidth: 2,
                  borderColor: "#74b4ca"
                }}
                className="shadow"
              >
                <Card.Body>
                  <Card.Link
                    className="text-dark"
                    href="#cysticadventitialdisease"
                  >
                    <Card.Img
                      variant="top"
                      src="/publications/Cysticadventitialdiseaseofthepoplitealartery.png"
                      className="mb-3"
                    />
                    Cystic adventitial disease of the popliteal artery: is there
                    a consensus in management
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={5}>
              <Card
                style={{
                  padding: 2,
                  marginTop: 8,
                  borderWidth: 2,
                  borderColor: "#74b4ca"
                }}
                className="shadow"
              >
                <Card.Body>
                  <Card.Link
                    className="text-dark"
                    href="#IntentionalOcclusionAAA"
                  >
                    <Card.Img
                      variant="top"
                      src="/publications/1000-saphenous-ablations-pic1.jpg"
                      className="mb-3"
                    />
                    A unique technique for intentional occlusion of an abdominal
                    aortic aneurysm
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={5}>
              <Card
                style={{
                  padding: 2,
                  marginTop: 5,
                  borderWidth: 2,
                  borderColor: "#74b4ca"
                }}
                className="shadow"
              >
                <Card.Body>
                  <Card.Link className="text-dark" href="#UpdateEVLA">
                    <Card.Img
                      variant="top"
                      src="/publications/UpdateonEndovenousLaserAblation_pic1.png"
                      className="mb-3"
                    />
                    Update on Endovenous Laser Ablation
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={5}>
              <Card
                style={{
                  padding: 1,
                  marginTop: 5,
                  borderWidth: 2,
                  borderColor: "#74b4ca"
                }}
                className="shadow"
              >
                <Card.Header>Research Publications</Card.Header>
                <Card.Body>
                  <Card.Text>
                    View Dr. Berland's complete publication list and research profile on ResearchGate
                  </Card.Text>
                  <a 
                    href="https://www.researchgate.net/profile/Todd_Berland" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ backgroundColor: "#00ccbb", borderColor: "#00ccbb" }}
                  >
                    View ResearchGate Profile
                  </a>
                  <div className="mt-3">
                    <small className="text-muted">
                      ResearchGate is a professional network for scientists and researchers to share papers, ask and answer questions, and find collaborators.
                    </small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Publications;
