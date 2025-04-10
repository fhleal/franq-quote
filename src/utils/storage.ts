import { User } from "../domains/User";

  
export const registerUser = (user: User) => {
  const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");

  const userExists = users.some(u => u.email === user.email);
  if (userExists) {
    throw new Error("User already exists");
  }

  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
};
  