import Head from "next/head";

const Meta = ({ title, description }) => {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        {title ? <title>{title}</title> : <title>Ecommerce Next Js</title>}
        <meta name="description" content={description ? description : ""} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    </div>
  );
};

export default Meta;
