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
interface imageState {
  image_data: string;
}
export default class CustomFilters extends React.Component<{}, imageState> {
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

  render() {
    return <WebcamCapture></WebcamCapture>;
  }
}
