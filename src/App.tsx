import React from "react";
import { GlobalStyles } from "./globalStyles";
import DashboardPage from "./pages/dashboard/DashboardPage";

function App() {
  return (
    <div className="app-container">
      <GlobalStyles />
      <DashboardPage />
    </div>
  );
}

export default App;
