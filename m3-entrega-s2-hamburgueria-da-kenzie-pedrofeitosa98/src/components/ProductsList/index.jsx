import Product from "../Product";
import ListContainer from "./style";

function ProductsList({ products, addToCart }) {
  return (
    <>
      <ListContainer>
        {products.map((product, index) => (
          <Product
            key={index}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </ListContainer>
    </>
  );
}

export default ProductsList;
