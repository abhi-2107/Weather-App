import { useEffect, useState } from "react";
import "./App.css";
import MainWeather from "./components/leftcard/MainWeather";
import getWeather from "./api/getWeatherAxios";
import getCurrentLocation from "./utils/getLocation";
import Layout from "./layout/Layout";
import dayIcon from "./assets/icons/animated/day.svg";
import { locations } from "./api/locations";
import Select from "react-select";
const options = locations.map((city) => ({
  value: city.id,
  label: city.capital,
  longitude: city.longitude,
  latitude: city.latitude,
}));
console.log(options);

function App() {
  const [currenLocation, setCurrenLocation] = useState({
    latitude: 20,
    longitude: 30,
  });
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [weatherInfoLoaded, setWeatherInfoLoaded] = useState(false);
  const [city, setCity] = useState(null);
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
  // function handleLocation(searchLocation) {
  //   setCurrenLocation(searchLocation);
  //   getWeather(searchLocation.latitude, searchLocation.longitude).then(
  //     (axiosResponse) => setWeatherInfo(axiosResponse.data)
  //   );
  // }
  console.log(currenLocation, weatherInfo);
  return (
    <div className="h-screen bg-cover  bg-gradient-to-tr from-sky-600 to-sky-400">
      {weatherInfoLoaded ? (
        <Layout>
          <div>
            <Select
              options={options}
              className="text-black"
              value={city}
              onChange={(city) => {
                setCity(city);
                setCurrenLocation(city);
                getWeather(city.latitude, city.longitude).then(
                  (axiosResponse) => setWeatherInfo(axiosResponse.data)
                );
                console.log(city);
              }}
            />
            <MainWeather
              location={city === null ? "Current location" : city.label}
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
