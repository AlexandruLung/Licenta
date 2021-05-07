import React from "react";
import InputField from "terra-form-input/lib/InputField";
import Button from "terra-button/lib/Button";
import "./register.component.css";
import Spacer from "terra-spacer";
import { ReactComponent } from "*.svg";
import { RouteComponentProps } from "react-router-dom";
import User from "../model/user.model";
import userServices from "../../services/user.services";

interface IRegisterProps extends RouteComponentProps {}
interface userState {
  name: string;
  surname: string;
  username: string;
  password: string;
  email: string;
  users: User[];
}
class RegisterComponent extends React.Component<IRegisterProps, userState> {
  service = new userServices(this.props);
  constructor(props) {
    super(props);
    this.onClickCancel = this.onClickCancel.bind(this);
    this.state = {
      users: [],
      name: "",
      surname: "",
      username: "",
      password: "",
      email: "",
    };
    this.changeName = this.changeName.bind(this);
    this.changeSurname = this.changeSurname.bind(this);
    this.changeUsername = this.changeUsername.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.addUser = this.addUser.bind(this);
  }
  changeName = (event) => {
    this.setState({ name: event.target.value });
  };
  changeSurname = (event) => {
    this.setState({ surname: event.target.value });
  };
  changeUsername = (event) => {
    this.setState({ username: event.target.value });
  };
  changePassword = (event) => {
    this.setState({ password: event.target.value });
  };
  changeEmail = (event) => {
    this.setState({ email: event.target.value });
  };
  addUser = (e) => {
    e.preventDefault();
    let user = {
      name: this.state.name,
      surname: this.state.surname,
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
    };
    console.log("user=>" + JSON.stringify(user));
    this.service.createUser(user).then((res) => {
      this.props.history.push("/login");
    });
  };

  onClickCancel() {
    this.props.history.push("/login");
  }

  render() {
    return (
      <div className="container">
        <div className="inputs">
          <InputField
            inputId="Username"
            label="Username"
            help="Note: This can not be changed in the future"
            type="text"
            value={this.state.username}
            onChange={this.changeUsername}
            inputAttrs={{
              name: "username",
            }}
          />
          <InputField
            inputId="Password"
            label="Password"
            help="Note: This can not be changed in the future"
            type="text"
            value={this.state.password}
            onChange={this.changePassword}
            inputAttrs={{
              name: "password",
            }}
          />{" "}
          <InputField
            inputId="Name"
            label="Name"
            value={this.state.name}
            onChange={this.changeName}
            help="Note: This can not be changed in the future"
            type="text"
            inputAttrs={{
              name: "name",
            }}
          />
          <InputField
            inputId="surname"
            label="surname"
            value={this.state.surname}
            onChange={this.changeSurname}
            help="Note: This can not be changed in the future"
            type="text"
            inputAttrs={{
              name: "surname",
            }}
          />
          <InputField
            inputId="email"
            label="email"
            onChange={this.changeEmail}
            value={this.state.email}
            help="Note: This can not be changed in the future"
            type="text"
            inputAttrs={{
              name: "email",
            }}
          />
        </div>
        <div className="buttons">
          <Spacer isInlineBlock marginRight="medium">
            <Button text="Register" onClick={this.addUser} variant="register" />
          </Spacer>
          <Spacer isInlineBlock marginRight="medium">
            <Button
              text="Cancel"
              onClick={this.onClickCancel}
              variant="cancel"
            />
          </Spacer>
        </div>
      </div>
    );
  }
}

export default RegisterComponent;
