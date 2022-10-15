import { Routes, Route } from "react-router-dom";
import HomePage from "pages/HomePage/HomePage";
// import Movies from "pages/Movies/Movies";
import { SharedLayout } from 'components/SharedLayout'
// import Products from "path/to/pages/Products";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          {/* <Route path="/movies" element={<div>Movies</div>}>Movies</Route> */}
        </Route>
      </Routes>
    </div>
  );
};

