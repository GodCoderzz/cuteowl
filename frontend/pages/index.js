import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return <>
    <div className={styles.container}>
      <Head>
        <title>Cuteowl Strapi App</title>
        <meta name="description" content="Cuteowl - The Rich Store" />
        <link rel="icon" href="/store-logo-h.svg" />
      </Head>


    
    </div>
    </>
}
