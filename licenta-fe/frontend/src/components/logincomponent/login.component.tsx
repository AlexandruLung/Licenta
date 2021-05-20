import React from "react";
import InputField from "terra-form-input/lib/InputField";
import Button from "terra-button/lib/Button";
import "./login.component.css";
import Spacer from "terra-spacer";
import { RouteComponentProps } from "react-router-dom";
import User from "../model/user.model";
import userServices from "../../services/user.services";
import alertify from "alertifyjs";

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
          alertify.alert("Eroare", "Nume de utilizator ese gresit");
        }
        if (response.message === "Wrong password") {
          alertify.alert("Eroare", "Parola gresita");
        }
      });
  };

  render() {
    return (
      <div className="container">
        <div className="inputs">
          <InputField
            inputId="Username"
            label="Username"
            onChange={this.onUsernameChange}
            help=""
            type="text"
            inputAttrs={{
              name: "username",
            }}
          />
          <InputField
            inputId="Password"
            label="Password"
            onChange={this.onPasswordChange}
            help=""
            type="text"
            inputAttrs={{
              name: "password",
            }}
          />
        </div>
        <div className="buttons">
          <Spacer isInlineBlock marginRight="medium">
            <Button
              text="Login"
              onClick={this.loginVerification}
              variant="emphasis"
            />
          </Spacer>
          <Spacer isInlineBlock marginRight="medium">
            <Button text="Register" onClick={this.addUser} variant="register" />
          </Spacer>
        </div>
      </div>
    );
  }
}

export default LoginComponent;
