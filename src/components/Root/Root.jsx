import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Restaurant from '../Restaurant/Restaurant';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;