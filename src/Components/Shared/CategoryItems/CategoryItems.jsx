import MenuCard from '../MenuCard/MenuCard';
import BottomOutletBtn from '../Buttons/BottomOutletBtn';
import useMenu from '../../../assets/Hooks/useMenu';
import SectionBanner from '../SectionBenner/SectionBanner';

const CategoryItems = ({backgorundImg, title, subTilte,  categoryName}) => {
    const menu = useMenu();
    const filterdMenu = menu.filter(items => items.category === `${categoryName}`)
    return (
           <>
           <SectionBanner backgroundImage={backgorundImg} heading={title} subtitle={subTilte}></SectionBanner>

            <div className='w-8/12 mx-auto my-10'>
                <MenuCard menu={filterdMenu}></MenuCard>

                <BottomOutletBtn to={`/order/${categoryName}`}>See more</BottomOutletBtn>
            </div>
           </>
            );
};
 
export default CategoryItems;