import React from 'react';

const Product = ({product}) => {
    const {idMeal, strMeal, strMealThumb} = product;
    console.log(product);
    return (
        <div className='text-white'>
            <img src={strMealThumb} alt="" />
            <h1 className='text-2xl text-center'>{strMeal}</h1>
        </div>
    );
};

export default Product;