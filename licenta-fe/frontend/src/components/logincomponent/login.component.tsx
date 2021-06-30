import React from "react";
import InputField from "terra-form-input/lib/InputField";
import Button from "terra-button/lib/Button";
import "./login.component.css";
import Spacer from "terra-spacer";
import { RouteComponentProps } from "react-router-dom";
import User from "../model/user.model";
import userServices from "../../services/user.services";
import alertify from "alertifyjs";
import IconPadlock from "terra-icon/lib/icon/IconPadlock";
import Grid from "@material-ui/core/Grid";
import { Image } from "react-bootstrap";
import unitBVLOGO from "./images/unitbvLogopng.png";
import mate from "./images/MILOGO.png";
import Person from "terra-icon/lib/icon/IconPerson";

interface LoginState {
  name: string;
  surname: string;
  username: string;
  password: string;
  email: string;
  users: User[];
}
interface ILoginProps extends RouteComponentProps {
  addUSer: React.MouseEventHandler<HTMLButtonElement>;
}

class LoginComponent extends React.Component<ILoginProps, LoginState> {
  service = new userServices(this.props);
  usersList: User[] = [];
  constructor(props) {
    super(props);
    this.addUser = this.addUser.bind(this);
    this.toMainPage = this.toMainPage.bind(this);
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.state = {
      name: "",
      surname: "",
      username: "",
      password: "",
      email: "",
      users: [],
    };
  }

  onUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };
  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };
  addUser() {
    this.props.history.push("/register");
  }
  toMainPage() {
    this.props.history.push("/mainpage");
  }
  componentDidMount() {
    this.service.getAllUsers().then((res) => {
      this.setState({ users: res.data });
    });
  }
  loginVerification = (e) => {
    e.preventDefault();
    let user = {
      name: this.state.name,
      surname: this.state.surname,
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
    };
    console.log("user=>" + JSON.stringify(user));
    this.service
      .getUser(user)
      .then((res) => {
        this.props.history.push("/mainpage");
      })
      .catch((err) => {
        let response = JSON.parse(err.request.responseText);
        if (response.message === "Username do not match") {
          alertify.alert("Eroare", "Nume de utilizator este gresit");
        }
        if (response.message === "Wrong password") {
          alertify.alert("Eroare", "Parola gresita");
        }
      });
  };

  render() {
    return (
      <div className="backgroundLogin">
        <Image src={unitBVLOGO} style={{ height: "300px" }}></Image>
        <Image src={mate} style={{}}></Image>
        <div className="layer">
          <div className="inputs">
            <div className="login">
              <InputField
                inputId="Username"
                label={<Person></Person>}
                onChange={this.onUsernameChange}
                help="Username/email"
                type="text"
                inputAttrs={{
                  name: "username",
                }}
              />
            </div>
            <div className="passwordForm">
              <InputField
                inputId="Password"
                label={<IconPadlock></IconPadlock>}
                onChange={this.onPasswordChange}
                help="Password"
                type="password"
                inputAttrs={{
                  name: "password",
                }}
              ></InputField>
            </div>
          </div>
          <div className="buttons">
            <Spacer isInlineBlock marginRight="medium">
              <Button
                text="Login"
                className="button"
                onClick={this.loginVerification}
              ></Button>
            </Spacer>

            <Spacer isInlineBlock marginRight="medium">
              <div>
                <Button
                  text="Register"
                  onClick={this.addUser}
                  className="button"
                />
              </div>
            </Spacer>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginComponent;
