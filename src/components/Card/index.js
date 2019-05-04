import React from 'react';

const Card = ({ imageSrc, data }) => {
  return (
    <div className="col s12 m4">
      <div className="card">
        <div className="card-image" style={{ padding: 20 }}>
          <img src={imageSrc} className="responsive-img" alt="weather" />
        </div>
        <div className="card-content">
          <p>
            Description: {data.weather_state_name}
            <br />
            Max Temp: {data.max_temp && data.max_temp.toFixed(2)}
            <br />
            Min Temp: {data.max_temp && data.min_temp.toFixed(2)}
          </p>
        </div>
        <div className="card-action">
          <span>Date Applicable: {data.applicable_date}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
