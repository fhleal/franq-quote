import { User } from "../domains/User";

const SESSION_DURATION = 30 * 60 * 1000; 

export const loginUser = (email: string, password: string): boolean => {
  const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    const session = {
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
  const session = localStorage.getItem("session")
  if (!session) return false

  const { startTime } = JSON.parse(session);
  const now = new Date().getTime();

  if (now - startTime > SESSION_DURATION) {
    localStorage.removeItem("session");
    return false;
  }

  return true;
};

export function logout() {
  localStorage.removeItem('session');
}

