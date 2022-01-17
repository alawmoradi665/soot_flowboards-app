import Topbar from "../src/components/topbar/Topbar";
import Sidebar from "../src/components/sidebar/Sidebar";
import "./app.css";
import UserList from "./pages/userList/UserList";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/products/ProductList";
import Orders from "./pages/orders/Orders";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";

function App() {

  const admin = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.isAdmin;
  return (
    <Router>
        <Switch>
          <Route path="/Login">
            <Login />
          </Route>
          {admin && (
            <>
            <Topbar />
            <div className="container">
              <Sidebar />
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
                <Product />
              </Route>
              <Route path="/newproduct">
                <NewProduct />
              </Route>
              <Route path="/orders">
                <Orders />
              </Route>
            </div>
            </>)
          }
        </Switch>
    </Router>
  );
}

export default App;