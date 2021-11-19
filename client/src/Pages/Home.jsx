import React from 'react'
import Category from '../components/Category/Category'
import Hero from '../components/Hero/Hero'
import Products from '../components/Products/Products'


const Home = () => {
    return (
        <div>
            <Hero/>
            <Category/>
            <Products/>
        </div>
    )
}

export default Home
