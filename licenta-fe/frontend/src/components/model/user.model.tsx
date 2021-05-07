export default class User {
  constructor(
    public name: string,
    public password: string,
    public email: string
  ) {
    this.name = name;
    this.password = password;
    this.email = email;
  }
}
