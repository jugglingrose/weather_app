import React from 'react';

class Hourly extends React.Component {
  render() {
    const { hourly_weather, isLoaded } = this.props;
    var hours = hourly_weather.list;

    if (isLoaded === false){
      return(
        <div>Please enter a city in the search bar above</div>
      )
    }
    else {
      return(
        <div>Hourly
          { 
            hours.map( (hour) => 
            <div>
              <h2>{hour.main.temp}</h2>
              <h3>{hour.dt_txt}</h3>     
            </div>
            )

          }
        </div>
      )
    }
  }
}

export default Hourly;