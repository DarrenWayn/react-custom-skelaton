import React from "react";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
      shop: "Shop Now",
    },
    {
      id: 2,
      title: "Jackets",
      shop: "Shop Now",
    },
    {
      id: 3,
      title: "Sneakers",
      shop: "Shop Now",
    },
    {
      id: 4,
      title: "Womens",
      shop: "Shop Now",
    },

    {
      id: 5,
      title: "Mens",
      shop: "Shop Now",
    },
  ];
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return (
          <div className="category-container" key={category.id}>
            {/* <img src="" /> */}
            <div className='background-image' />
            <div className="category-body-container">
              <h2>{category.title}</h2>
              <p>{category.shop}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
