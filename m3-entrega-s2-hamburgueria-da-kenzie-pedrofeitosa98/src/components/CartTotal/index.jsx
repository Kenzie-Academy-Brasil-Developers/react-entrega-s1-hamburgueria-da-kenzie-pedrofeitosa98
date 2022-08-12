import { CartBottom, PriceContainer } from "./style";

function CartTotal({ currentSale, cartTotal, totalPrice, removeSale }) {
  totalPrice(currentSale);
  return (
    <>
      <CartBottom>
        <PriceContainer>
          <h4 className="heading4">Total</h4>
          <span>R$ {cartTotal}</span>
        </PriceContainer>
        <button className="button big gray" onClick={() => removeSale()}>
          Remover todos
        </button>
      </CartBottom>
    </>
  );
}

export default CartTotal;
