import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "pages/HomePage/HomePage";
// import Movies from "pages/Movies/Movies";
import { SharedLayout } from 'components/SharedLayout/SharedLayout'
// import MovieIdDetails from 'pages/MovieIdDetails/MovieIdDetails'
// import Cast from 'components/Cast'
// import Reviews from 'components/Reviews'

const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieIdDetails = lazy(() => import('../pages/MovieIdDetails/MovieIdDetails'));
const Cast = lazy(() => import('./SingleMovie/Cast'));
const Reviews = lazy(() => import('./SingleMovie/Reviews'));


export const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieIdDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
        </Route>
      </Routes>
    </div>
  );
};

