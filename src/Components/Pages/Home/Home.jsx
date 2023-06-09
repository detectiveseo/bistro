import { Helmet } from "react-helmet";
import CategorySlider from './Category/CategorySlider';
import Banner from './Banner/Banner';
import PopularMenu from './PopularMenu/PopularMenu';
import Feature from './Features/Feature';
import Reviews from './Reviews/Reviews';

const Home = () => {

    return (
        <div>
            <Helmet>
                <title>Bistro Boss</title>
            </Helmet>
            <Banner />
            <CategorySlider />
            <PopularMenu />
            <Feature />
            <div className="py-10">
                <Reviews />
            </div>
        </div>
    );
};

export default Home;