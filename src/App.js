import Home from "./pages/Home.jsx";
import { Routes, Route } from 'react-router-dom'
import Products from "./pages/Products.jsx";

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Home />} />
      <Route path={'/products'} element={<Products />} />
    </Routes>
  );
}

export default App;
