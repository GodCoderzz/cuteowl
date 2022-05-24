import '../styles/globals.css'
import Navbar from './components/Navbar'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {

  const [cart, setcart] = useState([])
  const [keyMaker, setkeyMaker] = useState(1)

  const addToCart = (item, qty, price) => {
    // console.log("Add To Cart")
    let newCart = cart
    for (let index = 0; index < qty; index++) {
      newCart.push([item, price])
    }
    console.log(newCart)
    setcart(newCart)
    console.log("this is cart", cart)
    setkeyMaker(Math.random())
  }
  const removeFromCart = (item, qty) => {

  }
  const clearCart = (item) => {
    setcart([])
  }
  return <>
    <Navbar cart={cart} keyMaker={keyMaker} />
    <Component cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} keyMaker={keyMaker} {...pageProps} />
  </>
}

export default MyApp
