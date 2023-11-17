import react from "react";
let AuthContext = react.createContext({
  Data: [],
  refresh: () => {},
});

export default AuthContext;
