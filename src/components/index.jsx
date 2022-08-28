import React from 'react';
import Home from './home';
import Navigation from './router';
import { Routes, Route } from 'react-router-dom';

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

const index = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default index;
