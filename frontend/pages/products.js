import React from 'react'
import Link from 'next/link'

const products = ({products}) => {
  return <>
    <div className='container mx-auto px-4 md:px-10'>
        <section className="text-gray-600 body-font">
  <div className="container px-5 md:py-24 mx-auto">
    <div className="flex flex-wrap w-full md:mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Explore the shop</h1>
        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Browse the shop and grab the world class branded new items at the most affordable prices all over India, We guarenty your privacy and security in mind!</p>
    </div>
    <div className="flex flex-wrap -m-4">
     {products.data.map((item) => { return <div key={item.id} className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img className="h-75 rounded w-full mb-2" src={item.attributes.image.data && item.attributes.image.data.attributes.name} alt="content"/>
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font capitalize">{item.attributes.category}</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{item.attributes.title}</h2>
          <div className="flex">
            <button className={"border-2 border-gray-300 ml-1 rounded-full w-6 h-6 focus:outline-none " + `bg-${item.attributes.color}-500`}></button>
          </div>
          <p className="leading-relaxed text-base">{item.attributes.description.substr(0, 65)}</p>
          <p className='hidden bg-red-500 bg-green-500 bg-blue-500 bg-purple-500'></p>
          <Link href={`product/${item.attributes.slug}`}><button className="inline-flex text-white self-center items-center bg-purple-500 border-0 py-1 px-3 focus:outline-none hover:bg-purple-600 rounded text-base mt-4 md:mt-0">Buy</button></Link>
        </div>
      </div>})}
     
    </div>
  </div>
</section>
    </div>
  </>
}

export async function getServerSideProps(context) {
  let a = await fetch('http://localhost:1337/api/products?populate=*')
  let products = await a.json()
  // console.log(products)
  return {
    props: {products: products}, // will be passed to the page component as props
  }
}

export default products