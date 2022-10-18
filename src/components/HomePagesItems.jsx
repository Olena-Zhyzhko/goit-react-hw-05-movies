import React from 'react'
import { Link, useLocation  } from "react-router-dom";


export default function HomePagesItems({ films }) {
        const location = useLocation();

  return (
      <>
            {films.map(({ id, title }) => (
                <li key={id} className="ImageGalleryItem">
                    <Link to={`/movies/${id}`} state={{ from: location }}>{title}</Link >
                </li>
            ))}
        </>  )
}

// const Products = () => {
//   const location = useLocation();

//   return (
//     <Link to="/product/h-1" state={{ from: location }}>
//       Navigate to product h-1
//     </Link>
//   );
// };