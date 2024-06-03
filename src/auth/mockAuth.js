import { users } from "../data/users";

export const mockAuth = {
  isAuthenticated: false,
  login(email, password, callback) {
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
      this.isAuthenticated = true;
      setTimeout(callback, 100); // simulate async login
    } else {
      alert("Invalid credentials");
    }
  },
  logout(callback) {
    this.isAuthenticated = false;
    setTimeout(callback, 100);
  }
};
