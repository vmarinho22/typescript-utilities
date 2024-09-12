type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  age: number;
  isAdmin: boolean;
}

type SafeUser = Omit<User, 'password' | 'isAdmin'>;

const user: SafeUser = {
  id: "abc123",
  name: "John Doe",
  email: "john@example.com",
  age: 30,
};

console.log(user);
// { id: "abc123", name: "John Doe", email: "john@example.com", age: 30 }

export {};