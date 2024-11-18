import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Context_main from "./contexts/Context_main.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Context_main>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Context_main>
);
