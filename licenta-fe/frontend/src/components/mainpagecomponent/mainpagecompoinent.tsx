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

  increaseValues(type) {
    // switch (type) {
    //   case "all_red":
    //     red.value += 10;
    //     break;
    //   case "all_blue":
    //     blue.value += 10;
    //     break;
    //   case "all_green":
    //     green.value += 10;
    //     break;
    //   default:
    //     break;
    // }
    let transforms = this.state.transforms;
    let count: number = 0;
    let colors: any[] = this.getRBBCons();
    //sa faci un prag la +-100  si sa refaci functia de reset sa aduca valorile la 0
    //bravo ai rezolvat  !!!
    if (type == "all_red") {
      console.log((this.red.value += 10));
      transforms = this.getUpdatedTransform(transforms, this.red);
      console.log(
        this.getRBBCons().forEach((t) => {
          console.log(t.default);
        })
      );
    }

    transforms = this.getUpdatedTransform(transforms, this.green);

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

                {/* {this.getRBBCons().map((color) => {
                  return (
                    <SliderComponent
                      transforms={[]}
                      getSliderValue={(key) => this.getSliderValue(key, "rgb")}
                      default={0}
                      min={-100}
                      max={100}
                      keyLabel={color.key}
                      keyValue={color.value}
                      updateColorValue={(e, keyValue, keyLabel) =>
                        this.updateColorValue(e, keyValue, keyLabel)
                      }
                    />
                  );
                })} */}

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

// interface SliderInterface {
//   keyValue: any;
//   transforms: [];
//   keyLabel: any;
//   min: any;
//   max: any;
//   getSliderValue: any;
//   default: number;
//   updateColorValue: any;
// }
// class SliderComponent extends React.Component<
//   SliderInterface,
//   SliderInterface
// > {
//   default: number | number[] | undefined;
//   valuetext(value) {
//     return `${value}°C`;
//   }
//   constructor(props: any) {
//     super(props);
//     this.updateColorValue = this.updateColorValue.bind(this);
//     this.getSliderValue = this.getSliderValue.bind(this);
//     this.state = {
//       transforms: [],
//       min: "",
//       max: "",
//       keyLabel: "",
//       keyValue: "",
//       getSliderValue: "",
//       default: 0,
//       updateColorValue: "",
//     };
//   }
//   updateColorValue(value: any, key: string) {
//     const transform = {
//       key,
//       value,
//     };

//     const transforms = this.getUpdatedTransform(
//       this.state.transforms,
//       transform
//     );
//     this.setState({ transforms });
//   }
//   getUpdatedTransform(transforms, transform) {
//     const newTransforms = transforms.filter(({ key }) => key !== transform.key);

//     newTransforms.push(transform);

//     return newTransforms;
//   }

//   getRBBCons() {
//     return [
//       { key: "Red", value: "red", default: 0 },
//       { key: "Green", value: "green", default: 0 },
//       { key: "Blue", value: "blue", default: 0 },
//     ];
//   }

//   getHSVCons() {
//     return [
//       { key: "Hue", value: "hue", default: 80 },
//       { key: "Saturation", value: "saturation", default: 80 },
//       { key: "Value", value: "brightness", default: 80 },
//     ];
//   }
//   getSliderValue(key: any | string, type: string) {
//     console.log("Transforms : ", this.state.transforms, key, type);

//     const transform: any = this.state.transforms.find(
//       (transform: any) => transform.key === key
//     );
//     console.log("Transform ", transform);

//     if (transform != null) {
//       return transform.value;
//     }

//     if (type == "rgb") {
//       return this.getRBBCons().find((transform: any) => transform.value === key)
//         ?.default;
//     } else if (type == "hsv") {
//       return this.getHSVCons().find((transform: any) => transform.value === key)
//         ?.default;
//     }
//   }
//   render() {
//     console.log(this.getSliderValue(this.props.keyValue, "rgb"));

//     return (
//       <div>
//         <Typography gutterBottom>{this.props.keyLabel}</Typography>
//         <Slider
//           defaultValue={this.default}
//           getAriaValueText={this.valuetext}
//           step={10}
//           value={this.getSliderValue(this.props.keyValue, "rgb")}
//           marks
//           min={this.props.min}
//           max={this.props.max}
//           onChangeCommitted={(e, value) =>
//             this.updateColorValue(value, this.props.keyValue)
//           }
//         />
//       </div>
//     );
//   }
// }
