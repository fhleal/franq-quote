import { SESSION_DURATION } from "../config/constants";
import { Session } from "../domains/Session";
import { User } from "../domains/User";


export const loginUser = (email: string, password: string): boolean => {
  const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    const session : Session = {
      name: user.name,
      email: user.email,
      startTime: new Date().getTime(),
    };
    localStorage.setItem("session", JSON.stringify(session));
    return true;
  }

  return false;
};


export const isAuthenticated = (): boolean => {
  try {
    const session = localStorage.getItem("session");
    if (!session) return false;

    const { startTime } = JSON.parse(session);
    if (!startTime) return false;

    const now = new Date().getTime();
    if (now - startTime > SESSION_DURATION) {
      localStorage.removeItem("session");
      return false;
    }

    return true;
  } catch {
    return false;
  }
};



export function handleLogout() {
  localStorage.removeItem('session');
}

