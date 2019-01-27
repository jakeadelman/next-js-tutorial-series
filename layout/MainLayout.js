import NavBar from "../components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Fonts from "./Fonts";
import React from "react";
import "../index.css";

const layoutStyle = {
  margin: 20,
  padding: 20
};

export default class MainLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    Fonts();
  }

  render() {
    return (
      <div style={layoutStyle}>
        <NavBar />
        <div>{this.props.children}</div>
      </div>
    );
  }
}
