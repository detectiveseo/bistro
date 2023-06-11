import { Helmet } from 'react-helmet';
import TodaysOffer from './BannerSection/TodaysOffer';
import CategoryItems from '../../Shared/CategoryItems/CategoryItems';
import backgorundImg from '../../../assets/menu/dessert-bg.jpeg'

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro boss | Menu</title>
            </Helmet>

            <TodaysOffer />

            
            <CategoryItems 
            backgorundImg={backgorundImg} 
            title={"DESSERTS"}
            subTilte={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            categoryName={"dessert"}/>

            <CategoryItems 
            backgorundImg={backgorundImg} 
            title={"PIZZA"}
            subTilte={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            categoryName={"pizza"}/>

            <CategoryItems 
            backgorundImg={backgorundImg} 
            title={"SALADS"}
            subTilte={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            categoryName={"pizza"}/>

            <CategoryItems 
            backgorundImg={backgorundImg} 
            title={"SOUPS"}
            subTilte={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            categoryName={"soup"}/>
        </div>
    );
};

export default Menu;