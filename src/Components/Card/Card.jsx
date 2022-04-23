import React from "react";

function Card({place}) {
  return (
    <div className="card">
      <h1>{place.name}</h1>
    </div>
  );
}

export default Card;
