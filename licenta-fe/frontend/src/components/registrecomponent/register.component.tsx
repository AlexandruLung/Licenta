import React from "react";
import InputField from "terra-form-input/lib/InputField";
import Button from "terra-button/lib/Button";
import "./register.component.css";
import Spacer from "terra-spacer";
import { RouteComponentProps } from "react-router-dom";
import User from "../model/user.model";
import userServices from "../../services/user.services";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";

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
    this.service
      .createUser(user)
      .then((res) => {
        console.log(res);
        this.props.history.push("/login");
      })
      .catch((err) => {
        let response = JSON.parse(err.request.responseText);
        console.log(response.message);
        if (response.message === "Email is empty") {
          console.log();
          alertify.alert("Eroare", "Campul email este obligatoriu");
        } else if (response.message === "Email is already used") {
          alertify.alert("Eroare", "Emailul este deja folosit");
        }
        if (response.message === "Email is not valid") {
          alertify.alert("Eroare", "Eamilul nu este valid");
        }
        if (response.message === "Username is empty") {
          alertify.alert("Eroare", "Campul username este obligatoriu");
        }
        if (response.message === "Username already used") {
          alertify.alert("Eroare", "Numele de utilizator este deja folosit");
        }
        if (response.message === "The password is too short") {
          alertify.alert("Eroare", "Parola este prea scurta");
        }
        if (response.message === "Must contain numbers") {
          alertify.alert("Eroare", "Parola trebuie sa contina numere");
        }
        if (response.message === "Must contain a special character") {
          alertify.alert(
            "Eroare",
            "Parola trebuie sa contina cel putin un caracter special"
          );
        }
        if (response.message === "Must contain a capital letter") {
          alertify.alert(
            "Eroare",
            "Parola trebuie sa contina cel putin o litera mare"
          );
        }
      });
  };

  onClickCancel() {
    this.props.history.push("/login");
  }

  render() {
    return (
      <div className="background">
        <script src="C:/licenta/Licenta/licenta-fe/frontend/alertify.min.js"></script>
        <div className="inputs">
          <InputField
            inputId="Username"
            label="Username"
            help="*Acesta este un camp obligatoriu"
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
            help="*Trebuie sa contina numere litere mari si caractere speciale"
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
            help=""
            type="text"
            inputAttrs={{
              name: "name",
            }}
          />
          <InputField
            inputId="Surname"
            label="Surname"
            value={this.state.surname}
            onChange={this.changeSurname}
            help=""
            type="text"
            inputAttrs={{
              name: "surname",
            }}
          />
          <InputField
            inputId="Email"
            label="Email"
            onChange={this.changeEmail}
            value={this.state.email}
            help="*Acesta este un camp obligatoriu"
            type="text"
            inputAttrs={{
              name: "email",
            }}
          />
        </div>
        <div className="buttons">
          <Spacer isInlineBlock marginRight="medium">
            <Button
              text="Register"
              onClick={this.addUser}
              className="buttons-style"
            />
          </Spacer>
          <Spacer isInlineBlock marginRight="medium">
            <Button
              text="Cancel"
              onClick={this.onClickCancel}
              className="buttons-style"
            />
          </Spacer>
        </div>
      </div>
    );
  }
}

export default RegisterComponent;
