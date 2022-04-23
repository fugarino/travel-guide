import React, { useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import List from "./Components/List/List";
import Map from "./Components/Map/Map";
import "./styles.scss";

import { getPlacesData } from './api';

function App() {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude })
    })
  }, []);

  useEffect(() => {
    getPlacesData()
      .then((data) => {
        setPlaces(data);
      })
  }, [coordinates, bounds]);

  return (
    <div className="app">
      <Header />
      <section className="layout">
        <List />
        <Map
          setCoordinates={setCoordinates}
          setBounds={setBounds}
          coordinates={coordinates}
        />
      </section>
    </div>
  );
}

export default App;
