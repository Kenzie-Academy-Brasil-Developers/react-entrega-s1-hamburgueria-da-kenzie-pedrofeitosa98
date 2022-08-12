import { CartContainer, CartHeader, CartEmpty, CartList } from "./style";
import CartProduct from "../CartProduct";
import CartTotal from "../CartTotal";

function Cart({
  currentSale,
  cartTotal,
  totalPrice,
  removeProduct,
  removeSale,
}) {
  return (
    <>
      <CartContainer>
        <CartHeader>
          <h2>Carrinho de compras</h2>
        </CartHeader>
        {currentSale.length ? (
          <>
            <CartList>
              {currentSale.map((sale, index) => (
                <CartProduct
                  key={index}
                  sale={sale}
                  removeProduct={removeProduct}
                />
              ))}
            </CartList>
            <CartTotal
              currentSale={currentSale}
              cartTotal={cartTotal}
              totalPrice={totalPrice}
              removeSale={removeSale}
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
