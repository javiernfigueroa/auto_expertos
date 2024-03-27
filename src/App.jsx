import Sidebar from "./components/sidebar/Sidebar";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="container">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="content">
          <AppRoutes />
        </div>
      </div>
    </Router>
  );
}

export default App;
