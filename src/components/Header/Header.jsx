import React from 'react';
import { Outlet } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='flex justify-around bg-red-100 py-5 items-center text-slate-600'>
            <h3 className='text-3xl font-bold' href="/">DEMO RESTAURANT</h3>
            <div className=''>
                <a className='p-2 font-bold' href="/restaurant">Restaurant</a>
                <a className='p-2 font-bold' href="/order">Make a Order</a>
                <a className='p-2 font-bold' href="/contact">Contact Us</a>
            </div>
            
        </nav>
    );
};

export default Header;