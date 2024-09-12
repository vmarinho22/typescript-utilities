type User = {
  name: string;
  age: number;
  email?: string;
  phone?: number;
}

type RequiredUser = Required<User>;

const user: RequiredUser = {
  name: "John",
  age: 30,
  email: "john@example.com",
};
// error: Type '{ name: string; age: number; email: string; }' is missing the 
//following properties from type 'RequiredUser': phone

export {};