import React from 'react';

const Weather = (props) => (
  <div className="main-content">
    <h2>{props.title}</h2>
    <p>This will show the weather for specific city</p>
  </div>
);

export default Weather;