import { Routes, Route } from 'react-router-dom';
import Home from './home';
import Router from './router';
import Authentication from './authentication';

const Shop = () => {
  return <h1>This is a shop page</h1>;
};

const index = () => {
  return (
    <Routes>
      <Route path="/" element={<Router />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="authentication" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default index;
