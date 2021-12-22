import Link from "next/link";
import { useContext } from "react";
import { CartStoreContext } from "../utils/CartStoreProvider";
import CardButtons from "./CardButtons";
import styles from "../styles/Cart.module.css";
import { ThemeStoreContext } from "../utils/ThemeStoreProvider";
const Cart = () => {
  const { state, dispatch } = useContext(CartStoreContext);
  const { state: theme } = useContext(ThemeStoreContext);
  return (
    <div>
      {state.selectItems.length > 0 ? (
        <div className={styles.CartSect}>
          <div className={styles.CartSectDetails}>
            {state.selectItems.length > 0 &&
              state.selectItems.map((item) => {
                return (
                  <div className={styles.productCartSect} key={item.id}>
                    <div className={styles.productCartSpec}>
                      <img src={item.image} />
                      <h2>
                        {item.title.length > 15
                          ? item.title.substring(0, 20)
                          : item.title}
                      </h2>
                      <span>{item.price} $</span>
                    </div>
                    <div className="CardButtons">
                      <CardButtons
                        counter={item}
                        state={state}
                        dispatch={dispatch}
                      />
                    </div>
                  </div>
                );
              })}
          </div>
          <div className={styles.checkoutSect}>
            <h2>Subtotal ({state.itemsCounter} items):</h2>
            <p>{state.totalPrice.toFixed(3)} $</p>
            <button onClick={() => dispatch({ type: "CHECKOUT" })}>
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.CartMessages}>
          {state.checkout ? (
            <>
              <h2 className={theme.DarkMode ? styles.CartMessagesTitle : ""}>
                Thanks For Your Shopping
              </h2>
              <Link href="/">Shop More</Link>
            </>
          ) : (
            <>
              <h2 className={theme.DarkMode ? styles.CartMessagesTitle : ""}>
                Your Cart Is Empty
              </h2>
              <Link href="/">Shop</Link>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
