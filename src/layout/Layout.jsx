import React from "react";

function Layout({ children }) {
  return (
    <div className="font-mono   max-w-[430px]  p-2  mx-auto  text-white shadow-inner shadow-indigo-800 ">
      {children}
    </div>
  );
}

export default Layout;
