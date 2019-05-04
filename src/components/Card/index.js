import React from 'react';

const Card = ({imageSrc,data}) => {
	console.log(data);
  return (
   
      <div className="col s3 m3">
        <div className="card">
          <div className="card-image" style={{padding: 10}}>
            <img src={imageSrc} alt="weather" />
            {/* <span className="card-title">Card Title</span> */}
          </div>
          <div className="card-content">
            <p>
							Max Temp: {data.max_temp}<br />
							Min Temp: {data.min_temp}<br />
							Description: {data.weather_state_name}
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
