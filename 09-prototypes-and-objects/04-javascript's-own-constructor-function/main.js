/*
 * Javascript’s Own Constructor Function
 */

/*class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.points = 0;
  }

  login() {
    console.log(this.name + " has logged in");
  }

  logout() {
    console.log(this.name + " has logged out");
  }

  addPoint() {
    this.points++;
    console.log("total points: " + this.points);
  }
}

const user = new User("John", "john@email.com");

console.log(user);*/

function User(name, email) {
  this.name = name;
  this.email = email;
  this.points = 0;

  this.login = () => {
    console.log(this.name + " has logged in");
  };

  this.logout = () => {
    console.log(this.name + " has logged out");
  };

  this.addPoint = () => {
    this.points++;
    console.log("total points: " + this.points);
  };
}

const user = new User("John", "john@email.com");

console.log(user);
