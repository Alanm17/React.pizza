import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { Header, Menu, Footer } from "./index.tsx";

export function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

