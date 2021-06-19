import { Card, Image } from "react-bootstrap";
import ThreeDotsLoader from "../../Loaders/ThreeDotsLoader";
import { Component } from "react";
import banner from "../../../banner.jpg";
import ProfilePictureLoader from "../../Loaders/ProfilePictureLoader";
import SidebarProfilePerson from "./SidebarProfilePerson";

class SidebarLeftColOne extends Component {
  render() {
    const { isLoading, name, image, title, surname } = this.props;
    return (
      <>
        <Card className="feedLeft-card">
          <SidebarProfilePerson isLoading={isLoading} image={image} />
          {/* <>
          <Card.Header id="feedLeft-card-header" className="p-0">
            <Image className="feedLeft-cover-img" src={banner} />
            {isLoading === true ? (
              <ProfilePictureLoader />
            ) : (
              <Image className="feedLeft-profile-img" src={image} />
            )}
          </Card.Header>
          </> */}
          <Card.Body className="mt-5  p-0">
            <Card.Title className="text-center">
              <Card.Link>
                {isLoading === true ? (
                  <ProfilePictureLoader />
                ) : (
                  <>
                    {name} {surname}
                  </>
                )}
              </Card.Link>
            </Card.Title>
            <Card.Subtitle>
              {isLoading === true ? (
                <ThreeDotsLoader />
              ) : (
                <p className="text-muted text-center">{title}</p>
              )}
            </Card.Subtitle>
            <hr id="feedLeft-hr" />
            <Card.Text className="m-0 py-0 px-3">
              <Card.Link>
                <p className="floatleft p-0 me-0">
                  Connections
                  <br />
                  <span>Grow your network</span>
                </p>
                <p className="floatright p-0 m-0">76</p>
                <br className="m-0 p-0" />
              </Card.Link>
            </Card.Text>
            <br />
            <Card.Text className="m-0 p-0 px-3">
              <Card.Link>
                <p className="floatleft p-0 m-0">Who viewed your profile</p>
                <p className="floatright">21</p>
              </Card.Link>
              <br className="m-0 p-0" />
            </Card.Text>
            <br className="m-0 p-0" />
            <hr id="feedLeft-hr" className="m-0" />
            <Card.Text className="m-0 p-0  px-3">
              <Card.Link>
                <p>Only available for a limited time</p>
                <p>
                  <i class="bi bi-linkedin" viewBox="0 0 16 16"></i>
                  Reactivate Premium : 50% Off
                </p>
              </Card.Link>
            </Card.Text>

            <hr id="feedLeft-hr" className="p-0 m-0" />
            <Card.Text className="m-0 p-0  px-3">
              <Card.Link>
                <p>
                  <i class="bi bi-bookmark-fill"></i>My Items
                </p>
              </Card.Link>
            </Card.Text>
          </Card.Body>
          <div></div>
        </Card>
      </>
    );
  }
}
export default SidebarLeftColOne;
