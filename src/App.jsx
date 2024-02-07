import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import getWeather from "./api/getWeatherAxios";
import getCurrentLocation from "./utils/getLocation";
import Layout from "./layout/Layout";

function App() {
  const [currenLocation, setCurrenLocation] = useState({
    latitude: 20,
    longitude: 30,
  });
  const [weatherInfo, setWeatherInfo] = useState(null);

  useEffect(() => {
    getCurrentLocation()
      .then((location) => {
        setCurrenLocation(location);
        if (location) {
          getWeather(location.latitude, location.longitude).then((data) => {
            setWeatherInfo(data);
            console.log(data);
          });
        } else {
          console.error("location not available yet ");
        }
        return location;
      })

      .catch((error) => {
        console.error("error getting location", error.message);
      });
  }, []);
  return (
    <div className="h-screen bg-cover  bg-center bg-gradient-to-tr from-sky-600 to-sky-400">
      <Layout>
        <div className="border">
          <Header />
        </div>
        <div className="border sm:col-span-2">right section</div>
      </Layout>
    </div>
  );
}

export default App;
