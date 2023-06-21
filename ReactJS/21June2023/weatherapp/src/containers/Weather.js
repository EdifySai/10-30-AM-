import { getWeather } from '../action/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useState } from 'react';
function Weather(props) {
    const [coords, setCoords] = useState({
        lat: '',
        long: ''
    })

    const updateCoords = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        setCoords({ ...coords, [name]: value })
    }
    const fetchWeatherDetails = (event) => {
        event.preventDefault();
        props.getWeatherAction(coords.lat, coords.long);
    }
    return (
        <div>
            <form>
                <input onChange={updateCoords} type="text" name="lat" placeholder="enter latitude"></input>
                <input onChange={updateCoords} type="text" name="long" placeholder="enter longitude"></input>
                <button onClick={fetchWeatherDetails}>Fetch Weather</button>
            </form>
        </div>
    )
}
function mapDispatchToProps(dispatch) {
    return new bindActionCreators({ getWeatherAction: getWeather }, dispatch)
}
export default connect(null, mapDispatchToProps)(Weather);