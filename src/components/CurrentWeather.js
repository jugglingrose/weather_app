import React from 'react';

class CurrentWeather extends React.Component {

  render(){
    var { weatherDescription, weatherIcon, isLoaded, cur_weather, city, backgroundImg} = this.props;

    if(isLoaded === false){
      return (
        <div>Enter your city in the Search bar to see your local weather forecast</div>
      )
    }

    else{
      return(
        <div>
          <img src={require(`../images/${backgroundImg}.png`)} alt='background_img' height="150" width="150"></img>
          <div>{city.toUpperCase()}</div>
          <img src={'http://openweathermap.org/img/w/' + weatherIcon + '.png'} alt="Smiley face" height="150" width="150"></img>
          <div>
            <h2>{Math.round(cur_weather.main.temp)}</h2>
            <h3>{weatherDescription}</h3>
            <h4>High {Math.round(cur_weather.main.temp_max)} / Low {Math.round(cur_weather.main.temp_min)} </h4>
        </div> 
      </div>
      )
    }  
  }
}; 

export default CurrentWeather;