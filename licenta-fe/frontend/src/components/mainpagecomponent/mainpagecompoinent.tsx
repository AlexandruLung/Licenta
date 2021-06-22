import React from "react";
import IconAdd from "terra-icon/lib/icon/IconAdd";
import IconMinus from "terra-icon/lib/icon/IconMinus";
import Fab from "@material-ui/core/Fab";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

import {
  Image,
  Video,
  Transformation,
  CloudinaryContext,
} from "cloudinary-react";
import "./mainpagecomponent.css";
import Spacer from "terra-spacer";

import "@edonec/collapsible/build/index.css";

import "@edonec/collapsible/build/icons.css";

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
import { RouteComponentProps } from "react-router";
import Collapsible from "@edonec/collapsible";
import RgbDocumentation from "./rgbDocumentation/rgbDocumentation";
import HsvDocumentation from "./hsvDocumentation/hsvDcumentation";

interface TransformationInterface {
  transforms: [];
  keyValue: string;
  keyLabel: string;
  imageName: string;
  documentation: string;
}
interface ILoginProps extends RouteComponentProps {
  addUSer: React.MouseEventHandler<HTMLButtonElement>;
}

export default class MainPage extends React.Component<
  ILoginProps,
  TransformationInterface
> {
  constructor(props: any) {
    super(props);
    this.updateColorValue = this.updateColorValue.bind(this);
    this.getSliderValue = this.getSliderValue.bind(this);
    this.changeImage = this.changeImage.bind(this);
    this.state = {
      transforms: [],
      keyValue: "",
      keyLabel: "",
      imageName: "lenna",
      documentation: "",
    };
  }
  red = { key: "red", value: 0 };
  blue = { key: "blue", value: 0 };
  green = { key: "green", value: 0 };
  hue = { key: "hue", value: 0 };
  saturation = { key: "saturation", value: 0 };
  valueFilter = { key: "value", value: 0 };
  toAdvancedFilters = () => {
    this.props.history.push("/advanced-filters");
  };
  valuetext(value) {
    return `${value}°C`;
  }

  changeImage = (event) => {
    this.setState({ imageName: event.target.value });
  };
  changeDocumentation(doc: string) {
    this.setState({ documentation: doc });
  }
  changeText() {
    console.log(this.state.documentation);
    if (this.state.documentation === "rgb") {
      return <RgbDocumentation></RgbDocumentation>;
    } else if (this.state.documentation === "hsv") {
      return <HsvDocumentation></HsvDocumentation>;
    }
    return <div></div>;
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
    this.setState({ documentation: "rgb" });
    this.setState({ transforms });
  }
  increaseValues(type) {
    let transforms = this.state.transforms;

    if (type == "all_red" && this.red.value < 100) {
      console.log((this.red.value += 10));
      transforms = this.getUpdatedTransform(transforms, this.red);
    }
    if (type == "all_green" && this.green.value < 100) {
      console.log((this.green.value += 10));
      transforms = this.getUpdatedTransform(transforms, this.green);
    }
    if (type == "all_blue" && this.blue.value < 100) {
      console.log((this.blue.value += 10));
      transforms = this.getUpdatedTransform(transforms, this.blue);
    }
    this.setState({ documentation: "rgb" });
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
    this.setState({ documentation: "rgb" });
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
    this.setState({ documentation: "hsv" });
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
    this.setState({ documentation: "hsv" });
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

    this.setState({ documentation: "hsv" });
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
  imageOnChange(image: string) {
    this.setState({ imageName: image });
    console.log(this.state.imageName);
  }

  blurFilter() {}
  render() {
    return (
      <div>
        <div className="component">
          <Container>
            <Grid container spacing={2} style={{ margin: "0" }}>
              <Grid item xs={12}>
                <Card>
                  <CardContent className="collapse  ">
                    <Collapsible header="Imagini">
                      <Button onClick={() => this.imageOnChange("lenna")}>
                        <Image publicId="lenna" cloudName="dozpyourw">
                          <Transformation width="0.1" crop="scale" />
                        </Image>
                      </Button>
                      <Button onClick={() => this.imageOnChange("babuin")}>
                        <Image publicId="babuin" cloudName="dozpyourw">
                          <Transformation width="0.1" crop="scale" />
                        </Image>
                      </Button>
                      <Button onClick={() => this.imageOnChange("panda2")}>
                        <Image publicId="panda2" cloudName="dozpyourw">
                          <Transformation width="0.25" crop="scale" />
                        </Image>
                      </Button>
                      <Button onClick={() => this.imageOnChange("legume2")}>
                        <Image publicId="legume2" cloudName="dozpyourw">
                          <Transformation width="0.1" crop="scale" />
                        </Image>
                      </Button>
                      <Button onClick={() => this.imageOnChange("sample")}>
                        <Image publicId="sample" cloudName="dozpyourw">
                          <Transformation width="0.1" crop="scale" />
                        </Image>
                      </Button>
                    </Collapsible>
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
                      Input image
                    </Typography>

                    <Image
                      publicId={this.state.imageName}
                      cloudName="dozpyourw"
                    >
                      <Transformation width="0.6" crop="scale" />
                    </Image>
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
                    <Image
                      publicId={this.state.imageName}
                      cloudName="dozpyourw"
                    >
                      {this.getTransformations()}
                      <Transformation width="0.6" crop="scale" />
                    </Image>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card>
                  <CardContent className="cardcontent">
                    <Box color="text.primary">
                      <Typography
                        paragraph={true}
                        variant="h5"
                        align="left"
                        component="h5"
                      >
                        FILTRE-RGB
                      </Typography>
                      <div className="buttonStyle">
                        <div className="firstButtons">
                          <Spacer isInlineBlock marginRight="medium">
                            <Button
                              className="buttonStyle"
                              onClick={() => this.increaseValues("all_blue")}
                            >
                              <IconAdd></IconAdd>
                              Blue
                            </Button>
                          </Spacer>
                          <Spacer isInlineBlock marginRight="medium">
                            <Button
                              className="buttonStyle"
                              onClick={() => this.increaseValues("all_red")}
                            >
                              <IconAdd></IconAdd>
                              Red
                            </Button>
                          </Spacer>
                          <Spacer isInlineBlock marginRight="medium">
                            <Button
                              className="buttonStyle"
                              onClick={() => this.increaseValues("all_green")}
                            >
                              <IconAdd></IconAdd>
                              Green
                            </Button>
                          </Spacer>
                          <Spacer isInlineBlock marginRight="medium">
                            <Button
                              className="buttonStyle"
                              onClick={() => this.decreseValues("all_blue")}
                            >
                              <IconMinus></IconMinus>
                              Blue
                            </Button>
                          </Spacer>
                          <Spacer isInlineBlock marginRight="medium">
                            <Button
                              className="buttonStyle"
                              onClick={() => this.decreseValues("all_red")}
                            >
                              <IconMinus></IconMinus>
                              Red
                            </Button>
                          </Spacer>
                          <Spacer isInlineBlock marginRight="medium">
                            <Button
                              className="buttonStyle"
                              onClick={() => this.decreseValues("all_green")}
                            >
                              <IconMinus></IconMinus>
                              Green
                            </Button>
                          </Spacer>
                        </div>
                        <div className="firstButtons">
                          <Spacer isInlineBlock marginRight="medium">
                            <Button
                              onClick={() => this.createRGBEffect("all_blue")}
                            >
                              Fill Blue
                            </Button>
                          </Spacer>
                          <Spacer isInlineBlock marginRight="medium">
                            <Button
                              onClick={() => this.createRGBEffect("all_red")}
                            >
                              Fill Red
                            </Button>
                          </Spacer>
                          <Spacer isInlineBlock marginRight="medium">
                            <Button
                              onClick={() => this.createRGBEffect("all_green")}
                            >
                              Fill Green
                            </Button>
                          </Spacer>
                        </div>
                      </div>
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
                        FILTRE-HSV
                      </Typography>
                      <div className="buttonStyle">
                        <div className="firstButtons">
                          <Spacer isInlineBlock marginRight="medium">
                            <Button
                              onClick={() => this.createHSVEffect("grayscale")}
                            >
                              Gray Scale
                            </Button>
                          </Spacer>
                          <Spacer isInlineBlock marginRight="medium">
                            <Button
                              onClick={() => this.createHSVEffect("sepia")}
                            >
                              Sepia
                            </Button>
                          </Spacer>
                        </div>
                        <div className="firstButtons">
                          <Spacer isInlineBlock marginRight="medium">
                            <Button
                              onClick={() => this.increaseValuesHSV("hue")}
                            >
                              <IconAdd></IconAdd>
                              hue
                            </Button>
                          </Spacer>
                          <Spacer isInlineBlock marginRight="medium">
                            <Button
                              onClick={() =>
                                this.increaseValuesHSV("saturation")
                              }
                            >
                              <IconAdd></IconAdd>
                              saturation
                            </Button>
                          </Spacer>
                          <Spacer isInlineBlock marginRight="medium">
                            <Button
                              onClick={() => this.decreaseValueHSV("hue")}
                            >
                              <IconMinus></IconMinus>
                              hue
                            </Button>
                          </Spacer>
                          <Spacer isInlineBlock marginRight="medium">
                            <Button
                              onClick={() =>
                                this.decreaseValueHSV("saturation")
                              }
                            >
                              <IconMinus></IconMinus>
                              saturation
                            </Button>
                          </Spacer>
                        </div>
                      </div>
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
              <Grid item xs={12}>
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
                      {this.changeText()}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
          <Fab
            style={{ position: "fixed", bottom: "0", right: "0" }}
            color="primary"
            aria-label="add"
            onClick={this.toAdvancedFilters}
          >
            <NavigateNextIcon />
          </Fab>
        </div>
      </div>
    );
  }
}
