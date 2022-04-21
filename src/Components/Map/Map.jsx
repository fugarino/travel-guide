import React from "react";
import GoogleMapReact from "google-map-react";

function Map() {
  const defaultMap = {
    center: {
      lat: 0,
      lng: 0,
    },
    zoom: 14,
  };

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCJaonfdiUDXt5iKpFpYGaQYViW_1xnusA" }}
        defaultCenter={defaultMap.center}
        defaultZoom={defaultMap.zoom}
      ></GoogleMapReact>
    </div>
  );
}

export default Map;
