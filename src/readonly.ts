type User = {
  id: string;
}
 
const user: Readonly<User> = {
  id: "abc123",
};
 
user.id = "def456";
// error: Cannot assign to 'id' because it is a read-only property.


export {};