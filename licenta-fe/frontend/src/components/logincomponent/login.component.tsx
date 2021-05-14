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

// import React, { useReducer, useEffect } from "react";
// import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

// import TextField from "@material-ui/core/TextField";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import CardActions from "@material-ui/core/CardActions";
// import CardHeader from "@material-ui/core/CardHeader";
// import Button from "@material-ui/core/Button";
// import { RouteComponentProps } from "react-router-dom";

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     container: {
//       display: "flex",
//       flexWrap: "wrap",
//       width: 400,
//       margin: `${theme.spacing(0)} auto`,
//     },
//     loginBtn: {
//       marginTop: theme.spacing(2),
//       flexGrow: 1,
//     },
//     header: {
//       textAlign: "center",
//       background: "#212121",
//       color: "#fff",
//     },
//     card: {
//       marginTop: theme.spacing(10),
//     },
//   })
// );

// //state type

// type State = {
//   username: string;
//   password: string;
//   isButtonDisabled: boolean;
//   helperText: string;
//   isError: boolean;
// };

// const initialState: State = {
//   username: "",
//   password: "",
//   isButtonDisabled: true,
//   helperText: "",
//   isError: false,
// };

// type Action =
//   | { type: "setUsername"; payload: string }
//   | { type: "setPassword"; payload: string }
//   | { type: "setIsButtonDisabled"; payload: boolean }
//   | { type: "loginSuccess"; payload: string }
//   | { type: "loginFailed"; payload: string }
//   | { type: "setIsError"; payload: boolean };

// const reducer = (state: State, action: Action): State => {
//   switch (action.type) {
//     case "setUsername":
//       return {
//         ...state,
//         username: action.payload,
//       };
//     case "setPassword":
//       return {
//         ...state,
//         password: action.payload,
//       };
//     case "setIsButtonDisabled":
//       return {
//         ...state,
//         isButtonDisabled: action.payload,
//       };
//     case "loginSuccess":
//       return {
//         ...state,
//         helperText: action.payload,
//         isError: false,
//       };
//     case "loginFailed":
//       return {
//         ...state,
//         helperText: action.payload,
//         isError: true,
//       };
//     case "setIsError":
//       return {
//         ...state,
//         isError: action.payload,
//       };
//   }
// };

// const Login = () => {
//   const classes = useStyles();
//   const [state, dispatch] = useReducer(reducer, initialState);

//   useEffect(() => {
//     if (state.username.trim() && state.password.trim()) {
//       dispatch({
//         type: "setIsButtonDisabled",
//         payload: false,
//       });
//     } else {
//       dispatch({
//         type: "setIsButtonDisabled",
//         payload: true,
//       });
//     }
//   }, [state.username, state.password]);

//   const handleLogin = () => {
//     if (state.username === "abc@email.com" && state.password === "password") {
//       state.history.
//       dispatch({
//         type: "loginSuccess",
//         payload: "Login Successfully",
//       });
//     } else {
//       dispatch({
//         type: "loginFailed",
//         payload: "Incorrect username or password",
//       });
//     }
//   };

//   const handleKeyPress = (event: React.KeyboardEvent) => {
//     if (event.keyCode === 13 || event.which === 13) {
//       state.isButtonDisabled || handleLogin();
//     }
//   };

//   const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> = (
//     event
//   ) => {
//     dispatch({
//       type: "setUsername",
//       payload: event.target.value,
//     });
//   };

//   const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = (
//     event
//   ) => {
//     dispatch({
//       type: "setPassword",
//       payload: event.target.value,
//     });
//   };
//   // addUser() {
//   //   this.props.history.push("/register");
//   // }
//   // toMainPage(){
//   //   this.props.history.push("/mainpage")
//   // }
//   return (
//     <form className={classes.container} noValidate autoComplete="off">
//       <Card className={classes.card}>
//         <CardHeader className={classes.header} title="Login App" />
//         <CardContent>
//           <div>
//             <TextField
//               error={state.isError}
//               fullWidth
//               id="username"
//               type="email"
//               label="Username"
//               placeholder="Username"
//               margin="normal"
//               onChange={handleUsernameChange}
//               onKeyPress={handleKeyPress}
//             />
//             <TextField
//               error={state.isError}
//               fullWidth
//               id="password"
//               type="password"
//               label="Password"
//               placeholder="Password"
//               margin="normal"
//               helperText={state.helperText}
//               onChange={handlePasswordChange}
//               onKeyPress={handleKeyPress}
//             />
//           </div>
//         </CardContent>
//         <CardActions>
//           <Button
//             variant="contained"
//             size="large"
//             color="secondary"
//             className={classes.loginBtn}
//             onClick={handleLogin}
//             disabled={state.isButtonDisabled}
//           >
//             Login
//           </Button>
//         </CardActions>
//       </Card>
//     </form>
//   );
// };

// export default Login;
