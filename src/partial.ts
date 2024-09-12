type User = {
  name: string;
  email: string;
}
 
function updateUser(user: User, changes: Partial<User>) {
  return { ...user, ...changes };
}
 
const user: User = { name: "John", email: "john@example.com" };
 
const updatedUser = updateUser( user, { name: "John Doe" } );

console.log(updatedUser); // { name: "John Doe", email: "john@example.com" }

export {};