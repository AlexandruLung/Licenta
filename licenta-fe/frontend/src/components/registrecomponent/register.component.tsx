import React from "react";
import InputField from "terra-form-input/lib/InputField";
import Button from "terra-button/lib/Button";
import "./register.component.css";
import Spacer from "terra-spacer";
import { ReactComponent } from "*.svg";
import { RouteComponentProps } from "react-router-dom";
interface IRegisterProps extends RouteComponentProps {}

class RegisterComponent extends React.Component<IRegisterProps, {}> {
  constructor(props) {
    super(props);
    this.onClickCancel = this.onClickCancel.bind(this);
    this.state = {
      users: [],
    };
  }
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
          <InputField
            inputId="Re-enter password"
            label="Password"
            help="Note: This can not be changed in the future"
            type="text"
            inputAttrs={{
              name: "repassword",
            }}
          />
        </div>
        <div className="buttons">
          <Spacer isInlineBlock marginRight="medium">
            <Button text="Register" variant="register" />
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
