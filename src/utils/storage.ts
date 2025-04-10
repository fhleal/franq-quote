import { User } from "../domains/User";
import useToast from "../hooks/toast/useToast";

  
export const registerUser = (user: User) => {
  const { showToast } = useToast();
  const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");

  const userExists = users.some(u => u.email === user.email);
  if (userExists) {
    showToast('User already exists', 'warn')
    throw new Error("User already exists");
  }

  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
};
  