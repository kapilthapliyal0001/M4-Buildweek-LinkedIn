import { Card, Col, Row, Image } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";
import React, { Component } from "react";
import ProfileExpUpdater from "./ProfileExpUpdater";
import ProfileExpImgUpdater from "./ProfileExpImgUpdater";

export default class ProfileExperienceSingle extends Component {
  state = {
    showModalExpPut: false,
    showModalExpImg: false,
  };
  closeExpModalPut = () => {
    this.setState({ showModalExpPut: false });
  };
  closeExpModalImg = () => {
    this.setState({ showModalExpImg: false });
  };
  render() {
    return (
      <>
        <hr className="mt-1 mb-2" />
        <Pencil
          id="pencil-icon"
          onClick={() => this.setState({ showModalExpPut: true })}
        />
        <Row id="expProfileSingle">
          <Col xs={2}>
            {this.props.image === undefined ? (
              <Pencil
                id="pencil-icon"
                onClick={() => this.setState({ showModalExpImg: true })}
              />
            ) : (
              <Image
                src={this.props.image}
                onClick={() => this.setState({ showModalExpImg: true })}
              />
            )}
          </Col>
          <Col xs={10}>
            <p>{this.props.role}</p>
            <p>{this.props.company}</p>
            <p>{this.props.date}</p>
            <p>{this.props.area}</p>
            <p>{this.props.desc}</p>
            <p>{this.props.id}</p>
          </Col>
        </Row>

        <ProfileExpUpdater
          idExp={this.props.id}
          role={this.props.role}
          company={this.props.company}
          date={this.props.date}
          area={this.props.area}
          desc={this.props.desc}
          // onClick={()=> this.setState(this.props.selected: experience)}
          open={this.state.showModalExpPut}
          close={this.closeExpModalPut}
        />
        <ProfileExpImgUpdater
          idExp={this.props.id}
          img={this.props.image}
          open={this.state.showModalExpImg}
          close={this.closeExpModalImg}
        />
      </>
    );
  }
}
