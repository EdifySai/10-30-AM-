
import { combineReducers } from 'redux';
import Weather from './Weather';


const rootReducer = combineReducers(
    {
        weatherData: Weather
    }
)
export default rootReducer;