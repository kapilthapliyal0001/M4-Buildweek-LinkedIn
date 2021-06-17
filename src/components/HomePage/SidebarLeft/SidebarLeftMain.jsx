import React from "react";
import { Card, Image, Col, Row } from "react-bootstrap";
import SidebarLeftColOne from "./SidebarLeftColOne";
import SidebarLeftColTwo from "./SidebarLeftColTwo";

class SidebarLeftMain extends React.Component {
  render() {
    return (
      <>
        <SidebarLeftColOne
          name={this.props.user.name}
          surname={this.props.user.surname}
          title={this.props.user.title}
          area={this.props.user.area}
          image={this.props.user.image}
          isLoading={this.props.isLoading}
        />
        <SidebarLeftColTwo isLoading={this.props.isLoading} />
      </>
    );
  }
}

export default SidebarLeftMain;
