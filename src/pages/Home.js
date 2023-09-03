import React from 'react'
import Products from '../components/Products'

export default function Home() {
  return (
    <div>
      <h2 className='heading'>Welcome To The Store</h2>
      <section>
        <h2>Products</h2>
        <Products/>
      </section>
    </div>
  )
}
