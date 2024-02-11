import React from "react";

function Layout({ children }) {
  return (
    <div className="p-2 sm:p-5 max-w-[500px]  grid place-items-center mx-auto h-full text-white">
      {children}
    </div>
  );
}

export default Layout;
