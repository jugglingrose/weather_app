import React from 'react';


class CurrentWeather extends React.Component {

  render(){
    var { weatherDescription, isLoaded, cur_weather, city, /*error*/ weatherIcon} = this.props;
  
    if(isLoaded === false){
      return (
        <div className="Instruction">Enter your city in the Search bar to see your local weather forecast</div>
      )
    }

    else{
      
    console.log('weatherIcon' + weatherIcon);
    var rainbow = require(`../images/${weatherIcon}.png`);

      return(
        <div className="weatherDetailsBox">
          <h1>{city.toUpperCase()}</h1>
            <h2>{Math.round(cur_weather.main.temp)}</h2>
            <h3>{weatherDescription}</h3>
            <h4>High {Math.round(cur_weather.main.temp_max)} / Low {Math.round(cur_weather.main.temp_min)} </h4>
            <img src={rainbow} alt="weather icon" width='150' height='150'></img>
      </div>
      )
    }  
  }
}; 

export default CurrentWeather;