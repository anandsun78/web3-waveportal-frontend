import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AboutPage = () => {
  return (
    <div>
      <Container className="bg-transparent jumbotron-fluid p-0">
        <Row className="justify-content-center ">
          <Col md={8} sm={12}>
            <h1 className="text-center">About</h1>
            <p>
              This site was created to keep a track of all the Canadian deals
              and flyers by monitoring the website redflagdeals.com
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutPage;
