import React from "react";
import Header from "./Components/Header/Header";
import List from "./Components/List/List";
import Map from "./Components/Map/Map";
import "./styles.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <section className="layout">
        <List />
        <Map />
      </section>
    </div>
  );
}

export default App;
