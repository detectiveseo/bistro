import SectionBanner from '../../../Shared/SectionBenner/SectionBanner';
import backgorundImg from '../../../../assets/menu/banner3.jpg'
import SectionTitle from '../../../Shared/SectionTitle';
import MenuCard from '../../../Shared/MenuCard/MenuCard';
import useMenu from '../../../../assets/Hooks/useMenu';


const TodaysOffer = () => {
    const menu = useMenu();
    const TodaysOfferItems = menu.filter(items => items.category === "offered")
    return (
        <div className=''>
        <SectionBanner backgroundImage={backgorundImg} heading={"our menu"} subtitle={"Would you like to try a dish?"}></SectionBanner>

        <div className='w-8/12 mx-auto my-20'>
            <SectionTitle subtitle={"Don't miss"} heading={"TODAY'S OFFER"}></SectionTitle>

        <MenuCard menu={TodaysOfferItems}></MenuCard>
        </div>
        </div>
    )
};

            export default TodaysOffer;