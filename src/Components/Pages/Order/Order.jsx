
import backgroundImage from '../../../assets/shop/banner2.jpg'
import SectionBanner from '../../Shared/SectionBenner/SectionBanner';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const Order = () => {
    return (
        <div>
            <SectionBanner
                backgroundImage={backgroundImage}
                heading={"OUR SHOP"}
                subtitle={"Would you like to try a dish?"}
            />

            <div>
                <Tabs>
                    <TabList>
                        <Tab>SALAD</Tab>
                        <Tab>PIZZA</Tab>
                        <Tab>SOUPS</Tab>
                        <Tab>DESSERTS</Tab>
                        <Tab>DRINKS</Tab>
                    </TabList>

                    <TabPanel>
                        <h2>Any content 1</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;