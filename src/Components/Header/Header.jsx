import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="header">
      <h2>Travel Guide</h2>
      <div className="search-div">
        <h3>Explore new places</h3>
        {/* <Autocomplete> */}
        <div className="search">
          <FontAwesomeIcon icon={faSearch} className="icon" />
          <input type="text" placeholder="Search..."></input>
        </div>
        {/* </Autocomplete> */}
      </div>
    </div>
  );
}

export default Header;
