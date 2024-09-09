export class User {
  constructor(greeting) {
    this.greeting = greeting;
  }

  createUser(name) {
    this.user = {
      name: name,
      greeting: this.greeting,
    };

    return this.user;
  }

  showGreating() {
    console.log(`${this.greeting}, ${this.user.name}`);
  }
}

export class AdminUser extends User {
  constructor() {
    super("Greetings to admin");
  }

  showGreating() {
    console.log(`${this.greeting}, ${this.user.name}`);
  }
}
