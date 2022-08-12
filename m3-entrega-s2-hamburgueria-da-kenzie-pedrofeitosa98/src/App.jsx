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

  function addToCart(product) {
    const newSale = {
      name: product.name,
      category: product.category,
      price: product.price,
      img: product.img,
    };
    setCurrentSale([...currentSale, newSale]);
  }

  function totalPrice(currentSale) {
    const totalValue = currentSale.reduce((accum, product) => {
      return product.price + accum;
    }, 0);
    setCartTotal(totalValue);
  }

  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <ProductsList products={products} addToCart={addToCart} />
        <Cart
          currentSale={currentSale}
          cartTotal={cartTotal}
          totalPrice={totalPrice}
        />
      </main>
    </>
  );
}

export default App;
