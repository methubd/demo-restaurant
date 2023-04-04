import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetail = () => {
    const product = useLoaderData();
    const {strMeal, strCategory, strArea, strMealThumb, strInstructions } = product.meals[0];
    console.log();
    return (
        <div className='grid md:grid-cols-2 gap-6 w-3/4 mx-auto mt-14'>
            <div>
                <img className='rounded-xl' src={strMealThumb} alt="" />
            </div>
            <div>
                <h1 className='font-bold text-5xl my-5'>{strMeal}</h1>
                <p className='text-2xl'>Category: {strCategory}</p>
                <p className='text-2xl'>Area: {strArea}</p>
                <p className='mt-5'>{strInstructions}</p>
                <button className='bg-amber-700 text-white py-2 px-8 my-5 rounded-md'>Buy Now</button>
            </div>
        </div>
    );
};

export default ProductDetail;