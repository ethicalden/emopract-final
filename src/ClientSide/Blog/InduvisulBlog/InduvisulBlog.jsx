// eslint-disable-next-line no-unused-vars
import React from 'react';
import InduvisulBlogHero from './InduvisulBlogHero/InduvisulBlogHero';
import CaringBlog from './CaringBlog/CaringBlog';
import Footer from '../../Shared/Footer/Footer';

const InduvisulBlog = () => {
    return (
        <div>
            <InduvisulBlogHero></InduvisulBlogHero>
            <CaringBlog></CaringBlog>
            <div className='xl:pt-[200px] lg:pt-[150px]'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default InduvisulBlog;