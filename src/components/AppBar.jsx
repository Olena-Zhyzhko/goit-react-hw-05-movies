import React from 'react'
import { Outlet, NavLink  } from "react-router-dom";


export default function AppBar() {
  return (
    <div>
          <header>
              headerdddddd
            {/* <nav> */}
            {/* <NavLink  to="/">Home</NavLink >
            <NavLink  to="/movies">Movies</NavLink > */}
            {/* </nav> */}
        </header>
        <Outlet />
    </div>
  )
}
