import Topbar from "../src/components/topbar/Topbar";
import Sidebar from "../src/components/sidebar/Sidebar";
import "./app.css";
import UserList from "./pages/userList/UserList";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/products/ProductList";
import Analytics from "./pages/analytics/Analytics";
import Orders from "./pages/orders/Orders";
import CustomRequests from "./pages/requests/CustomRequests";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <ProductList />
          </Route>
          <Route path="/newproduct">
            <ProductList />
          </Route>
          <Route path="/analytics">
            <Analytics />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/requests">
            <CustomRequests />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;