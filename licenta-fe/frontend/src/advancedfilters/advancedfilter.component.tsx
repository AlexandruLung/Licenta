import React from "react";
import {
  Image,
  Video,
  Transformation,
  CloudinaryContext,
} from "cloudinary-react";
import "./advancedfilter.component.css";
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
import "@edonec/collapsible/build/index.css";

import "@edonec/collapsible/build/icons.css";
import Collapsible from "@edonec/collapsible";
import { RouteComponentProps } from "react-router-dom";
import OilPainting from "./documentation/oil panting/oilPanting";
import Vignette from "./documentation/vinegrete/vinegrete";
import Vibrance from "./documentation/vibrance/vibrance";
import Cartoonify from "./documentation/cartonify/caronify";
interface ILoginProps extends RouteComponentProps {
  addUSer: React.MouseEventHandler<HTMLButtonElement>;
}

interface TransformationInterface {
  transforms: [];
  keyValue: string;
  keyLabel: string;
  imageName: string;
  documentation: string;
}

export default class AdvancedFilters extends React.Component<
  ILoginProps,
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
      imageName: "",
      documentation: "",
    };
  }

  documentationState(data) {
    this.setState({ documentation: data });
  }
  changeDocumentationState() {
    if (this.state.documentation === "oil_painting") {
      this.documentationState("oil_painting");
    }
    if (this.state.documentation === "cartoon") {
      this.documentationState("cartoon");
    }
    if (this.state.documentation === "vignette") {
      this.documentationState("vignette");
    }
    if (this.state.documentation === "vibrance") {
      this.documentationState("vibrance");
    }
  }
  getUpdatedTransform(transforms, transform) {
    const newTransforms = transforms.filter(({ key }) => key !== transform.key);

    newTransforms.push(transform);

    return newTransforms;
  }
  imageOnChange(image: string) {
    this.setState({ imageName: image });
    console.log(this.state.imageName);
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
        this.documentationState("cartoonify");
        break;
      case "vignette":
        const transform_v = {
          key: "vignette",
          value: "30",
        };
        transforms = this.getUpdatedTransform(transforms, transform_v);
        this.documentationState("vignette");
        break;
      case "oil_painting":
        const transform_p = {
          key: "oil_paint",
          value: "40",
        };
        transforms = this.getUpdatedTransform(transforms, transform_p);
        this.documentationState("oil_painting");
        break;
      case "vibrance":
        debugger;
        const transform_vb = {
          key: "vibrance",
          value: "70",
        };
        transforms = this.getUpdatedTransform(transforms, transform_vb);
        this.documentationState("vibrance");
        break;
      case "negate":
        debugger;
        const transform_neg = {
          key: "negate",
          value: "",
        };
        transforms = this.getUpdatedTransform(transforms, transform_neg);
        this.documentationState("negate");
        break;
      case "distortion":
        debugger;
        const transform_dist = {
          key: "distort",
          value: "150.0:340.0:1500.0:10.0:1500.0:1550.0:50.0:1000.0",
        };
        transforms = this.getUpdatedTransform(transforms, transform_dist);
        this.documentationState("distortion");
        break;
      default:
        break;
    }
    console.log(this.state.documentation);
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
  toAdvancedFilters = () => {
    this.props.history.push("/custom-filters");
  };
  toMainPage = () => {
    this.props.history.push("/mainpage");
  };
  resetFilters(keys) {
    const newTransforms: any = this.state.transforms.filter(
      ({ key }) => keys.indexOf(key) < 0
    );

    this.setState({ transforms: newTransforms });
  }
  changeText() {
    console.log(this.state.documentation);
    if (this.state.documentation === "vignette") {
      return <Vignette></Vignette>;
    } else if (this.state.documentation === "oil_painting") {
      return <OilPainting></OilPainting>;
    } else if (this.state.documentation === "vibrance") {
      return <Vibrance></Vibrance>;
    } else if (this.state.documentation === "cartoonify") {
      return <Cartoonify></Cartoonify>;
    }
  }
  render() {
    return (
      <div className="componentAdvanced">
        <Fab
          style={{ position: "fixed", bottom: "0", left: "0" }}
          color="primary"
          aria-label="add"
          onClick={this.toMainPage}
        >
          <NavigateBeforeIcon />
        </Fab>
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
                    className="imageAdvanced"
                    publicId="leena"
                    cloudName="rakesh111"
                  ></Image>
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
                    className="imageAdvanced"
                    publicId="leena"
                    cloudName="rakesh111"
                  >
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
                      Filtre avansate
                    </Typography>
                    <div className="buttonStyle">
                      <Button
                        onClick={() => this.createAdvanceEffects("cartoon")}
                      >
                        Cartoonify
                      </Button>
                      <Button
                        onClick={() => this.createAdvanceEffects("vignette")}
                      >
                        Vignette
                      </Button>

                      <Button
                        onClick={() =>
                          this.createAdvanceEffects("oil_painting")
                        }
                      >
                        Oil Painting
                      </Button>

                      <Button
                        onClick={() => this.createAdvanceEffects("vibrance")}
                      >
                        vibrance
                      </Button>
                      <Button
                        onClick={() => this.createAdvanceEffects("negate")}
                      >
                        Negate
                      </Button>
                      <Button
                        onClick={() => this.createAdvanceEffects("distortion")}
                      >
                        Distortion
                      </Button>
                    </div>
                    <Button
                      onClick={() =>
                        this.resetFilters([
                          "vignette",
                          "cartoonify",
                          "vibrance",
                          "oil_paint",
                          "negate",
                          "distort",
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
    );
  }
}
