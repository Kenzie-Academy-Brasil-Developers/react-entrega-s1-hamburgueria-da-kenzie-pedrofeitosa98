import { Card, CardImage, CardPrice, CardInfos } from "./style";

function Product({ product, addToCart }) {
  return (
    <>
      <Card>
        <CardImage>
          <img src={product.img} alt="" />
        </CardImage>
        <CardInfos>
          <h3 className="heading3">{product.name}</h3>
          <p className="caption">{product.category}</p>
          <CardPrice>R$ {product.price}</CardPrice>
          <button
            className="button medium green"
            onClick={() => addToCart(product)}
          >
            Adicionar
          </button>
        </CardInfos>
      </Card>
    </>
  );
}

export default Product;
