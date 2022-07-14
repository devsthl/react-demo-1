import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import WeatherState from "./Child/WeatherState";
import "./Weather.scss"
import WeatherDay from "./Child/WeatherDay";
import _ from 'lodash';
import moment from "moment";

const WeatherByLocation = (props) => {
    let { woeid } = useParams();
    const [locationweather, setLocationweather] = useState({});
    useEffect(() => {
        getWeatherByLocation();
    }, []);

    const getWeatherByLocation = async () => {
        if (!woeid) {
            woeid = props.woeidFromParent
        }
        let response = await axios({
            method: 'post',
            url: "http://localhost:8080/get-data-by-url",
            data: { url: `https://www.metaweather.com/api/location/${woeid}/` },
        });
        if (response && response.data) {
            setLocationweather(response.data)
        }
    }
    const handleBack = () => {
        history.push(`/weather`)
    }
    let history = useHistory();
    return (
        <div className="w-b-l-container">
            {
                !woeid ? null :
                    <div className="back"
                        onClick={() => handleBack()}>
                        ---Back
                    </div>
            }
            <div className="list-weather-day">
                {/* consolidated_weather la 1 object chua tat ca thong tin weather  */}
                {!_.isEmpty(locationweather) && locationweather.consolidated_weather
                    && locationweather.consolidated_weather.length > 0
                    && locationweather.consolidated_weather.map((item, index) => {
                        return (
                            <div key={`weatherday-${index}`} className={`weather-day-${index}`}>
                                {index === 0 &&
                                    <div className="location-data">
                                        <div className="title">{locationweather.title}</div>
                                        <div className="time">{moment(locationweather.time).format("hh:mm:ss A")}</div>
                                    </div>
                                }
                                <WeatherDay
                                    dataWeather1={item}
                                    key={`weatherday-${index}`}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default WeatherByLocation;