import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    const {idMeal, strMeal, strMealThumb} = product;
    return (
        <div className='text-white'>
            <img src={strMealThumb} alt="" />
            <h1 className='text-2xl text-center'>{strMeal}</h1>
            <p className='font-semibold bg-slate-400 my-5 rounded-md text-center text-slate-800'><Link to={`/product/${idMeal}`}>See Details</Link></p>
        </div>
    );
};

export default Product;