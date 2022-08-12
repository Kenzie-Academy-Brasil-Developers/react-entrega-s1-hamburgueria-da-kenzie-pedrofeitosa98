import { CartContainer, CartHeader, CartEmpty, CartList } from "./style";
import CartProduct from "../CartProduct";
import CartTotal from "../CartTotal";

function Cart({ currentSale, cartTotal, totalPrice }) {
  return (
    <>
      <CartContainer>
        <CartHeader>
          <h2>Carrinho de compras</h2>
        </CartHeader>
        {currentSale.length ? (
          <>
            <CartList>
              {currentSale.map((sale) => (
                <CartProduct key={sale.id} sale={sale} />
              ))}
            </CartList>
            <CartTotal
              currentSale={currentSale}
              cartTotal={cartTotal}
              totalPrice={totalPrice}
            />
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
