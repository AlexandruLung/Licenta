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

interface TransformationInterface {
  transforms: [];
  keyValue: string;
  keyLabel: string;
}

export default class AdvancedFilters extends React.Component<
  TransformationInterface,
  TransformationInterface
> {
  constructor(props: any) {
    super(props);
    this.createAdvanceEffects = this.createAdvanceEffects.bind(this);
    this.resetFilters = this.resetFilters.bind(this);
    this.state = {
      transforms: [],
      keyValue: "",
      keyLabel: "",
    };
  }

  getUpdatedTransform(transforms, transform) {
    const newTransforms = transforms.filter(({ key }) => key !== transform.key);

    newTransforms.push(transform);

    return newTransforms;
  }
  createAdvanceEffects(type) {
    let transforms = this.state.transforms;

    switch (type) {
      case "cartoon":
        const transform = {
          key: "cartoonify",
          value: "20:60",
        };
        transforms = this.getUpdatedTransform(transforms, transform);
        break;
      case "vignette":
        const transform_v = {
          key: "vignette",
          value: "30",
        };
        transforms = this.getUpdatedTransform(transforms, transform_v);
        break;
      case "oil_painting":
        const transform_p = {
          key: "oil_paint",
          value: "40",
        };
        transforms = this.getUpdatedTransform(transforms, transform_p);
        break;
      case "vibrance":
        const transform_vb = {
          key: "vibrance",
          value: "70",
        };
        transforms = this.getUpdatedTransform(transforms, transform_vb);
        break;
      default:
        break;
    }

    this.setState({ transforms });
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
  resetFilters(keys) {
    const newTransforms: any = this.state.transforms.filter(
      ({ key }) => keys.indexOf(key) < 0
    );

    this.setState({ transforms: newTransforms });
  }
  render() {
    return (
      <Grid xs={12}>
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
        <Card>
          <CardContent>
            <Box color="text.primary">
              <Typography
                paragraph={true}
                variant="h5"
                align="left"
                component="h5"
              >
                Advance Filters By Cloudinary
              </Typography>

              <Button onClick={() => this.createAdvanceEffects("cartoon")}>
                Cartoonify
              </Button>
              <Button onClick={() => this.createAdvanceEffects("vignette")}>
                Vignette
              </Button>

              <Button onClick={() => this.createAdvanceEffects("oil_painting")}>
                Oil Painting
              </Button>

              <Button onClick={() => this.createAdvanceEffects("vibrance")}>
                vibrance
              </Button>

              <Button
                onClick={() =>
                  this.resetFilters([
                    "vignette",
                    "cartoonify",
                    "vibrance",
                    "oil_paint",
                  ])
                }
                color="primary"
              >
                Reset
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    );
  }
}
