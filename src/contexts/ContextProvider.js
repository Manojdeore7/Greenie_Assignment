import Context from "./Context";
import { useState } from "react";
function ContextProvider(props) {
  let [userLoggedIn, setToken] = useState(false);

  let loggedInHandeler = async () => {
    await fetch("https://hoblist.com/api/movieList", {
      method: "POST",
      body: JSON.stringify({
        category: "movies",
        language: "kannad",
        genre: "all",
        sort: "voting",
      }),

      headers: {
        "Content-Type": "application/json",
      },
    });

    setToken(true);
  };
  let loggedOutHandeler = () => {
    setToken(false);
  };

  let context = {
    isLoggedIn: userLoggedIn,
    login: loggedInHandeler,
    logout: loggedOutHandeler,
  };
  return <Context.Provider value={context}>{props.children}</Context.Provider>;
}
export default ContextProvider;
