import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Restaurant from '../Restaurant/Restaurant';

const Root = () => {
    const navigation = useNavigation();

    return (
        <div>
            
            <Header></Header>
            <div className='text-center'>
            {
                navigation.state === 'loading' ? 'Loading...' : ''
            }
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;