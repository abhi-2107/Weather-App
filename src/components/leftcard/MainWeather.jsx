import React from "react";
import sunIcon from "../../assets/icons/animated/day.svg";
import moonIcon from "../../assets/icons/animated/night.svg";
import rainIcon from "../../assets/icons/animated/rain.svg";
import humidityIcon from "../../assets/icons/animated/humidity.svg";
import windIcon from "../../assets/icons/animated/windsock.svg";
import maxIcon from "../../assets/icons/animated/maxtemp.svg";
import minIcon from "../../assets/icons/animated/mintemp.svg";
import compassIcon from "../../assets/icons/animated/compass.svg";


function MainWeather({
  isDay,
  Tcurr = 23,
  Tappr,
  Tmax,
  Tmin,
  humidity,
  rain,
  windSpeed,
  windDir,
  location,
  children,
}) {
  console.log(isDay);
  return (
    <div className={`flex flex-col   rounded-md `}>
      {children}
      <div className="text-center">
        <img
          src={isDay ? sunIcon : moonIcon}
          alt="weather icon"
          className="w-36 h-auto mx-auto my-6 "
        />
        <p className="text-6xl font-extrabold tracking-wider mb-4">
          {Tcurr}
          &deg;C
        </p>
        <p className=" mb-7 text-xl ">
          <span className={`px-2 py-1 font-semibold  rounded-md bg-opacity-55 ${isDay ? "bg-blue-600 text-yellow-400" :"bg-slate-500 text-sky-300"} shadow-xl`}>
            {location}
          </span>{" "}
          <span className="text-lg">
            Feels like {Tappr}
            &deg;C
          </span>
        </p>
        </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 mx-3 gap-x-1 gap-y-3  font-bold text-center">
        <div
          className={`  bg-opacity-55  border-x py-2  rounded-xl ${
            isDay ? "bg-blue-600" : "bg-gray-500"
          }`}
        >
          <img src={rainIcon} alt="rainIcon" className="w-11 inline-block" />
          <span className="ms-3">{rain} mm</span>
          <p className="m-0 text-sm">Rain</p>
        </div>
        <div
          className={`  bg-opacity-55  border-x  rounded-xl py-2 ${
            isDay ? "bg-blue-600" : "bg-gray-500"
          }`}
        >
          <img src={windIcon} alt="rainIcon" className="w-8 inline-block" />
          <span className="ms-3">{windSpeed}km/h </span>
          <p className="m-0 text-sm">Wind Speed</p>
        </div>
        <div
          className={`  bg-opacity-55  border-x  rounded-xl py-2 ${
            isDay ? "bg-blue-600" : "bg-gray-500"
          }`}
        >
          <img
            src={humidityIcon}
            alt="humidityIcon"
            className="w-6 inline-block "
          />
          <span className="ms-3">{humidity}% </span>
          <p className="m-0 text-sm">Humidity</p>
        </div>

        <div
          className={`  bg-opacity-55  border-x  rounded-xl py-2 ${
            isDay ? "bg-blue-600" : "bg-gray-500"
          }`}
        >
          <img src={maxIcon} alt="maxtempIcon" className="w-6 inline-block " />
          <span className="ms-3">{Tmax}&deg;C </span>
          <p className="m-0 text-sm">Max Temp.</p>
        </div>
        <div
          className={`  bg-opacity-55  border-x  rounded-xl py-2 ${
            isDay ? "bg-blue-600" : "bg-gray-500"
          }`}
        >
          <img
            src={compassIcon}
            alt="humidityIcon"
            className="w-8 inline-block "
          />
          <span className="ms-3">{windDir}&deg;N</span>
          <p className="m-0 text-sm">Wind Direction</p>
        </div>
        <div
          className={`  bg-opacity-55  border-x  rounded-xl py-2 ${
            isDay ? "bg-blue-600" : "bg-gray-500"
          }`}
        >
          <img
            src={minIcon}
            alt="minimum tempIcon"
            className="w-6 inline-block "
          />
          <span className="ms-3">{Tmin}&deg;C </span>
          <p className="m-0 text-sm">Min Temp.</p>
        </div>
      </div>
    </div>
  );
}

export default MainWeather;
