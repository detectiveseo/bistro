import { useEffect, useState } from 'react';
import SectionTitle from '../../../Shared/SectionTitle';
import MenuCard from '../../../Shared/MenuCard/MenuCard';
import useMenu from '../../../../Hooks/useMenu';

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);

    console.log(useMenu("popular"))
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
            <SectionTitle heading="FROM OUR MENU" subtitle="Check it out" />
            <MenuCard menu={menu}></MenuCard>
        </div>
            
    );
};

export default PopularMenu;