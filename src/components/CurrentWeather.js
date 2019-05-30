import React from 'react';

class CurrentWeather extends React.Component {
  constructor() {
    super();

    this.state={
      cur_weather: {},
      isLoaded: false,
    }
  }

  componentDidMount(){
    console.log('componentDidMount called');
    fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=imperial&&APPID=27aae5ebfd2aaddddcff5171637b34f3')
      .then( res => res.json())
      .then(json => {
        this.props.renderCode(json.cod);
        this.setState({
          isLoaded: true,
          cur_weather: json,
        })   
      });
  }


  render(){
    var { isLoaded, cur_weather } = this.state;
    var { weatherDescription, weatherIcon } = this.props;


    if(isLoaded === false){
      return <div>Weather is Loading...</div>
    }

    else{
      return(
        <div>
          <div>City</div>
          <div>Current Time</div>
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