import React from "react";

function Layout({ children }) {
  return (
    <div className="font-mono p-2 sm:p-5 max-w-[430px]  grid place-items-center mx-auto  text-white ">
      {children}
    </div>
  );
}

export default Layout;
