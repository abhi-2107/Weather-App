import React from "react";

function Header() {
  return (
    <div className="flex p-4 flex-col ">
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
          17<sup className="font-light">&deg;C</sup>
        </p>
        <p className="text-lg font-medium">Mainly clear</p>
        <p>
          <span className="text-lg">&uarr; 21&deg;C</span>&nbsp;&nbsp;
          <span className="text-lg">&darr; 10&deg;C</span>
        </p>
      </div>
      <div className="grid grid-cols-2 border m-2 text-center">
        <div>item1</div>
        <div>item2</div>
        <div>item3</div>
        <div>item4</div>
      </div>
    </div>
  );
}

export default Header;
