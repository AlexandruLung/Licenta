import axios from "axios";
import React from "react";

const USER_API_BASE_URL = "http://localhost:8080/licenta";

export default class userServices extends React.Component {
  constructor(props) {
    super(props);
    this.getUser = this.getUser.bind(this);
  }
  getUser() {
    return axios.get(USER_API_BASE_URL);
  }

  createUser(employee) {
    return axios.post(USER_API_BASE_URL + "/add-user", employee);
  }

  getUserId(employeeId) {
    return axios.get(USER_API_BASE_URL + "/" + employeeId);
  }
}
