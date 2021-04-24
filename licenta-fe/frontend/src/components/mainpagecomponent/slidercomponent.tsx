import { Typography, Slider } from "@material-ui/core";
import React from "react";
import { transform } from "typescript";
import MaiClass from "./mainpagecompoinent";

interface SliderInterface {
  keyValue: any;
  transforms: [];
  keyLabel: any;
  min: any;
  max: any;
  getSliderValue: any;
  default: number;
  updateColorValue: any;
}
export default class SliderComponent extends React.Component<
  SliderInterface,
  SliderInterface
> {
  default: number | number[] | undefined;
  valuetext(value) {
    return `${value}°C`;
  }
  constructor(props: any) {
    super(props);
    this.updateColorValue = this.updateColorValue.bind(this);
    this.getSliderValue = this.getSliderValue.bind(this);
    this.state = {
      transforms: [],
      min: "",
      max: "",
      keyLabel: "",
      keyValue: "",
      getSliderValue: "",
      default: 0,
      updateColorValue: "",
    };
  }

  updateColorValue(value: any, key: string) {
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
    // console.log("Transforms : ", this.state.transforms, key, type);

    const transform: any = this.state.transforms.find(
      (transform: any) => transform.key === key
    );
    let colors: any[] = this.getRBBCons();
    //console.log("Transform ", transform);
    //console.log(colors);
    if (transform != null) {
      //console.log("value" + transform.value, "key=" + key);
      return transform.value;
    }
    colors.forEach((t) => {
      if (t.value == key) {
        //console.log(t.value);
      }
    });
    console.log(colors[0].value);
    if (key.toString() === colors[0].value.toString()) {
      console.log("works");
    }
    if (type == "rgb") {
      return this.getRBBCons().find((transform: any) => transform.value === key)
        ?.default;
    } else if (type == "hsv") {
      return this.getHSVCons().find((transform: any) => transform.value === key)
        ?.default;
    }
  }
  render() {
    console.log(this.getSliderValue(this.props.keyValue, "rgb"));

    return (
      <div>
        <Typography gutterBottom>{this.props.keyLabel}</Typography>
        <Slider
          defaultValue={this.default}
          getAriaValueText={this.valuetext}
          step={10}
          value={this.getSliderValue(this.props.keyValue, "rgb")}
          marks
          min={this.props.min}
          max={this.props.max}
          onChangeCommitted={(e, value) =>
            this.updateColorValue(value, this.props.keyValue)
          }
        />
      </div>
    );
  }
}
