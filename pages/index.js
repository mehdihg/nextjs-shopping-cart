import Head from 'next/head'
import Image from 'next/image'
import { useContext } from 'react'
import Card from '../components/Card'
import Meta from '../components/Meta'
import styles from '../styles/HomePage.module.css'
import { ThemeStoreContext } from '../utils/ThemeStoreProvider'


export default function Home({data}) {
  const {state}=useContext(ThemeStoreContext)

  return (
    <>
    <Meta title='Store By Next Js'/>
    <div className={styles.Home}>
      <h1 className={state.DarkMode ? styles.DarkTitle:styles.LightTitle}>Products</h1>
 
      <Card data={data}/>
    </div>
    </>
  )
}
export const getStaticProps = async()=>{
  const res=await fetch('https://fakestoreapi.com/products')
  const data=await res.json()
  if (!data) {
    return {
      notFound: true,
    }
  }
  return {
    props:{
      data
    }
  }
}
