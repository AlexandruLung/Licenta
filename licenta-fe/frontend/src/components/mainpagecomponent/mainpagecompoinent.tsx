import React from "react";

import {
  Image,
  Video,
  Transformation,
  CloudinaryContext,
} from "cloudinary-react";

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
import SliderComponent from "./slidercomponent";

interface TransformationInterface {
  transforms: [];
  keyValue: string;
  keyLabel: string;
}

export default class MainPage extends React.Component<
  TransformationInterface,
  TransformationInterface
> {
  constructor(props: any) {
    super(props);
    this.updateColorValue = this.updateColorValue.bind(this);
    this.getSliderValue = this.getSliderValue.bind(this);
    this.state = {
      transforms: [],
      keyValue: "",
      keyLabel: "",
    };
  }
  red = { key: "red", value: 0 };
  blue = { key: "blue", value: 0 };
  green = { key: "green", value: 0 };
  hue = { key: "hue", value: 0 };
  saturation = { key: "saturation", value: 0 };
  valueFilter = { key: "value", value: 0 };

  valuetext(value) {
    return `${value}°C`;
  }
  updateColorValue(e: any, value: number | number[] | any, key: string) {
    const transform = {
      key,
      value,
    };

    const transforms = this.getUpdatedTransform(
      this.state.transforms,
      transform
    );
    this.setState({ transforms });
  }
  getUpdatedTransform(transforms, transform) {
    const newTransforms = transforms.filter(({ key }) => key !== transform.key);

    newTransforms.push(transform);

    return newTransforms;
  }
  getTransformations() {
    return this.state.transforms.map((tranform: any) => {
      return (
        <Transformation
          effect={`${tranform.key}:${tranform.value}`}
          gravity="center"
          crop="fill"
        />
      );
    });
  }
  getRBBCons() {
    return [
      { key: "Red", value: "red", default: 0 },
      { key: "Green", value: "green", default: 0 },
      { key: "Blue", value: "blue", default: 0 },
    ];
  }

  getHSVCons() {
    return [
      { key: "Hue", value: "hue", default: 80 },
      { key: "Saturation", value: "saturation", default: 80 },
      { key: "Value", value: "brightness", default: 80 },
    ];
  }
  getSliderValue(key: string, type: string) {
    let colorValue: any;
    // console.log("Transforms : ", this.state.transforms, "key=" + key, type);

    const transform: any = this.state.transforms.find(
      (transforms: any) => transforms.key === key
    );
    //console.log("Transform ", transform.value);

    //console.log("value" + transform.value, "key=" + key);
    if (type == "rgb") {
      return this.getRBBCons().find((t) => t.key === key);
    } else if (type == "hsv") {
      return this.getHSVCons().find(
        (transform: any) => transform.value === key
      );
    }
  }
  resetValues() {
    let transforms = this.state.transforms;
    this.red.value = 0;
    this.green.value = 0;
    this.blue.value = 0;
    console.log(this.red.value);

    transforms = this.getUpdatedTransform(transforms, this.red);
    transforms = this.getUpdatedTransform(transforms, this.green);
    transforms = this.getUpdatedTransform(transforms, this.blue);
    this.setState({ transforms });
  }
  decreseValues(type) {
    let transforms = this.state.transforms;
    if (type == "all_red" && this.red.value > -100) {
      console.log((this.red.value -= 10) + "red");
      transforms = this.getUpdatedTransform(transforms, this.red);
      console.log(
        this.getRBBCons().forEach((t) => {
          console.log(t.default);
        })
      );
    }
    if (type == "all_green" && this.green.value > -100) {
      console.log((this.green.value -= 10) + "green");
      transforms = this.getUpdatedTransform(transforms, this.green);
      console.log(
        this.getRBBCons().forEach((t) => {
          console.log(t.default);
        })
      );
    }
    if (type == "all_blue" && this.blue.value > -100) {
      console.log((this.blue.value -= 10) + "blue");
      transforms = this.getUpdatedTransform(transforms, this.blue);
      console.log(
        this.getRBBCons().forEach((t) => {
          console.log(t.default);
        })
      );
    }
    this.setState({ transforms });
  }
  increaseValues(type) {
    let transforms = this.state.transforms;

    if (type == "all_red" && this.red.value < 100) {
      console.log((this.red.value += 10));
      transforms = this.getUpdatedTransform(transforms, this.red);
      console.log(
        this.getRBBCons().forEach((t) => {
          console.log(t.default);
        })
      );
    }
    if (type == "all_green" && this.green.value < 100) {
      console.log((this.green.value += 10));
      transforms = this.getUpdatedTransform(transforms, this.green);
      console.log(
        this.getRBBCons().forEach((t) => {
          console.log(t.default);
        })
      );
    }
    if (type == "all_blue" && this.blue.value < 100) {
      console.log((this.blue.value += 10));
      transforms = this.getUpdatedTransform(transforms, this.blue);
      console.log(
        this.getRBBCons().forEach((t) => {
          console.log(t.default);
        })
      );
    }
    this.setState({ transforms });
  }

  resetFilters(keys) {
    const newTransforms: any = this.state.transforms.filter(
      ({ key }) => keys.indexOf(key) < 0
    );

    this.setState({ transforms: newTransforms });
  }

  createRGBEffect(type) {
    switch (type) {
      case "all_red":
        console.log("red");
        this.red.value = 100;
        break;
      case "all_blue":
        this.blue.value = 100;
        break;
      case "all_green":
        this.green.value = 100;
        break;
      default:
        break;
    }

    let transforms = this.state.transforms;

    transforms = this.getUpdatedTransform(transforms, this.red);
    transforms = this.getUpdatedTransform(transforms, this.blue);
    transforms = this.getUpdatedTransform(transforms, this.green);

    this.setState({ transforms });
  }
  createHSVEffect(type) {
    const hue = { key: "hue", value: 80 };
    const saturation = { key: "saturation", value: 80 };

    switch (type) {
      case "grayscale":
        saturation.value = -70;
        break;
      case "sepia":
        hue.value = 20;
        saturation.value = -20;
        break;
      default:
        break;
    }

    let transforms = this.state.transforms;

    if (type == "grayscale") {
      transforms = this.getUpdatedTransform(transforms, saturation);
    } else if (type == "sepia") {
      transforms = this.getUpdatedTransform(transforms, hue);
      transforms = this.getUpdatedTransform(transforms, saturation);
    }

    this.setState({ transforms });
  }
  decreaseValueHSV(type) {
    let transforms = this.state.transforms;
    if (type == "hue" && this.hue.value > -100) {
      console.log((this.hue.value -= 10));
      transforms = this.getUpdatedTransform(transforms, this.hue);
      this.setState({ transforms });
      console.log(
        this.getRBBCons().forEach((t) => {
          console.log(t.default);
        })
      );
    }
    if (type == "saturation" && this.saturation.value > -100) {
      console.log((this.saturation.value -= 10));
      transforms = this.getUpdatedTransform(transforms, this.saturation);
      this.setState({ transforms });
      console.log(
        this.getRBBCons().forEach((t) => {
          console.log(t.default);
        })
      );
    }
  }
  increaseValuesHSV(type) {
    let transforms = this.state.transforms;
    if (type == "hue" && this.hue.value < 100) {
      console.log((this.hue.value += 10));
      transforms = this.getUpdatedTransform(transforms, this.hue);
      console.log(
        this.getRBBCons().forEach((t) => {
          console.log(t.default);
        })
      );
    }
    if (type == "saturation" && this.saturation.value < 100) {
      console.log((this.saturation.value += 10));
      transforms = this.getUpdatedTransform(transforms, this.saturation);
      console.log(
        this.getRBBCons().forEach((t) => {
          console.log(t.default);
        })
      );
    }

    this.setState({ transforms });
  }
  resetValuesHSV() {
    let transforms = this.state.transforms;
    this.hue.value = 0;
    this.saturation.value = 0;
    this.valueFilter.value = 0;
    console.log(this.valueFilter.value);

    transforms = this.getUpdatedTransform(transforms, this.hue);
    transforms = this.getUpdatedTransform(transforms, this.saturation);
    transforms = this.getUpdatedTransform(transforms, this.valueFilter);
    this.setState({ transforms });
  }
  render() {
    return (
      <div>
        <Container maxWidth="md">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Card>
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Input image
                  </Typography>
                  <Image publicId="leena" cloudName="rakesh111"></Image>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card>
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Output Image
                  </Typography>
                  <Image publicId="leena" cloudName="rakesh111">
                    {this.getTransformations()}
                  </Image>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card>
                <CardContent>
                  <Box color="text.primary">
                    <Typography
                      paragraph={true}
                      variant="h5"
                      align="left"
                      component="h5"
                    ></Typography>
                    <Button onClick={() => this.increaseValues("all_blue")}>
                      increase Blue
                    </Button>
                    <Button onClick={() => this.increaseValues("all_red")}>
                      increase Red
                    </Button>
                    <Button onClick={() => this.increaseValues("all_green")}>
                      increase Green
                    </Button>
                    <Button onClick={() => this.decreseValues("all_blue")}>
                      decrease Blue
                    </Button>
                    <Button onClick={() => this.decreseValues("all_red")}>
                      decrease Red
                    </Button>
                    <Button onClick={() => this.decreseValues("all_green")}>
                      decrease Green
                    </Button>
                    <Button onClick={() => this.resetValues()} color="primary">
                      Reset
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={6}>
              <Card>
                <CardContent>
                  <Box color="text.primary">
                    <Typography
                      paragraph={true}
                      variant="h5"
                      align="left"
                      component="h5"
                    >
                      R-G-B Based Filters
                    </Typography>

                    <Button onClick={() => this.createRGBEffect("all_blue")}>
                      Fill Blue
                    </Button>
                    <Button onClick={() => this.createRGBEffect("all_red")}>
                      Fill Red
                    </Button>
                    <Button onClick={() => this.createRGBEffect("all_green")}>
                      Fill Green
                    </Button>
                    <Button
                      onClick={() =>
                        this.resetFilters(["red", "green", "blue"])
                      }
                      color="primary"
                    >
                      Reset
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card>
                <CardContent>
                  <Box color="text.primary">
                    <Typography
                      paragraph={true}
                      variant="h5"
                      align="left"
                      component="h5"
                    >
                      H-S-V Based Filters
                    </Typography>

                    <Button onClick={() => this.createHSVEffect("grayscale")}>
                      Gray Scale
                    </Button>
                    <Button onClick={() => this.createHSVEffect("sepia")}>
                      Sepia
                    </Button>
                    <Button
                      onClick={() =>
                        this.resetFilters(["hue", "saturation", "brightness"])
                      }
                      color="primary"
                    >
                      Reset
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card>
                <CardContent>
                  <Box color="text.primary">
                    <Typography
                      paragraph={true}
                      variant="h5"
                      align="left"
                      component="h5"
                    ></Typography>
                    <Button onClick={() => this.increaseValuesHSV("hue")}>
                      increase hue
                    </Button>
                    <Button
                      onClick={() => this.increaseValuesHSV("saturation")}
                    >
                      increase saturation
                    </Button>
                    <Button onClick={() => this.decreaseValueHSV("hue")}>
                      decrease hue
                    </Button>
                    <Button onClick={() => this.decreaseValueHSV("saturation")}>
                      decrease saturation
                    </Button>

                    <Button
                      onClick={() =>
                        this.resetFilters(["hue", "saturation", "brightness"])
                      }
                    >
                      Reset
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}
