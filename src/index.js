import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { EmailContext, EmailProvider } from "./contexts/EmailContext";

export { EmailContext };

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <EmailProvider>
        <App />
      </EmailProvider>
    </Router>
  </StrictMode>
);
