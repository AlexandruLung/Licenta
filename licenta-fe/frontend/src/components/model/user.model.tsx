export default class User {
  constructor(
    public id: Number,
    public name: string,
    public surname: string,
    public email: string,
    public password: string,
    public username: string
  ) {
    this.id = 0;
    this.name = name;
    this.password = password;
    this.email = email;
    this.surname = surname;
    this.username = username;
  }
}
