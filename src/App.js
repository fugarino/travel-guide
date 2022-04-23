import React, { useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import List from "./Components/List/List";
import Map from "./Components/Map/Map";
import "./styles.scss";

import { getPlacesData } from './api';

function App() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    getPlacesData()
      .then((data) => {
        console.log(data);
        setPlaces(data);
      })
  }, []);

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
