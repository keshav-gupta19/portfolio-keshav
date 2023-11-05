import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
const Github = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Previous <span className="purple">Contributions</span>
      </h1>
      <GitHubCalendar username="keshav-gupta19" blockSize={15} blockMargin={5} fontSize={16} />
    </Row>
  );
};

export default Github;
