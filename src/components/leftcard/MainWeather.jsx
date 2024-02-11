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
  location,
}) {
  // console.log(city);
  return (
    <div className="flex p-2 flex-col bg-sky-600 bg-opacity-30 rounded-md">
      {/* <button className="rounded p-3 m-3 bg-slate-500" onClick={()=> location({
    latitude: 20,
    longitude: 30,
  })}>change</button> */}
      {/* <form
        onSubmit={(e) => {
          e.preventDefault();
          onSearchSubmit();
        }}
      >
        <label htmlFor="search-city"></label>
        <input
          type="text"
          id="htmlFor"
          placeholder="Search City..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className=" block w-full bg-slate-200 rounded-2xl ps-3"
        />
      </form> */}

      <div className="text-center">
        <p className=" mx-3 text-4xl font-bold mt-5 ">{location}</p>
        <p className="text-8xl mt-10">
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
      <div className="grid grid-cols-2 gap-6  m-2 text-center">
        <div className="p-3 bg-sky-300 bg-opacity-35 rounded">
          <p>
            {" "}
            <span className="text-gray-200">Feels like</span> <br /> {Tappr}
            &deg;C
          </p>
        </div>
        <div className="p-3 bg-sky-300 bg-opacity-35 rounded">
          <p>
            {" "}
            <span className="text-gray-200">Humidity</span> <br /> {humidity}%
          </p>
        </div>
        <div className="p-3 bg-sky-300 bg-opacity-35 rounded">
          <p>
            {" "}
            <span className="text-gray-200">Rain</span> <br /> {rain}mm
          </p>
        </div>
        <div className="p-3 bg-sky-300 bg-opacity-35 rounded">
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
