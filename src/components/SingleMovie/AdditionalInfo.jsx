import React, { Suspense } from 'react'
import { Link, Outlet, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';


export default function AdditionalInfo({ id }) {
      const location = useLocation();

  return (
      <div>
            <p>Additional information</p>
            <ul>
              <li>
                  <Link to={'cast'} id={id} state={{ from: location.state?.from }}>Cast</Link >
              </li>
              <li>
                  <Link to={'reviews'} id={id} state={{ from: location.state?.from }}>Reviews</Link >
              </li>
            </ul>
            <Suspense fallback={null}>
              <Outlet />
            </Suspense>
      </div>
  )
}

AdditionalInfo.propTypes = {
        id: PropTypes.string.isRequired, 
}