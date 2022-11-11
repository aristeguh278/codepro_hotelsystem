import { createRoot } from "react-dom/client";
import App from "./App";
import ContextProvider from "./context/ContextProvider";

createRoot(document.querySelector("#root")).render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
