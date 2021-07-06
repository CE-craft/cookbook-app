import { Link } from "react-router-dom";
import Container from "./Container";

const SubHeader = (props) => {
  return (
    <div className="sub-header">
      <Container>
        <h1 className="heading-primary">{props.heading}</h1>
        {props.description ? (
          <p>lorem ipsum vfzevffez ze vzedvze vzev zev zvzevfevczedc</p>
        ) : (
          ""
        )}
        {props.link ? <Link to="/dashboard">Visit your dashboard</Link> : ""}
      </Container>
    </div>
  );
};

export default SubHeader;
