import { Router, Switch } from "react-router-dom";

import "./App.css";
import Navigation from "./Navigation";
import history from "./history";
import { AuthProvider } from "./hooks/useAuth";

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <AuthProvider>
          <Navigation />
        </AuthProvider>
      </Switch>
    </Router>
  );
};

export default App;
