import React from "react";
import { Button } from "react-bootstrap";
import "./body.css";
import unitbvVideo from "./video/video-1.mp4";

export default class bodyComponent extends React.Component {
  render() {
    return (
      <div className="hero-container">
        <h1>ADVENTURE AWAITS</h1>
        <video autoPlay loop muted className="video">
          <source src={unitbvVideo} type="video/mp4"></source>
        </video>
        <p>What are you waiting for?</p>
        <div className="hero-btns">
          <Button className="btns">GET STARTED</Button>
          <Button className="btns">
            WATCH TRAILER <i className="far fa-play-circle" />
          </Button>
        </div>
      </div>
    );
  }
}
