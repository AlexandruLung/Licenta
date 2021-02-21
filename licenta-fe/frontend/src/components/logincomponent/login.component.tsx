import React from "react";
import InputField from "terra-form-input/lib/InputField";
import Button from "terra-button/lib/Button";
import "./login.component.css";
import Spacer from "terra-spacer";
import { Link } from "react-router-dom";
class USernameInputField extends React.Component {
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
            <Button text="Login" variant="emphasis" />
          </Spacer>
          <Spacer isInlineBlock marginRight="medium">
            <Button
              text="Register"
              component={Link}
              to="/register"
              variant="register"
            />
          </Spacer>
        </div>
      </div>
    );
  }
}

export default USernameInputField;
