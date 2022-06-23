import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Footer from "./components/Footer";
import data from "./data";

export default function App() {

  const cards = data.map(item => {
    return (
      <div key={item.id}>
        <Card 
          {...item} />
        <hr/>
      </div>
  )});

  return (
    <div className="container">
      <div className="content">
        <Navbar />
        <main>
          {cards}
        </main>
      </div>
      <Footer />
    </div>
  )
}