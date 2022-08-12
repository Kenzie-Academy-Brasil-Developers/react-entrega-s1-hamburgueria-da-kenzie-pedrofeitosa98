import GlobalStyle from "./styles/global";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";

function App() {
  const [products, setProducts] = useState([]);

  // const [filteredProducts, setFilteredProducts] = useState([]);

  const [currentSale, setCurrentSale] = useState([]);

  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => setProducts(response))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <ProductsList products={products} />
        <Cart currentSale={currentSale} cartTotal={cartTotal} />
      </main>
    </>
  );
}

export default App;
