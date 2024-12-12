import React from "react";
import { PizzaType } from "./types.ts"; // Import TypeScript types
import { pizzaData } from "./data.ts"; // Import Pizza data
import "./index.css"; // Importing styles

// Header Component
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
  const openHours = 12;
  const closedHours = 24;
  const isOpen = hour >= openHours && hour <= closedHours;

  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>
            We're open until {closedHours}:00. Come visit us or order online!
          </p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  );
}

// Pizza Component
type PizzaProps = {
  pizzaObj: PizzaType;
};

export function Pizza({ pizzaObj }: PizzaProps) {
  return (
    <div className="pizza">
      <img className="pizza-img" src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span className="price">${pizzaObj.price}</span>
        {pizzaObj.soldOut && <span className="sold-out">Sold Out</span>}
      </div>
    </div>
  );
}

// Menu Component
export function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </ul>
    </main>
  );
}
