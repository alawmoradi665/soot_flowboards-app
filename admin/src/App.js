import Topbar from "../src/components/topbar/Topbar";
import Sidebar from "../src/components/sidebar/Sidebar";
import "./app.css";
import Home from "./pages/home/Home";

function App() {
  return (
  <div>
    <Topbar />
    <div className="container">
      <Sidebar />
      <Home />
    </div>
  </div>
  );
}

export default App;