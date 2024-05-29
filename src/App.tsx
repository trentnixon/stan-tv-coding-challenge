import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import { DataProvider } from "./contexts/DataContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import AppRoutes from "./routes/AppRoutes";

const App: React.FC = () => (
  <ThemeProvider>
    <DataProvider>
      <Router>
        <AppRoutes />
      </Router>
    </DataProvider>
  </ThemeProvider>
);

export default App;
