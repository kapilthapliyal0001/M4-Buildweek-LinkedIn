import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Avatar } from "@material-ui/core";

const NetworkFeed = () => {
  const token =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3M2NmNzI5MTkzMDAwMTU2MGFiYTQiLCJpYXQiOjE2MjM2NzAwMDcsImV4cCI6MTYyNDg3OTYwN30.USHzFfeVTSKHLcrfBBYHNfhmiYlVmRCl_sts1-YCsz0";
  const [profiles, setProfiles] = useState([]);
  const getProfile = async () => {
    console.log("FIRST BEER");
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          method: "GET",
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response);

      let profiles = await response.json();
      console.log(profiles);

      setProfiles(profiles.slice(1).slice(-5));
      console.log("Profiles", profiles);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    console.log("BEER");

    getProfile();
  }, []);
  return (
    <div>
      <Container>
        <Row>
          <Col>
            {profiles.map((profile) => {
              return (
                <Card>
                  <Avatar variant="top" src={profile.image} />
                  <Card.Body>
                    <Card.Title>
                      {profile.name + " " + profile.surname || ""}
                    </Card.Title>
                    <Card.Text>{profile.title}</Card.Text>
                    <Button variant="primary">Connect</Button>
                  </Card.Body>
                </Card>
              );
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NetworkFeed;
