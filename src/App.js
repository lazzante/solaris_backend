import "./App.css";
import { HashRouter, Router, Route, Redirect, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import UserPage from "./pages/UserPage";
import { BrowserRouter } from "react-router-dom";
import TopBar from "./components/TopBar";
import AdminPanel from "./pages/AdminPanel";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/admin-panel" component={AdminPanel} />
          <Route exact path="/" component={HomePage} />
          <Route path="/user/:username" component={UserPage} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
