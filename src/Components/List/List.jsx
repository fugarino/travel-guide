import React, { useState } from "react";
import Card from "../Card/Card";

function List() {
  const [place, setPlace] = useState("restaurants");
  const [rating, setRating] = useState("");

  const places = [
    { name: "Cool Place" },
    { name: "Best Beer" },
    { name: "Best Steak" },
    { name: "Cool Place" },
    { name: "Best Beer" },
    { name: "Best Steak" },
    { name: "Cool Place" },
    { name: "Best Beer" },
    { name: "Best Steak" }
  ];

  return (
    <div className="list">
      <h1>Restaurants, Hotels & Attractions around you</h1>
      <div className="select-div">
        <select value={place} onChange={(e) => setPlace(e.target.value)} className="places-select">
          <option value="restaurants">Restaurants</option>
          <option value="hotels">Hotels</option>
          <option value="attractions">Attractions</option>
        </select>
        <select value={rating} onChange={(e) => setRating(e.target.value)} className="ratings-select">
          <option value={0}>All</option>
          <option value={3}>Above 3.0</option>
          <option value={4}>Above 4.0</option>
          <option value={4.5}>Above 4.5</option>
        </select>
      </div>
      <div className="list-cards">
        {places?.map((place, i) => (
          <Card place={place} key={i}/>
        ))}
      </div>
    </div>
  );
}

export default List;
