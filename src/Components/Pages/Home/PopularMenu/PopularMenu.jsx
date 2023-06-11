import SectionTitle from '../../../Shared/SectionTitle';
import MenuCard from '../../../Shared/MenuCard/MenuCard';
import useMenu from '../../../../assets/Hooks/useMenu';


const PopularMenu = () => {
    const menu = useMenu();
    const popularItems = menu.filter(items => items.category === "popular")



    return (
        <div>
            <SectionTitle heading="FROM OUR MENU" subtitle="Check it out" />
            <div className='w-8/12 mx-auto'>
                <MenuCard menu={popularItems}></MenuCard>
            </div>
        </div>

    );
};

export default PopularMenu;