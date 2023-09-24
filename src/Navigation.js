import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Plan from "./Plan";
import Home from "./Home";
import Experience from "./Experience";
import Travel from "./Travel";
import FlySmiles from "./FlySmiles";
import Login from "./Login";
import { useAuth } from "./hooks/useAuth";

const LoggedIn = () => {
  return (
    <Switch>
      <Route component={Home} exact path={"/"} />
      <Route component={Plan} exact path={"/plan-and-book"} />
      <Route component={Travel} exact path={"/travel-information"} />
      <Route component={Experience} exact path={"/experience"} />
      <Route component={FlySmiles} exact path={"/fly-smiles"} />
      <Route render={(props) => <Redirect to={"/"} {...props} />} />
    </Switch>
  );
};

const LoggedOut = () => {
  return (
    <Switch>
      <Route component={Login} exact path={"/"} />
      <Route render={(props) => <Redirect to={"/"} {...props} />} />
    </Switch>
  );
};

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  console.log("isLoggedIn app", isLoggedIn);

  return isLoggedIn ? <LoggedIn /> : <LoggedOut />;
};

export default Navigation;
