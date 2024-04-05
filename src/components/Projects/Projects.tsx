import { Col, Container, Row } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import docman from "../../assets/Projects/docmanImgUpdated.jpg";
import financer from "../../assets/Projects/FinancerimgUpdated.jpg";
import travelMap from "../../assets/Projects/travelmapImgUpdated.jpg";
import dailyjournal from "../../assets/Projects/blogimgupated.jpg";
import todolist from "../../assets/Projects/todoImgUpdated.jpg";
import castwave from "../../assets/Projects/castwaveimgUpdated.jpg";
const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the Personal Projects I have worked upon.
        </p>

        {/* Docman */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={castwave}
              isBlog={false}
              title="CastWave - Your Gateway to Seamless Podcasting Pleasure"
              description="
              Introducing CastWave, your ultimate destination for immersive podcasting enjoyment! At the helm of its creation, we've crafted an intuitive app experience that simplifies onboarding and authentication, ensuring seamless access to your favorite content. With our versatile content playback, dive into a world of audio and video podcasts, enriching your listening journey like never before. But that's not all - we've put you at the center with user-centric features, empowering effortless upload, editing, and management of your very own podcasts, fostering boundless creativity. Join us on CastWave and redefine your podcasting experience today!"
              ghLink="https://github.com/keshav-gupta19/CastWave"
              demoLink="https://castwave.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={docman}
              isBlog={false}
              title="DocMan - A Doctor Appointment System"
              description="Our Doctor Appointment System simplifies scheduling, allowing patients to book appointments, access medical records, and receive timely reminders. With secure communication channels and an intuitive interface, it enhances healthcare efficiency and patient experience."
              ghLink="https://github.com/keshav-gupta19/Doctor-Management-Website"
              demoLink="https://docman.onrender.com/"
            />
          </Col>
          {/* Financer */}
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={financer}
              isBlog={false}
              title="Financer - A Finance Dashboard"
              description="Created a MERN Finance Dashboard with integrated RegressionJS for data prediction. Ensured real-time updates and user-friendly interface using Recharts Library for various curver and graphs. Utilized MongoDB and Node.js for efficient data management and implementation."
              ghLink="https://github.com/keshav-gupta19/finance-dashboard"
              demoLink=""
            />
          </Col>
          {/* Travel Map */}
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={travelMap}
              isBlog={false}
              title="Travel Map - A Real Time Location Review Application"
              description="Travel Map is a web application that allows users to mark and review various locations on a map. Users can register an account, log in, and then add pins to the map with personalized reviews and ratings. The project aims to create a user-friendly platform for users to share and explore different locations, providing an interactive and engaging experience for map enthusiasts and travelers."
              ghLink="https://github.com/keshav-gupta19/Travel-Map"
              demoLink=""
            />
          </Col>
          {/* Blog Website */}
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={dailyjournal}
              isBlog={false}
              title="Daily Journal - Keeping Updated"
              description="A Dynamic website that is used to write Daily blogs. A
              full stack Project which can also be used as a personal
              diary for reading and writing daily posts"
              ghLink="https://github.com/keshav-gupta19/BlogWebsite"
              demoLink=""
            />
          </Col>
          {/* ToDo List */}
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={todolist}
              isBlog={false}
              title="Todo List - Path to Sucess"
              description="A ToDo list is a simple and effective organizational tool that allows users to list tasks or activities they need to complete. It typically includes features such as task prioritization, due dates, and the ability to check off completed items. Valuable for keeping track of daily tasks, setting reminders for important deadlines, and ensuring that no essential activities are overlooked."
              ghLink="https://github.com/keshav-gupta19/ToDoList"
              demoLink=""
            />
          </Col>
          {/* Dice Game */}
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
