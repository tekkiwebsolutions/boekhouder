import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Image, Col, Row, Button, Form, FormGroup, Input, FormText, Card } from 'react-bootstrap';
import { BtnWrapper, FormWrapper, BoxWrapper, BoxinputWrapper, CardsWrapper} from "./form.style";


export default class FORM extends React.Component {
  render() {
    return (
    <Container>
    <CardsWrapper>
      <Row>
          <Col>
            <Card>
              <Card.Body>
                <Col className="card-ico"><Image src={'icon_one.png'} /></Col>
                <h2>ZZP</h2>
                <Card.Title>€ 49 p/m</Card.Title>
                <Card.Subtitle>(vanaf)</Card.Subtitle>
                <Card.Text>
                  <span>if billed annually </span><br/>€139/m if billed monthly
                </Card.Text>
                <Button variant="secondary">Prijs opvragen</Button>
                <Card.Text>
                  Monthly expenses <br/>from €1k to €7.5k
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
               <Col className="card-ico"><Image src={'icon_two.png'} /></Col>
                <h2>ZZP</h2>
                <Card.Title>€ 49 p/m</Card.Title>
                <Card.Subtitle>(vanaf)</Card.Subtitle>
                <Card.Text>
                  if billed annually <br/>€139/m if billed monthly
                </Card.Text>
                <Button variant="primary">Prijs opvragen</Button>
                <Card.Text>
                  Monthly expenses <br/>from €1k to €7.5k
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
               <Col className="card-ico"><Image src={'icon_three.png'} /></Col>
                <h2>ZZP</h2>
                <Card.Title>€ 49 p/m</Card.Title>
                <Card.Subtitle>(vanaf)</Card.Subtitle>
                <Card.Text>
                  if billed annually <br/>€139/m if billed monthly
                </Card.Text>
                <Button variant="secondary">Prijs opvragen</Button>
                <Card.Text>
                  Monthly expenses <br/>from €1k to €7.5k
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
      </Row>
    </CardsWrapper>
    <Row>
    <Col md={{ span: 10, offset: 1 }}>
       <FormWrapper>
       <Form>
          <BoxWrapper>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridVolledige">
              <Form.Check type="checkbox" label="Volledige boekhouding" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridJaarrekening">
               <Form.Check type="checkbox" label="Jaarrekening" />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridAanigifte">
              <Form.Check type="checkbox" label="Aanigifte inkomstenbelasting" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridomzetbelasting">
               <Form.Check type="checkbox" label="Aangifte omzetbelasting (btm)" />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridSalaris">
              <Form.Check type="checkbox" label="Salarisadministratie" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridOverige">
               <Form.Check type="checkbox" label="Overige Werkzaamheden" />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridAangifte">
              <Form.Check type="checkbox" label="Aangifte vennootschapsbelasting" />
            </Form.Group>

          </Form.Row>
          </ BoxWrapper>
          <BoxinputWrapper>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridCompany">
              <Form.Control type="text" placeholder="Your Company name / Bedrijfsnaam *" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZipcode">
              <Form.Control type="number" placeholder="Zipcode / Postcode *" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridFisrtname">
              <Form.Control type="text" placeholder="Fisrtname / Voornaam *" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastname">
              <Form.Control type="text" placeholder="Lastname / Achternaam*" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridFisrtname">
              <Form.Control type="email" placeholder="Email *" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZipcode">
              <Form.Control type="number" placeholder="Phone Number *" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress2">
            <Form.Control type="text" placeholder="Comments" />
          </Form.Group>
          </ BoxinputWrapper>
          <BtnWrapper>
            <Button variant="outline-primary" size="sm">
              Bel Mij Vandaag
            </Button>
            <Button variant="secondary" size="sm">
              offerte aanvragen
            </Button>
          </BtnWrapper>
          </Form>
        </FormWrapper>
        </Col>
        </Row>
      </Container>
    );
  }
}
