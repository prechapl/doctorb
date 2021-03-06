import React, { Component, Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';

class Specialties extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: null
    };
  }

  componentDidMount() {
    this.setState({ activeKey: this.props.match.params.dak });
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.setState({ activeKey: this.props.match.params.dak });
    }
  }

  toggleAccordian(keyValue) {
    if (keyValue === this.state.activeKey) {
      this.setState({ activeKey: null });
    } else {
      this.setState({ activeKey: keyValue });
    }
  }

  render() {
    return (
      <Fragment>
        <Container style={{ marginTop: '80px' }} className="d-flex flex-column" fluid>
          <Col className="m-2">
            <Row
              className="justify-content-center mt-4 mb-3"
              style={{
                fontSize: 18,
                color: '#272626',
                fontFamily: 'Tahoma, sans-serif'
              }}
            >
              Dr. Berland's specializes in the following areas. Please select a specialty to learn more.
            </Row>
          </Col>
          <Row className="justify-content-center mb-4 p-3">
            <Col
              md="11"
              xl="7"
              style={{
                backgroundColor: '#74b4ca',
                padding: 2,
                fontSize: 20
              }}
            >
              <Accordion activeKey={this.state.activeKey}>
                <Card className="text-center">
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="0"
                    onClick={() => this.toggleAccordian('0')}
                    style={{ background: '#f5fcfd' }}
                  >
                    Vascular Surgery
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <p
                        style={{
                          textIndent: '40px'
                        }}
                        className="lead"
                      >
                        A diagnosis of vascular disease can be frightening. Knowing that you are in the hands of a
                        meticulous and caring surgeon can help to put those fears to rest. Although we are surgeons, the
                        majority of the patients that we evaluate are managed medically (without a procedure) by
                        prescribing interventions such as medication and/or lifestyle modifications while we monitor
                        your condition for further progression. Following a thorough physical exam, our physicians will
                        help coordinate your vascular care, arranging for any vascular imaging tests (such as Duplex
                        Ultrasound or CT scan) that may be necessary in order to make an accurate diagnosis and choose
                        the best treatment.
                      </p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card className="text-center">
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey="1"
                    onClick={() => this.toggleAccordian('1')}
                    style={{ background: '#f7fffd' }}
                  >
                    Endovascular Surgery
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      <p
                        style={{
                          textIndent: '40px'
                        }}
                        className="lead"
                      >
                        Endovascular surgery is an innovative, less invasive procedure used to treat problems affecting
                        the blood vessels, such as an aneurysm, which is a swelling or “ballooning” of the blood vessel.
                        The surgery involves making a small incision near each hip to access the blood vessels. An
                        endovascular graft, which is a special fabric tube device framed with stainless steel
                        self-expanding stents, is inserted through the arteries in a catheter, a long, narrow flexible
                        tube, and positioned inside the aorta. Once in place, the graft expands and seals off the
                        aneurysm, preventing blood from flowing into the aneurysm. The graft remains in the aorta
                        permanently.
                      </p>
                      <p
                        style={{
                          textIndent: '40px'
                        }}
                        className="lead"
                      >
                        In the past, this condition was treated by open surgery, involving an incision in the side of
                        the chest or breastbone and a long recovery period. Patients generally stay in the hospital for
                        seven to 10 days following open surgery and undergo a three-month recovery.
                      </p>
                      <p
                        style={{
                          textIndent: '40px'
                        }}
                        className="lead"
                      >
                        An alternative to open surgery, endovascular surgery offers many advantages, including a shorter
                        recovery period, less discomfort, local or regional anesthesia instead of general anesthesia,
                        smaller incisions, less stress on the heart and fewer risks for patients with other medical
                        conditions. This procedure may benefit patients who need surgery but are at a high-risk of
                        complications because of other conditions.
                      </p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card className="text-center">
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey="2"
                    onClick={() => this.toggleAccordian('2')}
                    style={{ background: '#f5fcfd' }}
                  >
                    Peripheral Vascular Disease
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="2">
                    <Card.Body>
                      <p
                        style={{
                          textIndent: '40px'
                        }}
                        className="lead"
                      >
                        Lower extremity arterial disease occurs when substances in the blood called plaque build up in a
                        leg artery, creating a blockage. This is a serious condition, because a lack of blood flow can
                        result in chronic leg pain and, when the disease is advanced, open sores, and possibly
                        amputation.
                      </p>
                      <p
                        style={{
                          textIndent: '40px'
                        }}
                        className="lead"
                      >
                        NYU Langone was the first academic medical center to receive accreditation for its Vein Center
                        from the InterSocietal Accreditation Commission, recognizing our commitment to quality
                        evaluation and care of patients with vein disorders. Our world-renowned surgeons and
                        state-of-the-art facilities make the Vein Center at NYU Langone one of the top facilities for
                        treating vein conditions. We are the only vein center in the tri-state area that is part of a
                        large academic medical center and vascular surgeons from around the world come to NYU Langone to
                        learn our techniques.
                      </p>
                      <p
                        style={{
                          textIndent: '40px'
                        }}
                        className="lead"
                      >
                        Our goal is to make your legs healthy and beautiful again. And we do this without a hospital
                        admission, general anesthesia, or a lengthy recuperation period. We use minimally invasive
                        procedures, performed in the office, and you can resume your normal activities immediately or
                        shortly after. We treat varicose veins, spider veins, and reticular veins, as well as deep vein
                        thrombosis, venous ulcers, and other venous disorders.
                      </p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card className="text-center">
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey="3"
                    onClick={() => this.toggleAccordian('3')}
                    style={{ background: '#f7fffd' }}
                  >
                    Angioplasty / Stenting
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="3">
                    <Card.Body>
                      <p
                        style={{
                          textIndent: '40px'
                        }}
                        className="lead"
                      >
                        Angioplasty is used to widen areas within coronary arteries that have become narrowed. In this
                        procedure, a thin flexible tube (catheter) which has a small inflatable balloon at the tip is
                        positioned within the narrowed section of the artery. The balloon is inflated for a short period
                        of time to push the plaque back against the wall of the artery so that blood can flow better.
                      </p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card className="text-center">
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey="4"
                    onClick={() => this.toggleAccordian('4')}
                    style={{ background: '#f5fcfd' }}
                  >
                    Venous Disease
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="4">
                    <Card.Body>
                      <p
                        style={{
                          textIndent: '40px'
                        }}
                        className="lead"
                      >
                        Chronic venous insufficiency occurs when valves in the veins of the legs, which keep blood
                        flowing toward the heart, stop working properly. It can cause aching, swelling, and cramping in
                        the legs, as well as skin color changes and varicose veins.
                      </p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card className="text-center">
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey="5"
                    onClick={() => this.toggleAccordian('5')}
                    style={{ background: '#f7fffd' }}
                  >
                    Deep Vein Thrombosis
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="5">
                    <Card.Body>
                      <p
                        style={{
                          textIndent: '40px'
                        }}
                        className="lead"
                      >
                        Deep vein thrombosis, also known as DVT, is a blood clot that forms in a vein, usually in a leg.
                        Occasionally, a clot may form in the pelvis or an arm. Left untreated, it can lead to pulmonary
                        embolism, a potentially life-threatening condition in which one or more blood clots break loose
                        from a vein, travel through the bloodstream, and block blood flow in one or both lungs.
                      </p>
                      <p
                        style={{
                          textIndent: '40px'
                        }}
                        className="lead"
                      >
                        NYU Langone vascular specialists are experts at recognizing and managing deep vein thrombosis.
                        Our doctors also help to prevent pulmonary embolism or a recurrence of blood clots. At NYU
                        Langone’s Venous Thromboembolic Center (VTEC), our experts are working to pioneer a new standard
                        of care for diagnosis and treatment of deep vein thrombosis. NYU Langone doctors from multiple
                        specialties assess people with the condition and quickly deliver care.
                      </p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card className="text-center">
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey="6"
                    onClick={() => this.toggleAccordian('6')}
                    style={{ background: '#f5fcfd' }}
                  >
                    Aortic Anuerysms
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="6">
                    <Card.Body>
                      <p
                        style={{
                          textIndent: '40px'
                        }}
                        className="lead"
                      >
                        A potentially life-threatening bulge in the aorta, the body’s largest artery. Treatment for an
                        aortic aneurysm can include watchful waiting, medication, or surgery.
                      </p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card className="text-center">
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey="7"
                    onClick={() => this.toggleAccordian('7')}
                    style={{ background: '#f7fffd' }}
                  >
                    Cerebrovascular Disease
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="7">
                    <Card.Body>
                      <p
                        style={{
                          textIndent: '40px'
                        }}
                        className="lead"
                      >
                        A cerebrovascular disease is a vascular disease of the cerebral circulation. Arteries supplying
                        oxygen to the brain are affected resulting in one of a number of cerebrovascular diseases. Most
                        commonly this is a stroke or mini-stroke and sometimes can be a hemorrhagic stroke.
                      </p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card className="text-center">
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey="8"
                    onClick={() => this.toggleAccordian('8')}
                    style={{ background: '#f5fcfd' }}
                  >
                    Lymphedema
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="8">
                    <Card.Body>
                      <p
                        style={{
                          textIndent: '40px'
                        }}
                        className="lead"
                      >
                        Lymphedema is a buildup of lymph fluid, which contains infection-fighting white blood cells. The
                        condition can cause swelling anywhere in the body, including the arm, hand, leg, or foot.
                        Lymphedema is most commonly caused by the removal of or damage to lymph nodes during treatment
                        for cancer, though some people are born with it. There is no cure for lymphedema, and so doctors
                        focus on managing the symptoms.
                      </p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card className="text-center">
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey="9"
                    onClick={() => this.toggleAccordian('9')}
                    style={{ background: '#f7fffd' }}
                  >
                    Mesenteric Insufficiency
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="9">
                    <Card.Body>
                      <p
                        style={{
                          textIndent: '40px'
                        }}
                        className="lead"
                      >
                        Mesenteric ischemia is a narrowing or blockage in the arteries that supply blood to the
                        intestines. This condition can be chronic, meaning it develops over time, or acute, meaning it
                        comes on suddenly. Without treatment, mesenteric ischemia can deprive the intestines of oxygen
                        and vital nutrients. This can lead to the death of intestinal tissue—a life-threatening
                        condition called gangrene.
                      </p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card className="text-center">
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey="10"
                    onClick={() => this.toggleAccordian('10')}
                    style={{ background: '#f5fcfd' }}
                  >
                    Dialysis Access
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="10">
                    <Card.Body>
                      <p
                        style={{
                          textIndent: '40px'
                        }}
                        className="lead"
                      >
                        Dialysis machines do the work of the kidneys, filtering waste, extra fluid, and excess salt from
                        the blood. At NYU Langone, doctors may recommend dialysis for adults who’ve been diagnosed with
                        advanced kidney disease or kidney failure who opt not to have a kidney transplant because they
                        are being treated for other conditions, such as cancer. Dialysis is also used for people
                        awaiting a kidney transplant. NYU Langone doctors typically recommend dialysis for people with
                        less than 10 percent of normal kidney function.
                      </p>
                      <p
                        style={{
                          textIndent: '40px'
                        }}
                        className="lead"
                      >
                        In hemodialysis, blood is pumped from the body through tubes called catheters into a dialysis
                        machine, which filters waste before returning clean blood to the body.
                      </p>
                      <p
                        style={{
                          textIndent: '40px'
                        }}
                        className="lead"
                      >
                        Weeks to months before you begin hemodialysis, a surgeon creates an access area in the arm or
                        neck that allows blood to travel through catheters to the machine. This access can be created in
                        different ways. Doctors may make a fistula by joining an artery and vein in the arm. Or they may
                        use a graft, in which a soft tube joins an artery and vein in the arm. Doctors may also opt for
                        a catheter, in which a soft tube is implanted in a large vein, usually in the neck. These
                        procedures are typically performed with regional anesthesia to numb the area above the
                        collarbone and the arm.
                      </p>
                      <p
                        style={{
                          textIndent: '40px'
                        }}
                        className="lead"
                      >
                        To begin treatment, two needles attached to catheters are inserted into the arm or neck to reach
                        the access area. Blood enters one tube and is sent to the dialysis machine for filtering, and
                        then returns to the body through the second tube. A few ounces of blood are filtered at a time.
                      </p>
                      <p
                        style={{
                          textIndent: '40px'
                        }}
                        className="lead"
                      >
                        You may experience nausea or abdominal cramps during dialysis. Your doctor may adjust your
                        treatment to help ease these symptoms. Your blood pressure and heart rate are monitored.
                        Afterward, the needles are removed and the access area is covered with a bandage. Your blood is
                        tested once a month to ensure that waste is being removed properly.
                      </p>
                      <p
                        style={{
                          textIndent: '40px'
                        }}
                        className="lead"
                      >
                        For most people, dialysis treatment lasts three to four hours and occurs three times per week at
                        an outpatient dialysis center. A typical schedule is Monday, Wednesday, Friday or Tuesday,
                        Thursday, Saturday, at the same time of day. Some people can be treated at home, using a
                        portable hemodialysis machine, which is about the size of a suitcase. You and your caregiver are
                        first trained to operate the machine.
                      </p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card className="text-center">
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey="11"
                    onClick={() => this.toggleAccordian('11')}
                    style={{ background: '#f7fffd' }}
                  >
                    Thoracic Outlet Syndrome
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="11">
                    <Card.Body>
                      <p
                        style={{
                          textIndent: '40px'
                        }}
                        className="lead"
                      >
                        Thoracic outlet syndrome is a narrowing of the space between the first rib and the collarbone
                        that causes nerves, arteries, or veins to become compressed. It can lead to pain, swelling,
                        numbness, skin discoloration, and blood clots in the neck, shoulder, arm, or hand.
                      </p>
                      <p
                        style={{
                          textIndent: '40px'
                        }}
                        className="lead"
                      >
                        Specialists at NYU Langone have a long history of managing this rare, serious condition that
                        other doctors may rarely encounter. Our physical and occupational therapists at Rusk
                        Rehabilitation provide treatments to relieve symptoms and improve mobility. Vascular surgeons at
                        our NYU Langone heart programs are experts at using minimally invasive procedures or surgery to
                        manage symptoms.
                      </p>
                      <p
                        style={{
                          textIndent: '40px'
                        }}
                        className="lead"
                      >
                        Treatment for thoracic outlet syndrome may include physical and occupational therapy,
                        medication, balloon angioplasty and venoplasty, and surgery.
                      </p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card className="text-center">
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey="12"
                    onClick={() => this.toggleAccordian('12')}
                    style={{ background: '#f5fcfd' }}
                  >
                    Pelvic Congestion Syndrome
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="12">
                    <Card.Body>
                      <p
                        style={{
                          textIndent: '40px'
                        }}
                        className="lead"
                      >
                        Pelvic varices embolization is used to treat pain caused by pelvic congestion syndrome. Using a
                        very small incision, your doctor inserts a thin tube called a catheter into a vein in the groin
                        or neck. Using real-time X-ray, also known as fluoroscopy, the doctor directs the catheter into
                        the swollen veins of the ovaries and the pelvis. Contrast material is injected to confirm the
                        location of the swelling. The blood supply to the varices is then blocked using metallic coils
                        or medicines that can shrink the vein. Sometimes the procedure is divided into two stages in
                        order to treat the ovarian and pelvic veins separately.
                      </p>
                      <p
                        style={{
                          textIndent: '40px'
                        }}
                        className="lead"
                      >
                        Most women experience some pelvic pain for the first three days after the procedure. Your doctor
                        may prescribe oral pain medication for any discomfort.
                      </p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Specialties;
