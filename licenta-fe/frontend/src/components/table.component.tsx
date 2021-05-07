import React from "react";
import Table from "terra-table";
import Spacer from "terra-spacer";
import Button from "terra-button/lib/Button";
import { RouteComponentProps } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import userServices from "../services/user.services";
import User from "./model/user.model";

interface ITableProps extends RouteComponentProps {}
interface myState {
  users: User[];
}

class PaddingTable extends React.Component<ITableProps, myState> {
  service = new userServices(this.props);
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
    this.addUser = this.addUser.bind(this);
  }

  addUser() {
    this.props.history.push("/login");
  }

  componentDidMount() {
    this.service.getUser().then((res) => {
      this.setState({ users: res.data });
    });
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Employees List</h2>
        <div className="row">
          <button className="btn btn-primary"> Add Employee</button>
        </div>
        <br></br>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th> Employee First Name</th>
                <th> Employee Last Name</th>
                <th> Employee Email Id</th>
                <th> Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((user) => (
                <tr key={0}>
                  <td> {user.email} </td>
                  <td> {user.password}</td>
                  <td> {user.name}</td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default PaddingTable;
