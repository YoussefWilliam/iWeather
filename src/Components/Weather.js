import React from 'react';
import WeatherCards from './Cards';

const Weather = props =>( 

    <div>
        <p>  </p>
        
    {
        props.temprature &&
            <WeatherCards
                city={props.city}
                temprature={props.temprature}
                description={props.description}
                country={props.country}
                wind={props.wind}
                humidity={props.humidity}
            />
    }
       
    </div>

);
export default Weather;