import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import SectionBanner from '../../Shared/SectionBenner/SectionBanner';
import backgorundImg from '../../../assets/menu/banner3.jpg'
import SectionTitle from '../../Shared/SectionTitle';
import MenuCard from '../../Shared/MenuCard/MenuCard';

const Menu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch("menu.json")
            .then((res) => res.json())
            .then((data) => {
                const popularItems = data.filter(x => x.category == "popular");
                setMenu(popularItems)
            });
    }, [])

    return (
        <div>
            <Helmet>
                <title>Bistro boss | Menu</title>
            </Helmet>


            <SectionBanner backgroundImage={backgorundImg} heading={"our menu"} subtitle={"Would you like to try a dish?"}></SectionBanner>


            <SectionTitle subtitle={"Don't miss"} heading={"TODAY'S OFFER"}></SectionTitle>
            
            <MenuCard menu={menu}></MenuCard>
        </div>
    );
};

export default Menu;