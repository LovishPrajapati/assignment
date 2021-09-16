import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import List from "./screens/List";
import Login from "./screens/Login";
import Signup from "./screens/Signup";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/list">
          <List />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
