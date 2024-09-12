type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  age: number;
  isAdmin: boolean;
}

type SafeUser = Pick<User, 'id' | 'name' | 'email'>;

const user: SafeUser = {
  id: "abc123",
  name: "John Doe",
  email: "john@example.com"
};

console.log(user); // { id: "abc123", name: "John Doe", email: "john@example.com" }

export {};