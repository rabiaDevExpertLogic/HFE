import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import AppRoutes from "./routes/routes";
import AppLayout from "./layout/layout";

function App() {
  return (
    <>
    <Router>
      <AppLayout>
        <AppRoutes />
      </AppLayout>
      </Router>
    </>
  );
}

export default App;
