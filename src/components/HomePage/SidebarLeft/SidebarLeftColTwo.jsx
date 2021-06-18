import { Accordion, Card } from "react-bootstrap";
import "./SidebarLeft.css";

const SidebarLeftColTwo = () => {
  return (
    <>
      <Accordion defaultActiveKey="0">
        <Card className="LeftColumnTwo-card mt-2">
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <p className="floatleft p-0 m-0">Recent</p>
            <i class="bi bi-chevron-down floatright"></i>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Text className="p-3">
              <div>
                <i class="bi bi-people-fill"></i>
                <span>JS Frameworks</span>
              </div>
              <div>
                <i class="bi bi-hash"></i>
                <span>Webdeveloper</span>
              </div>
              <div>
                <i class="bi bi-hash"></i>
                <span>JavaScript</span>
              </div>
              <div>
                <i class="bi bi-hash"></i>
                <span>Opensouce</span>
              </div>
              <div>
                <i class="bi bi-hash"></i>
                <span>nodejs</span>
              </div>
            </Card.Text>
          </Accordion.Collapse>

          <Accordion.Toggle as={Card.Header} eventKey="1">
            <div className="LeftColumnTwo-icon">
              <Card.Link className="floatleft">Groups</Card.Link>
              <i class="bi bi-plus floatright"></i>
            </div>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Text className="p-3">
              <div>
                <i class="bi bi-people-fill"></i>
                <span>JS Frameworks</span>
              </div>
              <div>
                <i class="bi bi-hash"></i>
                <span>Webdeveloper</span>
              </div>
              <div>
                <i class="bi bi-hash"></i>
                <span>JavaScript</span>
              </div>
              <div>
                <i class="bi bi-hash"></i>
                <span>Opensouce</span>
              </div>
              <div>
                <i class="bi bi-hash"></i>
                <span>nodejs</span>
              </div>
            </Card.Text>
          </Accordion.Collapse>
          <Accordion.Toggle as={Card.Header} eventKey="2">
            <Card.Link className="floatleft">Events</Card.Link>
            <i class="bi bi-plus-lg floatright"></i>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Text className="p-3">
              <div>
                <i class="bi bi-people-fill"></i>
                <span>JS Frameworks</span>
              </div>
              <div>
                <i class="bi bi-hash"></i>
                <span>Webdeveloper</span>
              </div>
              <div>
                <i class="bi bi-hash"></i>
                <span>JavaScript</span>
              </div>
              <div>
                <i class="bi bi-hash"></i>
                <span>Opensouce</span>
              </div>
              <div>
                <i class="bi bi-hash"></i>
                <span>nodejs</span>
              </div>
            </Card.Text>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </>
  );
};

export default SidebarLeftColTwo;
