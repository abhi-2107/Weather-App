import React from "react";

function Layout({ children }) {
  return (
    <div className="p-2 sm:p-5  grid sm:grid-cols-3 gap-4   h-full text-white">
      {children}
    </div>
  );
}

export default Layout;
