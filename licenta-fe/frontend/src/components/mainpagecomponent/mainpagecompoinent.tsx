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
} from "@material-ui/core";

interface TransformationInterface {
  transforms: [];
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
    };
  }
  updateColorValue(value: string, key: string) {
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
    return this.state.transforms.map((tranform) => {
      return <Transformation gravity="center" crop="fill" />;
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
  getSliderValue(key: any | string, type: string) {
    console.log("Transforms : ", this.state.transforms, key, type);

    const transform = this.state.transforms.find(
      ({ key }) => key !== transform.key
    );
    console.log("Transform ", transform);

    if (transform != null) {
      return transform.value;
    }
  }

  resetFilters(arg0: string[]): void {
    throw new Error("Method not implemented.");
  }

  createRGBEffect(type) {
    const red = { key: "red", value: 0 };
    const blue = { key: "blue", value: 0 };
    const green = { key: "green", value: 0 };

    switch (type) {
      case "all_red":
        red.value = 100;
        break;
      case "all_blue":
        blue.value = 100;
        break;
      case "all_green":
        green.value = 100;
        break;
      default:
        break;
    }

    let transforms = this.state.transforms;

    transforms = this.getUpdatedTransform(transforms, red);
    transforms = this.getUpdatedTransform(transforms, blue);
    transforms = this.getUpdatedTransform(transforms, green);

    this.setState({ transforms });
  }
  render() {
    return (
      <div>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Input image
              </Typography>
              <Image publicId="leena" cloudName="rakesh111"></Image>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
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
                >
                  R-G-B Controls
                </Typography>

                <Button
                  onClick={() => this.resetFilters(["red", "green", "blue"])}
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
                  onClick={() => this.resetFilters(["red", "green", "blue"])}
                  color="primary"
                >
                  Reset
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </div>
    );
  }
}
