
import useMenu from '../../../assets/Hooks/useMenu';
import backgroundImage from '../../../assets/shop/banner2.jpg'
import SectionBanner from '../../Shared/SectionBenner/SectionBanner';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ItemsFilter from './ItemsFilter';


const Order = () => {
    return (
        <div>
            <SectionBanner
                backgroundImage={backgroundImage}
                heading={"OUR SHOP"}
                subtitle={"Would you like to try a dish?"}
            />

            <div className='w-8/12 mx-auto my-10'>
                <Tabs>
                    <TabList>
                        <Tab>SALAD</Tab>
                        <Tab>PIZZA</Tab>
                        <Tab>SOUPS</Tab>
                        <Tab>DESSERTS</Tab>
                        <Tab>DRINKS</Tab>
                    </TabList>

                    <TabPanel>
                        <ItemsFilter categoryName={"salad"}></ItemsFilter>
                    </TabPanel>

                    <TabPanel>
                        <ItemsFilter categoryName={"pizza"}></ItemsFilter>
                    </TabPanel>

                    <TabPanel>
                        <ItemsFilter categoryName={"soup"}></ItemsFilter>
                    </TabPanel>

                    <TabPanel>
                        <ItemsFilter categoryName={"dessert"}></ItemsFilter>
                    </TabPanel>

                    <TabPanel>
                        <ItemsFilter categoryName={"drinks"}></ItemsFilter>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;