import React from "react";
import mapIcon from "../images/map-icon.png";

export default function Card(props) {

  const { title, location, googleMapsUrl, imageUrl, startDate, endDate, description  } = props;  
  const bgImageStyle = {
    "backgroundImage": `url(${imageUrl})`
  }
  
  return (
    <div className="card">
      <div className="card-destination-pic" style={bgImageStyle}></div>
      <div className="card-text-content">
        <div className="card-location-block">
          <div className="card-country-info">
            <img className="card-map-icon" src={mapIcon} alt="map-icon" />
            <h4 className="card-location-text">{location.toUpperCase()}</h4>
          </div>
          <a className="card-location-link" href={googleMapsUrl}>View on Google Maps</a>
        </div>
        <h1 className="card-title">{title}</h1>
        <h3 className="card-dates">{startDate} - {endDate}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  )
}