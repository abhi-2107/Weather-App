import React from "react";

function MainWeather({
  Tcurr = 23,
  Tappr,
  Tmax,
  Tmin,
  humidity,
  rain,
  windSpeed,
  windDir,
}) {
  return (
    <div className="flex p-4 flex-col bg-sky-600 bg-opacity-30 rounded-md">
      <div>
        <label htmlFor="search-city"></label>
        <input
          type="text"
          id="htmlFor"
          placeholder="Search City..."
          className=" block w-full bg-slate-200 rounded-2xl ps-3"
        />
      </div>
      <div className="text-center">
        <p className=" mx-3 text-4xl font-bold mt-5 ">Jaipur</p>
        <p className="text-8xl mt-10">
          {Tcurr}
          <sup className="font-light">&deg;C</sup>
        </p>
        <p className="text-lg font-medium">Mainly clear</p>
        <p>
          <span className="text-lg">&uarr; {Tmax}&deg;C</span>&nbsp;&nbsp;
          <span className="text-lg">&darr; {Tmin}&deg;C</span>
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6  m-2 text-center">
        <div className="p-3 bg-sky-300 bg-opacity-35 rounded">
          <p>
            {" "}
            <span className="text-gray-200">feels like</span> <br /> {Tappr}&deg;C
          </p>
        </div>
        <div className="p-3 bg-sky-300 bg-opacity-35 rounded">
          <p>
            {" "}
            <span className="text-gray-200">Humidity</span> <br /> {humidity}
          </p>
        </div>
        <div className="p-3 bg-sky-300 bg-opacity-35 rounded">
          <p>
            {" "}
            <span className="text-gray-200">rain</span> <br /> {rain}mm
          </p>
        </div>
        <div className="p-3 bg-sky-300 bg-opacity-35 rounded">
          <p>
            {" "}
            <span className="text-gray-200">wind speed | direction</span> <br />
            {windSpeed}km/h | {windDir}&deg; N
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainWeather;
