import { createContext, useContext, useState } from "react";

const ProductsContext = createContext({
  products: [],
});

export const useProducts = () => useContext(ProductsContext);

export const ProductsProvider = ({ children }) => {
  const [productsList, setProductsList] = useState([
    {
      id: "p1",
      title: "Red Scarf",
      description: "A pretty red scarf.",
      isFavorite: false,
    },
    {
      id: "p2",
      title: "Blue T-Shirt",
      description: "A pretty blue t-shirt.",
      isFavorite: false,
    },
    {
      id: "p3",
      title: "Green Trousers",
      description: "A pair of lightly green trousers.",
      isFavorite: false,
    },
    {
      id: "p4",
      title: "Orange Hat",
      description: "Street style! An orange hat.",
      isFavorite: false,
    },
  ]);
  return (
    <ProductsContext.Provider value={{ products: productsList }}>
      {children}
    </ProductsContext.Provider>
  );
};
