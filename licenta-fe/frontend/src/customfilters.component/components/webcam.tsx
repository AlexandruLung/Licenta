import React from "react";
import Webcam from "react-webcam";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

interface IState {
  videoConstants: { width: number; height: number; facingMode: string };
}
interface iProps {
  saveCapturedImage(parameter);
}
export default class WebCamCaptureContainer extends React.Component<
  iProps,
  IState
> {
  constructor(props) {
    super(props);
    this.captureImage = this.captureImage.bind(this);
    this.state = {
      videoConstants: {
        width: 1200,
        height: 720,
        facingMode: "user",
      },
    };
  }

  webcamRef = React.useRef(null);

  captureImage() {
    if (this.webcamRef.current && this.webcamRef) {
      this.props.saveCapturedImage;
      this.webcamRef.current.getScreenshot().focus()();
    }

    const capture = this.webcamRef.current.getScreenshot();
    this.props.saveCapturedImage(capture);
  }

  render() {
    return (
      <div>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Webcam
              ref="webcam"
              audio={false}
              // height={350}
              screenshotFormat="image/jpeg"
              // width={350}
              videoConstraints={this.state.videoConstants}
            />
          </Grid>
          <Grid item xs={12}>
            <Button onClick={() => this.captureImage()}>Capture</Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}
