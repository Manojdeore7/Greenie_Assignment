import React from "react";
import { Route, Switch } from "react-router-dom";
import ContextProvider from "./contexts/ContextProvider";
import "bootstrap/dist/css/bootstrap.css";
import UserDetails from "./Components/UserDetails";
import AccountCreation from "./Components/AccountCreation";
import Header from "./Components/Header";
import DetailPage from "./Components/DetailPage";
function App() {
  return (
    <>
      <Header />

      <ContextProvider>
        <Switch>
          <Route exact path="/" component={UserDetails} />
          <Route path="/account-creation" component={AccountCreation} exact />
          <Route path="/:Id" component={DetailPage} exact />
        </Switch>
      </ContextProvider>
    </>
  );
}

export default App;
