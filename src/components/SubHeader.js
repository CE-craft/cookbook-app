import { Link } from "react-router-dom";
import Container from "./Container";

const SubHeader = (props) => {
  return (
    <div className="sub-header">
      <Container>
        <h1 className="heading-primary">{props.heading}</h1>
        {props.description ? <p>{props.description}</p> : ""}
        {props.link ? <Link to="/dashboard">Visit your dashboard</Link> : ""}
      </Container>
    </div>
  );
};

export default SubHeader;
