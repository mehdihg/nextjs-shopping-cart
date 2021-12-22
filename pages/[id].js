import { useRouter } from "next/router";
import { useContext } from "react";
import useSWR from "swr";
import CardButtons from "../components/CardButtons";
import Meta from "../components/Meta";
import { isInCart } from "../helpers/helpers";
import styles from "../styles/Product.module.css";
import { CartStoreContext } from "../utils/CartStoreProvider";

const Product = ({ data }) => {
  const { state, dispatch } = useContext(CartStoreContext);

  return (
    <div className={styles.productContainer}>
      <Meta title={data.title} description={data.description} />
      <div className={styles.imageProduct}>
        <img src={data.image} />
      </div>
      <div className={styles.showProductSect}>
        <h1>
          {data.title.length > 30 ? data.title.substring(0, 30) : data.title}
        </h1>
        <h2>Price:{data.price} $</h2>
        <p className={styles.ProductRate}>
          {data.rating.rate} stars ({data.rating.count} reviews)
        </p>

        {isInCart(state, data.id) ? (
          <div className="ProductButtons">
            <CardButtons
              counter={isInCart(state, data.id)}
              state={state}
              dispatch={dispatch}
              className={styles.ProductButtons}
            />
          </div>
        ) : (
          <button
            onClick={() => dispatch({ type: "ADD_TO_CART", payload: data })}
          >
            Add To Cart
          </button>
        )}
        <p className={styles.ProductDesc}>{data.description}</p>
      </div>
      <div></div>
    </div>
  );
};

export default Product;

export const getStaticPaths = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  const paths = data.map((product) => {
    return {
      params: { id: product.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async ({ params }) => {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data: data,
    },
  };
};
