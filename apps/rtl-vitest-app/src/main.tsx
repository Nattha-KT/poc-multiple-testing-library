import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

async function enableMocking() {
  if (import.meta.env.MODE !== "development") {
    return;
  }
  if (import.meta.env.SSR) {
    const { server } = await import("./__mocks__/node");
    server.listen();
  } else {
    const { worker } = await import("./__mocks__/browser");
    worker.start();
  }
}
enableMocking().then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});
