// "use strit";
import React from "react";
import ReactDOM from "react-dom/client";
// these are two import syntax

function App() {
  return (
    <div>
      <h1>Hello Alan</h1>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React.render(<App />);
