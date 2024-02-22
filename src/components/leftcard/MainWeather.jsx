import React from "react";

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
    <div className={`flex p-2 flex-col  border  rounded-md `}>
      {children}
      <div className="text-center">
        <p className=" mx-3 text-4xl font-bold mt-5 ">{location}</p>
        <p className="text-7xl mt-10 mb-5">
          {Tcurr}
          <sup className="font-light">&deg;C</sup>
        </p>
        <p className="text-lg font-medium">Mainly clear</p>
        <p>
          <span className="text-lg">&uarr; {Tmax}&deg;C</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className="text-lg">&darr; {Tmin}&deg;C</span>
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4   m-2 text-center">
        <div
          className={`p-3  bg-opacity-35 border  rounded-xl ${
            isDay ? "bg-sky-300" : ""
          }`}
        >
          <p>
            {" "}
            <span className="text-gray-200">Feels like</span> <br /> {Tappr}
            &deg;C
          </p>
        </div>
        <div
          className={`p-3  bg-opacity-35 rounded-xl border ${
            isDay ? "bg-sky-300" : ""
          }`}
        >
          <p>
            {" "}
            <span className="text-gray-200">Humidity</span> <br /> {humidity} %
          </p>
        </div>
        <div
          className={`p-3  bg-opacity-35 rounded-xl border ${
            isDay ? "bg-sky-300" : ""
          }`}
        >
          <p>
            {" "}
            <span className="text-gray-200">Rain</span> <br /> {rain} mm
          </p>
        </div>
        <div
          className={`p-3  bg-opacity-35 rounded-xl border ${
            isDay ? "bg-sky-300" : ""
          }`}
        >
          <p>
            {" "}
            <span className="text-gray-200">Wind speed | Direction</span> <br />
            {windSpeed}km/h | {windDir}&deg; N
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainWeather;
