import React from 'react'
import { Link  } from "react-router-dom";


export default function HomePagesItems({ films}) {
  return (
      <>
            {films.map(({ id, title }) => (
                <li key={id} className="ImageGalleryItem">
                    <Link  to="/movie/:{id}">{title}</Link >

                    {/* <p>{title}</p> */}
                </li>
            ))}
        </>  )
}
