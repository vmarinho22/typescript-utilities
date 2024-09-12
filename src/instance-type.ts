class User {
  name: string = "John";
  age: number = 30;
}

type UserInstance = InstanceType<typeof User>;

const user: UserInstance = new User();

console.log(user.name); // John

type Test = InstanceType<string>;
// Type 'string' does not satisfy the constraint 'abstract new (...args: any) => any'.

export {};