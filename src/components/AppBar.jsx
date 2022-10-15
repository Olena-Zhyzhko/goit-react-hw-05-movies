import React from 'react'
import { Outlet, NavLink  } from "react-router-dom";


export default function AppBar() {
  return (
    <>
          <header>
            <nav>
            <NavLink  to="/">Home</NavLink >
            <NavLink  to="/movies">Movies</NavLink >
            </nav>
        </header>
        <Outlet />
    </>
  )
}
