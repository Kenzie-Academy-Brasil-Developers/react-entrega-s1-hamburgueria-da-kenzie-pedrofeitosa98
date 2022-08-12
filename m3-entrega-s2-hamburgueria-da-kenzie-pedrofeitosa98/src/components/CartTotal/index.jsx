import { CartBottom, PriceContainer } from "./style";

function CartTotal({ currentSale, cartTotal, totalPrice }) {
  totalPrice(currentSale);
  return (
    <>
      <CartBottom>
        <PriceContainer>
          <h4 className="heading4">Total</h4>
          <span>R$ {cartTotal}</span>
        </PriceContainer>
        <button className="button big gray">Remover todos</button>
      </CartBottom>
    </>
  );
}

export default CartTotal;
