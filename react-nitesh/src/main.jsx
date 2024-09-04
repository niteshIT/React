import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { App } from "./App.jsx";
import "./index.css";
import { ToggleSwitch } from "./Components/ToggleSwitch.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <section className="container">
      {/* <App /> */}
      <ToggleSwitch></ToggleSwitch>
    </section>
  </StrictMode>
);
