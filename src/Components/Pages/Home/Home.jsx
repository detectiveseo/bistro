import CategorySlider from './Category/CategorySlider';
import Banner from './Banner/Banner';
import PopularMenu from './PopularMenu/PopularMenu';
import Feature from './Features/Feature';
import Reviews from './Reviews/Reviews';

const Home = () => {

    return (
        <div>
            <Banner />
            <CategorySlider />
            <PopularMenu />
            <Feature />
            <Reviews />
        </div>
    );
};

export default Home;