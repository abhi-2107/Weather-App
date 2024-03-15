import { useEffect, useState } from "react";
import "./App.css";
import MainWeather from "./components/leftcard/MainWeather";
import getWeather from "./api/getWeatherAxios";
import getCurrentLocation from "./utils/getLocation";
import Layout from "./layout/Layout";
import loadingIcon from "./assets/icons/animated/solar-eclipse.svg";
import { locations } from "./api/locations";
import Select from "react-select";
import vdDay from "./assets/videos/bg_day.mp4";
import vdNight from "./assets/videos/bg_night.mp4";

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

  console.log(currenLocation, weatherInfo);
  return (
    <>
      {weatherInfoLoaded ? (
        <div className="h-screen bg-cover ">
          <video
            className="fixed w-full h-full object-cover -z-10"
            muted
            loop
            autoPlay
          >
            <source
              // src={weatherInfo.current.is_day ? vdDay : vdNight}
              src={1 ? vdDay : vdNight}
              type="video/mp4"
            />
          </video>

          <Layout>
            <div>
              <MainWeather
                location={city === null ? "Current Location" : city.label}
                // isDay={weatherInfo.current.is_day}
                isDay={1}
                Tcurr={weatherInfo.current.temperature_2m}
                Tmax={weatherInfo.daily.temperature_2m_max[0]}
                Tmin={weatherInfo.daily.temperature_2m_min[0]}
                Tappr={weatherInfo.current.apparent_temperature}
                humidity={weatherInfo.current.relative_humidity_2m}
                rain={weatherInfo.current.rain}
                windSpeed={weatherInfo.current.wind_speed_10m}
                windDir={weatherInfo.current.wind_direction_10m}
              >
                <Select
                  options={options}
                  className="text-black "
                  value={city}
                  placeholder="Select City..."
                  onChange={(city) => {
                    setCity(city);
                    setCurrenLocation(city);
                    getWeather(city.latitude, city.longitude).then(
                      (axiosResponse) => setWeatherInfo(axiosResponse.data)
                    );
                    console.log(city);
                  }}
                />
              </MainWeather>
            </div>
          </Layout>
        </div>
      ) : (
        <div
          className="h-screen bg-cover  bg-gradient-to-tr 
              from-blue-500 to-slate-950"
        >
          <div className="flex flex-col justify-center items-center h-screen ">
            {" "}
            <img
              src={loadingIcon}
              alt="day-icon-loading"
              className="w-80 h-auto block mb-10"
            />
            <p className="text-2xl sm:text-2xl px-5 text-slate-200 text-center">
              Please turn on the location and refresh the page if this page
              persist !
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
