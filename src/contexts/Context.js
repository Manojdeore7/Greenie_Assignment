import react, { useState } from "react";
let AuthContext = react.createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export default AuthContext;
