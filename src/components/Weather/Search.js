import React, { useState } from 'react'
import axios from 'axios';
import _ from "lodash"
import { useHistory } from "react-router-dom"
import { useEffect } from 'react';
function Search() {
    const [keyword, setKeyword] = useState("");
    const [locationArr, setlocationArr] = useState([]);
    const [isLoadingData, setIsLoadingData] = useState(false);
    const [isFocusInput, setIsFocusInput] = useState(false);

    const handleSearchbtn = async () => {
        setIsLoadingData(true);
        setlocationArr([]);
        let response = await axios({
            method: 'post',
            url: "http://localhost:8080/get-data-by-url",
            data: { url: `https://www.metaweather.com/api/location/search/?query=${keyword}` },
        });
        if (response && response.data) {
            if (keyword.length === 0) {
                alert("do not break space")
            } else {
                let result = response.data;
                let _locationArr = [];
                if (!_.isEmpty(result)) {
                    //lay tung phan tu
                    for (let key in result) {
                        console.log(">>> KEY: ", result[key])
                        _locationArr.push(result[key])
                    }
                    setlocationArr(_locationArr)
                } else {
                    alert("Data is Empty")
                    setlocationArr([]);
                }
            }
            setIsLoadingData(false);
            setIsFocusInput(false);
        }
    }
    let history = useHistory();
    const handleViewDetail = (woeid) => {
        history.push(`/weather/detail/${woeid}`)
    }
    return (
        <div className='search-weather-container'>
            <div className='search-inputs'>
                <input
                    type='text'
                    placeholder='Search Your Location...'
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    onFocus={() => setIsFocusInput(true)}
                />
                <button onClick={handleSearchbtn}>Search</button>
            </div>
            {isLoadingData === true
                &&
                <div
                    style={{ padding: '15px' }}
                >Loading Data...</div>
            }
            <div className='results-container'>
                {
                    locationArr && locationArr.length > 0 &&
                    locationArr.map((item, index) => {
                        return (
                            <div className='results-child' key={`location-${index}`}>
                                <div className='title'>Title: {item.title}</div>
                                <div className='type'>Type: {item.location_type}</div>
                                <div className='woeid'><span
                                    onClick={() => handleViewDetail(item.woeid)}
                                    title="click to view detail"
                                    style={{ cursor: 'pointer' }}
                                ><b>Woeid:---- {item.woeid}----</b></span></div>
                                <div className='latt_long'>Location: {item.latt_long}</div>
                            </div>
                        )
                    })
                }
                {
                    !isFocusInput && keyword && locationArr && locationArr.length === 0 &&
                    < div >
                        Not found data with keyword = {keyword}
                    </div>
                }
            </div>
        </div >
    )
}
export default Search