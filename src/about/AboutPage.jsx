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
            <p mb={12}>
              This site interacts with a smart contract used to send waves
              (greeting messages) to me. It even has a 20% chance of giving the
              waver some free rinkeby!{" "}
              <span role="img" aria-label="Smile">
                😊
              </span>
            </p>
            <p>
              Please note, you need to have metamask and some Rinkeby to use
              this app:
            </p>
            <p>
              Metamask download <a href="https://metamask.io/download/">link</a>
            </p>

            <p>
              Rinkeby faucet <a href="https://rinkebyfaucet.com/">link</a>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutPage;
