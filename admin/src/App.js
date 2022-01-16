import Topbar from "../src/components/topbar/Topbar";
import Sidebar from "../src/components/sidebar/Sidebar";
import "./app.css";


function App() {
  return (
  <div>
    <Topbar />
    <div className="container">
      <Sidebar />
      <div className="others">other pages</div>
    </div>
  </div>
  );
}

export default App;