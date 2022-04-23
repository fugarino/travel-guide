import React from "react";

function Card(props) {
  return (
    <div className="card">
      <h1>{props.place.name}</h1>
    </div>
  );
}

export default Card;
