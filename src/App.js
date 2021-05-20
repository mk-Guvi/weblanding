import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/Main/Main";
import { Switch, Route } from "react-router-dom";
export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Sidebar />
          <Main />
        </Route>
        <Route exact path="/services">
          <Sidebar />
        </Route>
      </Switch>
    </div>
  );
}
