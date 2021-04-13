import React from "react";
import InputField from "terra-form-input/lib/InputField";
import Button from "terra-button/lib/Button";
import "./login.component.css";
import Spacer from "terra-spacer";
import { link } from "fs";
import { RouteComponentProps } from "react-router-dom";


interface LoginState {
  users: [];
}
interface ILoginProps extends RouteComponentProps {
  addUSer: React.MouseEventHandler<HTMLButtonElement>;
}

class LoginComponent extends React.Component<ILoginProps, LoginState> {
  constructor(props) {
    super(props);
    this.addUser = this.addUser.bind(this);
    this.toMainPage=this.toMainPage.bind(this);
    this.state = {
      users: [],
    };
  }

  addUser() {
    this.props.history.push("/register");
  }
  toMainPage(){
    this.props.history.push("/mainpage")
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
            inputAttrs={{
              name: "username",
            }}
          />
          <InputField
            inputId="Password"
            label="Password"
            help="Note: This can not be changed in the future"
            type="text"
            inputAttrs={{
              name: "password",
            }}
          />
        </div>
        <div className="buttons">
          <Spacer isInlineBlock marginRight="medium">
            <Button text="Login" onClick={this.toMainPage} variant="emphasis" />
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
