import { Routes, Route } from "react-router-dom";
// import HomePage from "pages/HomePage/HomePage";
// import Movies from "pages/Movies/Movies";
// import { SharedLayout } from 'components/SharedLayout'
// import Products from "path/to/pages/Products";

export const App = () => {
  return (
    <div>
      <div>Перед роутом</div>
      <Routes>
        <Route path="/" element={<div> hallo</div>} />
        {/* <Route path="/" element={<div>Всередені роута</div>}> */}
          {/* <Route index element={<div>HomePage</div>}>Home</Route>
          <Route path="/movies" element={<div>Movies</div>}>Movies</Route> */}
        {/* </Route> */}
      </Routes>
    </div>
  );
};

