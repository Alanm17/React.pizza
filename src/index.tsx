import React from "react";
import ReactDOM from "react-dom/client";
import { PizzaType } from "./types"; // Import TypeScript types
import { pizzaData } from "./data"; // Import Pizza data
import "./index.css"; // Importing styles

// Header Component
export function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

// Footer Component
export function Footer() {
  const hour = new Date().getHours();
  const openHours = 11;
  const closedHours = 24;
  const isOpen = hour >= openHours && hour <= closedHours;

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>
            We're open until {closedHours}:00. Come visit us or order online!
          </p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>
          {" "}
          We are happy to welcome you between{openHours}:00{closedHours}:00
        </p>
      )}
    </footer>
  );
}

// Pizza Component
type pizzaProps = {
  pizzaObj: PizzaType;
};
//we can use if condtions for early returns if the condition does match ;
//ex:
export function Pizza({ pizzaObj }: pizzaProps) {
  if (pizzaObj.soldOut) return null; // null yozishni esdan chqarma mazgi bolmasa undefined qaytaradi return o'zi
  return (
    <div className="pizza">
      <img className="pizza-img" src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        {pizzaObj.soldOut ? (
          <span className="sold-out">Sold Out</span>
        ) : (
          <span className="price">${pizzaObj.price}</span>
        )}
      </div>
    </div>
  );
}

// Menu Component
export function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <h1 className="text-4xl text-blue-500">
        Tailwind CSS is working in React!
      </h1>

      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} />
        ))}
      </ul>
    </main>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
