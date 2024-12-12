// "use strit";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// these are two import syntax
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
function App() {
  return (
    <div className="container">
      <h1>Welcome Dear Customer</h1>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  return (
    <header className="header">
      <h1>Fast react Pizza Co.</h1>
    </header>
  );
}
function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <div>
        <ul className="pizzas">
          {pizzaData.map((pizzaData) => (
            <Pizza pizzaObj={pizzaData} key={pizzaData.name} />
          ))}
        </ul>
      </div>
    </main>
  );
}
function Pizza(props) {
  return (
    <div className="pizza">
      <img
        className="pizzamain"
        src={props.pizzaObj.photoName}
        alt={props.pizzaObj.name}
      />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price + 3}</span>
        <span>{props.pizzaObj.soldOut ? "SoldOut" : ""}</span>
      </div>
    </div>
  );
}
function Footer() {
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
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React.render(<App />);
