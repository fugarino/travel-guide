import React from "react";
import GoogleMapReact from "google-map-react";

function Map({ setCoordinates, setBounds, coordinates }) {
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCJaonfdiUDXt5iKpFpYGaQYViW_1xnusA" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        onChange={(e) => {
          console.log(e);
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw});
        }}
      ></GoogleMapReact>
    </div>
  );
}

export default Map;
