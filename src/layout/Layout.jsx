import React from 'react'

function Layout({children}) {
  return (
    <div className="p-10 grid sm:grid-cols-3 gap-4  bg-gray-400 bg-opacity-0 rounded-md  h-full">
    {children}
  </div>
  )
}

export default Layout