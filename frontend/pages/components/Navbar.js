import React from 'react'
import Link from 'next/link'
import {AiOutlineShoppingCart} from 'react-icons/ai'

const Navbar = ({cart, keyMaker}) => {
    return <>
        <div className="container">

            <header className="text-gray-600 body-font sticky shadow-lg">
                <div className="container mx-auto flex flex-wrap  flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src='/store-logo-h.svg' alt='logo' className='w-28 h-20' />

                    </a>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                        <Link href={'/'}><a className="mr-5 hover:text-gray-900">Home</a></Link>
                        <Link href={'/about'}><a className="mr-5 hover:text-gray-900">About</a></Link>
                        <Link href={'/products'}><a className="mr-5 hover:text-gray-900">Products</a></Link>
                        <Link href={'/contact'}><a className="mr-5 hover:text-gray-900">Contact</a></Link>
                        <span className='flex items-center'><AiOutlineShoppingCart className='text-xl '/>({cart.length})</span> 
                    </nav>
                
                    <button className="inline-flex self-center items-center bg-indigo-100 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-300 rounded text-base mt-4 md:mt-0">Login
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                 
                </div>
            </header>
        </div>

    </>
}

export default Navbar