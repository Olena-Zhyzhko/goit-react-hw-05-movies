import { Routes, Route } from "react-router-dom";
import HomePage from "pages/HomePage/HomePage";
import Movies from "pages/Movies/Movies";
import { SharedLayout } from 'components/SharedLayout'
import MovieIdDetails from 'pages/MovieIdDetails/MovieIdDetails'
import Cast from 'components/Cast'
import Reviews from 'components/Reviews'
// import Products from "path/to/pages/Products";

export const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<Movies />} />
            {/* <Route index element={<div></div>} /> */}

            <Route path="/movies/:movieId" element={<MovieIdDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          {/* </Route> */}
        </Route>
      </Routes>
    </div>
  );
};

