import React from 'react';
import axios from 'axios';
import { useEffect, useState } from "react";
import {
    useParams
} from "react-router-dom";
import { useHistory } from "react-router-dom";
import Search from './Search';
import './Weather.scss'
import WeatherByLocation from './WeatherByLocation';
export default function Weather() {
    const [title, setTitle] = useState("");

    useEffect(async () => {
        console.log(">>> run use effect")
        let response = await axios({
            method: 'post',
            url: "http://localhost:8080/get-data-by-url",
            data: { url: `https://www.metaweather.com/api/location/1236594/` },
        });
        setTimeout(() => {
            setTitle(response.data.title)
        }, 0)
    }, []);
    console.log(">>> run render")

    return (
        <div className='weather-app-container'>
            <Search />
            <hr />

            <WeatherByLocation
                woeidFromParent={
                    "1236594"}
            />
            <hr />
            <WeatherByLocation
                woeidFromParent={"1252431"} />
        </div>
    )
}
