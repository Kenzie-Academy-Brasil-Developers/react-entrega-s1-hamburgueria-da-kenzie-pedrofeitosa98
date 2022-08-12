import Product from "../Product";
import ListContainer from "./style";

function ProductsList({ products, addToCart }) {
  return (
    <>
      <ListContainer>
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </ListContainer>
    </>
  );
}

export default ProductsList;
