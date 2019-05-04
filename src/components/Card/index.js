import React from 'react';

const Card = ({imageSrc,data}) => {
	console.log(data);
  return (
   
      <div className="col s3 m3">
        <div className="card">
          <div className="card-image" style={{padding: 20}}>
            <img src={imageSrc}  className="responsive-img" alt="weather" />
          </div>
          <div className="card-content">
            <p>
							Description: {data.weather_state_name}<br />
							Max Temp: {data.max_temp}<br />
							Min Temp: {data.min_temp}
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
