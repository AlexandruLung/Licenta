import axios from "axios";
import React from "react";
import User from "../components/model/user.model";

const USER_API_BASE_URL = "http://localhost:8080/licenta";
const UI_URL = "http://localhost:3000";

export default class userServices extends React.Component {
  constructor(props) {
    super(props);
    this.getUser = this.getUser.bind(this);
  }
  getUser(employee) {
    return axios.post(USER_API_BASE_URL + "/user", employee);
  }
  getAllUsers() {
    return axios.get(USER_API_BASE_URL + "/allUsers");
  }

  createUser(employee) {
    return axios.post(USER_API_BASE_URL + "/add-user", employee);
  }

  getUserUsername(employeeUsername) {
    return axios.get(USER_API_BASE_URL + "/id" + employeeUsername);
  }
  applyFilter(apyEndpoint, data) {
    return axios.post(UI_URL + "/apply_filters" + apyEndpoint, data);
  }
}
