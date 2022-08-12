import Product from "../Product";
import ListContainer from "./style";

function ProductsList({ products, addToCard }) {
  return (
    <>
      <ListContainer>
        {products.map((product) => (
          <Product key={product.id} product={product} addToCard={addToCard} />
        ))}
      </ListContainer>
    </>
  );
}

export default ProductsList;
