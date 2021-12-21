
import Link from "next/link";
import { useContext } from "react";
import { isInCart } from "../helpers/helpers";
import styles from "../styles/Card.module.css";
import { CartStoreContext } from "../utils/CartStoreProvider";
import CardButtons from "./CardButtons";

const Card = ({ data }) => {
  const {state,dispatch}=useContext(CartStoreContext)

  const addToCartButton=(product)=>{
   dispatch({type:'ADD_TO_CART',payload:product})



  }

  return (
    <div className={styles.CardContainer}>
      {data &&
        data.map((product) => {
          
          return (
            <div className={styles.Card} key={product.id}>
              <Link href={`/product/${product.id}`} passHref >
                <img src={product.image} />
              </Link>
              <Link href={`/Product/${product.id}`} passHref>
                <h3>
                  {product.title.length > 20
                    ? product.title.substring(0, 20)
                    : product.title}
                </h3>
              </Link>
              <h4>{product.price} $</h4>

              {
                
                isInCart(state,product.id)?<div className="CardButtons"><CardButtons className={styles.CardButtons} dispatch={dispatch} state={state} counter={isInCart(state,product.id)}/></div>:<button onClick={()=>addToCartButton(product)}>Add To Cart</button>
                
              }
             
            </div>
          );
        })}
    </div>
  );
};

export default Card;
