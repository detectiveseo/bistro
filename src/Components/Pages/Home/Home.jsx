import React from 'react';
import Banner from './Banner';
import CategorySlider from './CategorySlider';

const Home = () => {
    return (
        <div className='w-8/12 mx-auto'>
            <Banner />
            <CategorySlider />
        </div>
    );
};

export default Home;