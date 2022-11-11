import { createRoot } from "react-dom/client";
import App from "./App";
import ContextProvider from "./context/ContextProvider";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";
import "./index.css";

createRoot(document.querySelector("#root")).render(
  <ContextProvider>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ContextProvider>
);
