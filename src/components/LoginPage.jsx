import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {
  Container,
  Dropdown,
  Button,
  Image,
  Col,
  Row,
  DropdownButton,
} from "react-bootstrap";
import { Redirect } from "react-router-dom";

class LoginPage extends Component {
  state = { value: "select user", bearerToken: "", userId: "" };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    alert("Your favorite flavor is: " + this.state.value);
    event.preventDefault();
  };

  checkUser = () => {
    if (this.state.value === "Helena") {
      this.setState({
        user: {
          username: "Helena",
          bearerToken:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3M2Q4YjI5MTkzMDAwMTU2MGFiYTUiLCJpYXQiOjE2MjM2NzAxNTUsImV4cCI6MTYyNDg3OTc1NX0.Lid0KernjdrJ6T9JK4Y_EAbb2bH3Jd92w-gXUFfOsCA",
          userId: "60c73d8b291930001560aba5",
        },
      });
      this.props.history.push("/home");
    } else if (this.state.value === "Kapil") {
      this.setState({
        user: {
          username: "Kapil",
          bearerToken:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3M2JmMTI5MTkzMDAwMTU2MGFiYTMiLCJpYXQiOjE2MjM5MzQ1NDUsImV4cCI6MTYyNTE0NDE0NX0.Mj6R-PdAHLE1b2_mB2TCyFpCN4_I5Ppa_TADX20Bkpo",
          userId: "60c73d8b291930001560aba5",
        },
      });
      this.props.history.push("/home");
    } else if (this.state.user === "Kristian") {
      this.setState({
        user: {
          bearerToken: "",
          userId: "",
        },
      });
    }
  };

  render() {
    return (
      <>
        <Container className="p-5 bg-light text-center vh-75">
          <Row>
            <Col xs={4}></Col>
            <Col xs={4}>
              <Image src={"https://picsum.photos/200"} id="loginPage_img" />
              <h2>{this.state.value}</h2>
              <form onSubmit={this.handleSubmit}>
                <label>
                  <select value={this.state.value} onChange={this.handleChange}>
                    {" "}
                    <option value="Kapil">Kapil</option>
                    <option value="Helena">Helena</option>
                    <option value="Kristian">Kristian</option>
                  </select>
                </label>
                <input type="submit" value="Submit" onClick={this.checkUser} />
              </form>
              {/* <Button onClick={this.selectUser}>Login</Button> */}
            </Col>
            <Col xs={4}></Col>
          </Row>
        </Container>
      </>
    );
  }
}
export default withRouter(LoginPage);
