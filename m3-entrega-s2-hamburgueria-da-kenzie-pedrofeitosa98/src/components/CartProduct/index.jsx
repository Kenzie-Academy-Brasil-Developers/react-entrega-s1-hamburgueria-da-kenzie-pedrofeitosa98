import { CartCard, CartCardInfos, CartCardImage } from "./style";

function CartProduct({ sale }) {
  return (
    <>
      <CartCard>
        <CartCardImage src={sale.img} alt="" />
        <CartCardInfos>
          <h4 className="heading">{sale.name}</h4>
          <p className="caption">{sale.category}</p>
        </CartCardInfos>
        <span className="cart-remove">Remover</span>
      </CartCard>
    </>
  );
}

export default CartProduct;
