import { Routes, Route } from "react-router-dom";

import "./styles.css";
import { Header } from "./component/Header";
import { LandingPage } from "./pages/LandingPage";
import { Inbox } from "./pages/Inbox";
import { Sent } from "./pages/Sent";
import { EmailPage } from "./pages/EmailPage";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/emailpage/:itemId" element={<EmailPage />} />
        <Route path="/sent" element={<Sent />} />
      </Routes>
    </div>
  );
}
