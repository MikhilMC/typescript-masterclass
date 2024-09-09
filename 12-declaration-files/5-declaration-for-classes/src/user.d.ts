export declare class User {
  greeting: string;
  user: { name: string; greeting: string };

  constructor(greeting: string): void;
  createUser(name: string): { name: string; greeting: string };
  showGreating(): void;
}

export declare class AdminUser extends User {
  constructor(): void;
  showGreating(): void;
}
