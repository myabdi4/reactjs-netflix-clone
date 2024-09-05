import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./components/UserProvider.jsx";
// import { SpeedInsights } from "@vercel/speed-insights/next";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
        {/* <SpeedInsights />  not workign yet*/}
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
);
