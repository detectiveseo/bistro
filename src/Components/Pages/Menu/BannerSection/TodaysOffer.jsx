import SectionBanner from '../../../Shared/SectionBenner/SectionBanner';
import backgorundImg from '../../../../assets/menu/banner3.jpg'
import SectionTitle from '../../../Shared/SectionTitle';
import MenuCard from '../../../Shared/MenuCard/MenuCard';
import BottomOutletBtn from '../../../Shared/Buttons/BottomOutletBtn';
import useMenu from '../../../../assets/Hooks/useMenu';


const TodaysOffer = () => {
    const menu = useMenu();
    const TodaysOfferItems = menu.filter(items => items.category === "offered")
    return (
        <>
        <SectionBanner backgroundImage={backgorundImg} heading={"our menu"} subtitle={"Would you like to try a dish?"}></SectionBanner>

        <div className='w-8/12 mx-auto'>
            <SectionTitle subtitle={"Don't miss"} heading={"TODAY'S OFFER"}></SectionTitle>

        <MenuCard menu={TodaysOfferItems}></MenuCard>

        <BottomOutletBtn>See more</BottomOutletBtn>
        </div>
        </>
    )
};

            export default TodaysOffer;