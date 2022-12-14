import { Container, Row, Button } from "react-bootstrap";
import "./LandingPage.css";
const LandingPage = () => {
  return (
    <div className="main ">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome to My Blog </h1>
            </div>

            <div className="buttonContainer">
              <a href="/login">
                <Button size="lg" className="landingButton">
                  LOGIN
                </Button>
              </a>
              <a href="/login">
                <Button
                  size="lg"
                  className="landingButton"
                  variant="outline-primary"
                >
                  SIGNUP
                </Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
