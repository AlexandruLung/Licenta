// import React, { useRef } from "react";
// import Webcam from "react-webcam";

// import Grid from "@material-ui/core/Grid";
// import Button from "@material-ui/core/Button";
// import { MutableRefObject } from "react";
// import { render } from "react-dom";

// interface IState {
//   videoConstants: { width: number; height: number; facingMode: string };
// }
// interface iProps {
//   saveCapturedImage(parameter);
// }

// export default class WebCamCaptureContainer extends React.Component<
//   iProps,
//   IState
// > {
//   webcamRef: any;
//   constructor(props) {
//     super(props);
//     this.captureImage = this.captureImage.bind(this);
//     this.state = {
//       videoConstants: {
//         width: 1200,
//         height: 720,
//         facingMode: "user",
//       },
//     };
//   }

//   captureImage() {
//     this.props.saveCapturedImage(this.webcamRef.current.getScreenshot());
//   }

//   render() {
//     return (
//       <div>
//         <Grid container spacing={1}>
//           <Grid item xs={12}>
//             <Webcam
//               ref={this.webcamRef}
//               audio={false}
//               // height={350}
//               screenshotFormat="image/jpeg"
//               // width={350}
//               videoConstraints={this.state.videoConstants}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <Button onClick={() => this.captureImage()}>Capture</Button>
//           </Grid>
//         </Grid>
//       </div>
//     );
//   }
// }

import {
  Slider,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import React, { createRef, useRef, useState } from "react";

import Webcam from "react-webcam";
import ImageFilters from "./imagefilters";
import "./webcam.css";

const CustomFilters = () => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);
  const videoConstraints = {
    width: 400,
    height: 400,
    facingMode: "user",
  };

  return (
    <div className="component">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <div className="webcamCapture">
                  <Card>
                    <CardContent>
                      <Webcam
                        audio={false}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        videoConstraints={videoConstraints}
                      />
                    </CardContent>
                  </Card>

                  <Button className="buttonStyle" onClick={capture}>
                    Capture photo
                  </Button>
                  <Card>
                    <CardContent style={{ width: "400px" }}>
                      {imgSrc && <img src={imgSrc} />}
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography
                  variant="h6"
                  color="textPrimary"
                  component="h6"
                ></Typography>
                <ImageFilters image_data={imgSrc} type="contour_effects" />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography
                  variant="h6"
                  color="textPrimary"
                  component="h6"
                ></Typography>
                <ImageFilters image_data={imgSrc} type="smoothing_effects" />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography
                  variant="h6"
                  color="textPrimary"
                  component="h6"
                ></Typography>
                <ImageFilters image_data={imgSrc} type="threshold_effects" />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default CustomFilters;
