import React from "react";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import ImageFilters from "../customfilters.component/components/imagefilters";
import Webcam from "react-webcam";
import WebcamCapture from "../customfilters.component/components/webcam";
import { Button } from "react-bootstrap";
import { RouteComponentProps } from "react-router";
import "./index.css";
import Fab from "@material-ui/core/Fab";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";

interface imageState {
  image_data: string;
}
interface ILoginProps extends RouteComponentProps {
  addUSer: React.MouseEventHandler<HTMLButtonElement>;
}
export default class CustomFilters extends React.Component<
  ILoginProps,
  imageState
> {
  constructor(props) {
    super(props);

    this.state = {
      image_data: "",
    };
  }

  saveCapturedImage(data) {
    this.setState({ image_data: data });
  }
  videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };
  toAdvancedFilters = () => {
    this.props.history.push("/advanced-filters");
  };

  render() {
    return (
      <div>
        <Fab
          style={{ position: "fixed", bottom: "0", left: "0" }}
          color="primary"
          aria-label="add"
          onClick={this.toAdvancedFilters}
        >
          <NavigateBeforeIcon />
        </Fab>
        <WebcamCapture></WebcamCapture>
      </div>
    );
  }
}
