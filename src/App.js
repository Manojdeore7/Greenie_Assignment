import React from "react";
import { Route, Switch } from "react-router-dom";
import ContextProvider from "./contexts/ContextProvider";
import "bootstrap/dist/css/bootstrap.css";
import UserDetails from "./Components/UserDetails";
import AccountCreation from "./Components/AccountCreation";
import Header from "./Components/Header";
function App() {
  return (
    <>
      <Header />

      <ContextProvider>
        <Switch>
          <Route exact path="/" component={UserDetails} />
          <Route path="/account-creation" component={AccountCreation} />
        </Switch>
      </ContextProvider>
    </>
  );
}

export default App;
