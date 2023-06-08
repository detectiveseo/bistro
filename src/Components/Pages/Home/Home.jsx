import CategorySlider from './Category/CategorySlider';
import Banner from './Banner/Banner';
import PopularMenu from './PopularMenu/PopularMenu';
import Feature from './Features/Feature';

const Home = () => {

    return (
        <div>
            <Banner />
            <CategorySlider />
            <PopularMenu />
            <Feature />
        </div>
    );
};

export default Home;