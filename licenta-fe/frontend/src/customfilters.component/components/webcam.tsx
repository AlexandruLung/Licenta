import IconCamera from "terra-icon/lib/icon/IconCamera";
import Fab from "@material-ui/core/Fab";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";

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
import { RouteComponentProps } from "react-router-dom";

interface ILoginProps extends RouteComponentProps {}

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
  // const previousPage = () => {
  //   const
  //   history.push("/mainpage");
  // };

  return (
    <div
      className="componentCustom"
      style={{ height: "4600px", display: "grid" }}
    >
      {/* <Button onClick={previousPage}></Button> */}
      <Container>
        <Button></Button>
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
                    <IconCamera></IconCamera>
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
