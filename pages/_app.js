import '../styles/global.css'

import Layout from "../components/Layout"
import { ThemeStore } from '../utils/ThemeStoreProvider'
import CartStoreProvider from '../utils/CartStoreProvider'


function MyApp({ Component, pageProps }) {

  return (
    <CartStoreProvider>
    <ThemeStore>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </ThemeStore>
    </CartStoreProvider>
  )
}

export default MyApp
