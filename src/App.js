import React from "react";
import "./styles.css";
import Header from "./components/Header";
import Middle from "./components/Middle";
import Card from "./components/Card";

export default function App() {
  return (
    <div className="App container">
      <Header />
      <Middle />
      <Card />
    </div>
  );
}
