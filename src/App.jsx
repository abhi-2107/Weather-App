import { useEffect, useState } from "react";
import "./App.css";
import MainWeather from "./components/leftcard/MainWeather";
import getWeather from "./api/getWeatherAxios";
import getCurrentLocation from "./utils/getLocation";
import Layout from "./layout/Layout";
import dayIcon from "./assets/icons/animated/day.svg";

function App() {
  const [currenLocation, setCurrenLocation] = useState({
    latitude: 20,
    longitude: 30,
  });
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [weatherInfoLoaded, setWeatherInfoLoaded] = useState(false);

  useEffect(() => {
    getCurrentLocation()
      .then((location) => {
        setCurrenLocation(location);
        if (location) {
          getWeather(location.latitude, location.longitude).then(
            (axiosResponse) => {
              setWeatherInfo(axiosResponse.data);
              setWeatherInfoLoaded(true);
              // console.log(data);
            }
          );
        } else {
          console.error("location not available yet ");
        }
        return location;
      })

      .catch((error) => {
        console.error("error getting location", error.message);
      });
  }, []);
  console.log(weatherInfo);
  return (
    <div className="h-screen bg-cover  bg-gradient-to-tr from-sky-600 to-sky-400">
      {weatherInfoLoaded ? (
        <Layout>
          <div className="">
            <MainWeather
              Tcurr={weatherInfo.current.temperature_2m}
              Tmax={weatherInfo.daily.temperature_2m_max[0]}
              Tmin={weatherInfo.daily.temperature_2m_min[0]}
              Tappr={weatherInfo.current.apparent_temperature}
              humidity={weatherInfo.current.relative_humidity_2m}
              rain={weatherInfo.current.rain}
              windSpeed={weatherInfo.current.wind_speed_10m}
              windDir={weatherInfo.current.wind_direction_10m}
            />
          </div>
          <div className="border sm:col-span-2">Coming Soon...</div>
        </Layout>
      ) : (
        <div className="flex flex-col justify-center items-center h-screen ">
          {" "}
          <img
            src={dayIcon}
            alt="day-icon-loading"
            className="w-52 h-auto block"
          />
          <p className="text-xl sm:text-2xl p-5 text-slate-200 text-center">
            Please turn on the location and refresh the page if this page
            persist !
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
