import { CartContainer, CartHeader, CartEmpty, CartList } from "./style";
import CartTotal from "../CartTotal";

function Cart({ currentSale, cartTotal }) {
  return (
    <>
      <CartContainer>
        <CartHeader>
          <h2>Carrinho de compras</h2>
        </CartHeader>
        {currentSale.length ? (
          <>
            <CartList></CartList>
            <CartTotal cartTotal={cartTotal} />
          </>
        ) : (
          <CartEmpty>
            <h3 className="heading3">Sua sacola está vazia</h3>
            <p>Adicione itens</p>
          </CartEmpty>
        )}
      </CartContainer>
    </>
  );
}

export default Cart;
