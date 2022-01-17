import Topbar from "../src/components/topbar/Topbar";
import Sidebar from "../src/components/sidebar/Sidebar";
import "./app.css";
import UserList from "./pages/userList/UserList";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
  <Router>
    <Topbar />
    <div className="container">
      <Sidebar />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/users">
          <UserList />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;