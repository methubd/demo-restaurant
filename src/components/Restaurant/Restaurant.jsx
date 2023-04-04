import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';

const Restaurant = () => {
    const products = useLoaderData(); 
    return (
        <div className='bg-amber-950'>
            <h1 className='text-center py-5 font-semibold text-2xl text-white'>Today Available Products: {products.meals.length} </h1>
            <div className='grid md: grid-cols-4 gap-10 w-3/4 mx-auto mt-10'>
                {
                    products.meals.map(product => <Product 
                        key = {product.idMeal}
                        product = {product}></Product>)
                }
            </div>
        </div>
    );
};

export default Restaurant;