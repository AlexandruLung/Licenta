import React from "react";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Divider, CardHeader, Box } from "@material-ui/core";
import { api } from "../utils/api";
import Blur from "./documentation/smoothing/blurr";
import Gaussian from "./documentation/smoothing/gaussianBlur";
import Median from "./documentation/smoothing/medianBlur";
import Bilateral from "./documentation/smoothing/bilateralFilter";
import FindAllConturs from "./documentation/contur/findConturs";
import Threshold from "./documentation/threshold/threshold";
import Adatptive from "./documentation/threshold/adaptive";
import Otsu from "./documentation/threshold/otsu";
interface IProps {
  image_data;
  type;
}
interface IState {
  render;
  smoothing_effects;
  contour_effects;
  threshold_effects;
  documentation: string;
}

export default class ImageFilters extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);

    this.state = {
      smoothing_effects: [
        { label: "Blur", key: "blur" },
        { label: "Gaussian Blur", key: "gaussian_blur" },
        { label: "Median Blur", key: "median_blur" },
        { label: "Bilateral Filter", key: "bilateral_filter" },
      ],
      threshold_effects: [
        { label: "Simple Threshold", key: "simple_threshold" },
        { label: "Adaptive Threshold", key: "adaptive_threshold" },
        { label: "Otsu's Threshold", key: "otasu_threshold" },
      ],
      contour_effects: [
        { label: "Find all contours", key: "find_all_contours" },
        { label: "Find filtered contours", key: "find_filtered_contours" },
      ],
      render: {},
      documentation: "",
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ render: {} });
  }
  showDocumentation(data) {
    if (data === "find_filtered_contours") {
      this.changeText(data);
    }
    if (data === "find_all_contours") {
      this.changeText(data);
    }
    if (data === "otasu_threshold") {
      this.changeText(data);
    }
    if (data === "adaptive_threshold") {
      this.changeText(data);
    }
    if (data === "simple_threshold") {
      this.changeText(data);
    }
    if (data === "bilateral_filter") {
      this.changeText(data);
    }
    if (data === "median_blur") {
      this.changeText(data);
    }
    if (data === "gaussian_blur") {
      this.changeText(data);
    }
    if (data === "blur") {
      this.changeText(data);
    }
    console.log(this.state.documentation);
  }

  applyEffect(effect) {
    api("apply_filter", {
      type: effect,
      data: this.props.image_data,
    }).then((response) => {
      const filtered_data = response;

      const render = this.state.render;
      render[effect] = filtered_data.data;
      this.showDocumentation(response.type);
      this.setState({ render });
      this.displayText();
    });
  }

  getFilterData(effect) {
    if (this.state.render[effect]) {
      return this.state.render[effect];
    }

    return this.props.image_data;
  }
  displayText() {
    const data = this.state.documentation;
    if (data === "find_filtered_contours") {
      return <FindAllConturs></FindAllConturs>;
    }
    if (data === "find_all_contours") {
      return <FindAllConturs></FindAllConturs>;
    }
    if (data === "otasu_threshold") {
      return <Otsu></Otsu>;
    }
    if (data === "adaptive_threshold") {
      return <Adatptive></Adatptive>;
    }
    if (data === "simple_threshold") {
      return <Threshold></Threshold>;
    }
    if (data === "bilateral_filter") {
      return <Bilateral></Bilateral>;
    }
    if (data === "median_blur") {
      return <Median></Median>;
    }
    if (data === "gaussian_blur") {
      return <Gaussian></Gaussian>;
    }
    if (data === "blur") {
      return <Blur></Blur>;
    }
  }
  changeText(data) {
    this.setState({ documentation: data });
  }
  render() {
    if (!this.props.image_data) {
      return <div></div>;
    }

    return (
      <div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          {this.state[this.props.type].map((effect, i) => {
            return (
              <Grid item xs={6}>
                <Card>
                  <CardHeader title={`${effect.label} Image`}></CardHeader>
                  <CardContent>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <img
                        src={this.getFilterData(effect.key)}
                        alt=""
                        height="250px"
                      />
                      <Button
                        className="buttonStyle"
                        onClick={() => this.applyEffect(effect.key)}
                      >
                        Generate
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <Divider />
              </Grid>
            );
          })}
        </div>
        <Grid xs={12}>
          <Card>
            <CardContent>
              <Box color="text.primary">
                <Typography
                  paragraph={true}
                  variant="h5"
                  align="left"
                  component="h5"
                >
                  CE SE INTAMPLA?
                </Typography>
                {this.displayText()}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </div>
    );
  }
}
