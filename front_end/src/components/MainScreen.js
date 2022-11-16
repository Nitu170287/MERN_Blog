import { Row } from "react-bootstrap";
const MainScreen = ({ title, children }) => {
  return (
    <div className="mainback">
      <container>
        <Row>
          <div className="page">
            {title && (
              <>
                <h1 className="heading">{title}</h1>
                <hr />
              </>
            )}
            {children}
          </div>
        </Row>
      </container>
    </div>
  );
};

export default MainScreen;
