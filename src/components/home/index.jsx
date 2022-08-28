import React from 'react';
import { Outlet } from 'react-router-dom';
import categories from './data.jsx';

const Home = () => {
  return (
    <>
      <Outlet />
      <div className="categories-container">
        {categories.map(({ title, id, imageUrl }) => (
          <div key={id} className="category-container">
            {/* <img src=""/> */}
            <div
              className="background-image"
              style={{
                backgroundImage: `url(${imageUrl})`,
              }}
            />
            <div className="category-body-container">
              <h2>{title}</h2>
              <p>Shop Now</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
