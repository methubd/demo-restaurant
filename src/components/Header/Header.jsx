import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='flex justify-around bg-red-100 py-5 items-center text-slate-600'>
            
            <h3 className='text-3xl font-bold' href="/">DEMO RESTAURANT</h3>
            <div className=''>   
                         
                <Link className='p-2 font-bold' to="/restaurant">Restaurant</Link>
                <Link className='p-2 font-bold' to="/order">Make a Order</Link>
                <Link className='p-2 font-bold' to="/contact">Contact Us</Link>
            </div>
            
        </nav>
    );
};

export default Header;