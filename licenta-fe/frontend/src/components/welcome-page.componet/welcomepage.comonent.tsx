import React from "react";
import { Button } from "react-bootstrap";
import { CaretRightSquare } from "react-bootstrap-icons";
import { RouteComponentProps } from "react-router-dom";
import "./welcomepage.component.css";
import unitbvVideo from "./video/video.mp4";

interface toLoginProps extends RouteComponentProps {
  toLogin: React.MouseEventHandler<HTMLButtonElement>;
  history: any;
  match: any;
  location: any;
}
export default class mainpage extends React.Component<toLoginProps, any> {
  constructor(props) {
    super(props);
    this.toLogin = this.toLogin.bind(this);
  }
  toLogin() {
    this.props.history.push("/login");
  }
  render() {
    return (
      <div className="hero-container">
        <h1>
          Suportul React pentru procesare de imagine – inovație și provocare
        </h1>
        <video autoPlay loop muted className="video">
          <source src={unitbvVideo} type="video/mp4"></source>
        </video>
        <p></p>
        <div className="hero-btns">
          <Button className=" first" onClick={this.toLogin}>
            <CaretRightSquare size={50}></CaretRightSquare>
          </Button>
        </div>
      </div>
    );
  }
}
