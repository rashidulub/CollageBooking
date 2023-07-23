import { Container } from 'postcss';
import React from 'react';
import Navbar from '../Shared/Footer/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';

const ViewClass = () => {
    return (
        <div className='mt-5'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default ViewClass;