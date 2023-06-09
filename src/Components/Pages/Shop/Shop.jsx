import React from 'react';
import { Helmet } from 'react-helmet';
import SectionBanner from '../../Shared/SectionBenner/SectionBanner';
import backgorundImg from '../../../assets/shop/banner2.jpg'

const Shop = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro boss | Menu</title>
            </Helmet>
            <SectionBanner backgroundImage={backgorundImg} heading={"our menu"} subtitle={"Would you like to try a dish?"}></SectionBanner>
        </div>
    );
};

export default Shop;