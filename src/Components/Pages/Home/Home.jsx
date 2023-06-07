import React from 'react';
import Banner from './Banner';
import CategorySlider from './CategorySlider';
import SectionTitle from '../../Shared/SectionTitle';

const Home = () => {
    return (
        <div className='w-8/12 mx-auto'>
            <Banner />
            <div>
                <SectionTitle heading="ORDER ONLINE" subtitle="From 11:00am to 10:00pm"/>
                <CategorySlider />
            </div>
        </div>
    );
};

export default Home;