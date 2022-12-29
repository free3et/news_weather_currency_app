import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Weather.module.scss";

export function WeatherPage() {
  const [dataWeather, setDataWeather] = useState({});
  const [dataForecast, setDataForecast] = useState({});
  const [location, setLocation] = useState("Київ");

  const weatherList = dataForecast.list ? dataForecast.list : [];

  const hour_quantity = 8;

  const Base_url = `https://api.openweathermap.org/data/2.5/`;
  const url_weather = `${Base_url}/weather?q=${location}&lang=ua&units=metric&appid=${
    import.meta.env.VITE_API_KEY_WEATHER
  }`;
  const url_forecast = `${Base_url}/forecast?q=${location}&units=metric&cnt=${hour_quantity}&appid=${
    import.meta.env.VITE_API_KEY_WEATHER
  }`;

  const unixToDate = (unixDate) => {
    return new Date(unixDate * 1000).toISOString().split("T")[1].slice(0, 5);
  };

  const handleKeyPressed = (e) => {
    if (e.key === "Enter") {
      searchLocation();
    }
  };

  const searchLocation = () => {
    axios.get(url_weather).then((response) => {
      setDataWeather(response.data);
    });
    axios.get(url_forecast).then((response) => {
      setDataForecast(response.data);
    });
  };

  useEffect(searchLocation, []);

  return (
    <div className={`${styles.weather} col-sm-7 col-lg-12 col-md-6 col-10 mx-auto`}>
      <div className={styles.weather__search}>
        <input
          className={styles.weather__input}
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          placeholder="Enter Location"
          type="text"
          onKeyPress={handleKeyPressed}
        />
      </div>

      <div className={styles.container}>
        <div>
          <div className={styles.location__top}>
            <div className={styles.location__header}>
              <p className={styles.location__header_title}>{dataWeather.name}</p>
            </div>
            <>
              <img
                className={styles.location__img}
                src={`https://openweathermap.org/img/wn/${
                  dataWeather.weather ? dataWeather.weather[0].icon : "01d"
                }@2x.png`}
              />
            </>
            <div className={styles.location__top_temp}>
              {dataWeather.main ? <p>{dataWeather.main.temp.toFixed()}°C</p> : null}
            </div>
          </div>
          <div className={styles.location__bot}>
            <div className={styles.location__bot_desc}>
              {dataWeather.main ? <p>{dataWeather.weather[0].description}</p> : null}
            </div>
            <div className={styles.location__bot_feels}>
              {dataWeather.main ? <p>{dataWeather.main.feels_like.toFixed()}°C</p> : null}
            </div>
            <div className={styles.location__bot_humidity}>
              {dataWeather.main ? <p>{dataWeather.main.humidity} %</p> : null}
            </div>
            <div className={styles.location__bot_speed}>
              {dataWeather.wind ? <p>{dataWeather.wind.speed.toFixed()} м/с</p> : null}
            </div>
            <div className={styles.location__bot_pressure}>
              {dataWeather.main ? <p>{dataWeather.main.pressure}</p> : null}
            </div>
          </div>
        </div>

        <div className={styles.location__wrapper}>
          <div className={styles.location}>
            {weatherList.map((item, index) => {
              return (
                <div key={index} className={styles.location__bottom}>
                  <div className={styles.location__bottom_date}>
                    <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`} />
                    <p>{unixToDate(item.dt)}</p>
                  </div>
                  <p className={styles.temp}>{item.main.feels_like.toFixed()}°C</p>
                  <p className={styles.humidity}>{item.main.humidity}%</p>
                  <p className={styles.speed}>{item.wind.speed.toFixed()} м/с</p>
                  <p className={styles.pressure}>{item.main.pressure}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
