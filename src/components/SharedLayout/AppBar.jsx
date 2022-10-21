import React, { Suspense } from 'react'
import { Outlet, NavLink } from "react-router-dom";
import './AppBar.css'

export default function AppBar() {
  return (
    <>
          <header className="Header">
            <nav>
            <NavLink className="NavLink" to="/" end>Home</NavLink >
            <NavLink className="NavLink" to="/movies">Movies</NavLink >
            </nav>
      </header>
      <Suspense fallback={null}>
          <Outlet />
      </Suspense>
    </>
  )
}
